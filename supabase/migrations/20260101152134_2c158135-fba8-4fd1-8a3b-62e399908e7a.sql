-- Ensure RLS is enabled on contact_messages (should already be, but confirming)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Drop any existing SELECT policies that might exist
DROP POLICY IF EXISTS "Anyone can read contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Public can read contact messages" ON public.contact_messages;

-- The table now has:
-- 1. RLS enabled
-- 2. INSERT policy for anyone to submit messages
-- 3. NO SELECT policy = only backend/service role can read messages
-- This ensures contact data is protected and only accessible through your backend