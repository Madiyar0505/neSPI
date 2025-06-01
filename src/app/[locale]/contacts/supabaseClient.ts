// Supabase-қа қосылу үшін клиент
import { createClient } from '@supabase/supabase-js';

// Мына жерге өзіңіздің Supabase URL және API KEY қойыңыз
const supabaseUrl = 'https://cycgedmckybwudlkpssy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5Y2dlZG1ja3lid3VkbGtwc3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4MDU2ODYsImV4cCI6MjA2NDM4MTY4Nn0.YKx76Fx4nHzRxXnmLfjTCrs-mkeTvS9UkcU38vLZlU0'; // Бұл жерде толық кілтті қойыңыз

export const supabase = createClient(supabaseUrl, supabaseKey); 