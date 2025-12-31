import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Simple validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const sanitizeInput = (input: string): string => {
  return input.trim().slice(0, 1000); // Limit length and trim
};

const validateContactForm = (data: unknown): { valid: boolean; errors: string[]; sanitized?: ContactFormData } => {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }

  const formData = data as Record<string, unknown>;

  // Validate name
  if (!formData.name || typeof formData.name !== "string" || formData.name.trim().length === 0) {
    errors.push("Name is required");
  } else if (formData.name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  // Validate email
  if (!formData.email || typeof formData.email !== "string") {
    errors.push("Email is required");
  } else if (!isValidEmail(formData.email)) {
    errors.push("Invalid email address");
  } else if (formData.email.length > 255) {
    errors.push("Email must be less than 255 characters");
  }

  // Validate subject
  if (!formData.subject || typeof formData.subject !== "string" || formData.subject.trim().length === 0) {
    errors.push("Subject is required");
  } else if (formData.subject.length > 200) {
    errors.push("Subject must be less than 200 characters");
  }

  // Validate message
  if (!formData.message || typeof formData.message !== "string" || formData.message.trim().length === 0) {
    errors.push("Message is required");
  } else if (formData.message.length > 5000) {
    errors.push("Message must be less than 5000 characters");
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // Return sanitized data
  return {
    valid: true,
    errors: [],
    sanitized: {
      name: sanitizeInput(formData.name as string),
      email: (formData.email as string).trim().toLowerCase(),
      subject: sanitizeInput(formData.subject as string),
      message: sanitizeInput(formData.message as string),
    },
  };
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    console.log("Received contact form submission request");

    // Parse request body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      console.error("Failed to parse request body");
      return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Validate form data
    const validation = validateContactForm(body);
    if (!validation.valid) {
      console.log("Validation failed:", validation.errors);
      return new Response(
        JSON.stringify({ error: "Validation failed", details: validation.errors }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { name, email, subject, message } = validation.sanitized!;

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert the contact message
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name,
        email,
        subject,
        message,
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save message. Please try again later." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Contact message saved successfully:", data.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been sent successfully!" 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Unexpected error in submit-contact function:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again later." }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
