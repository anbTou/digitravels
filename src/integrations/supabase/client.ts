// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xtembotroctqpfthtdwf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0ZW1ib3Ryb2N0cXBmdGh0ZHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1NjE0NTQsImV4cCI6MjA1MzEzNzQ1NH0.2DmziNY82OYkC-RUdcnrSQOOUpyd_FRYghs9EuZ0gCo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);