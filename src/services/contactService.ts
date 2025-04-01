
import { supabase } from "@/integrations/supabase/client";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  user_id?: string;
  created_at: string;
}

export interface CreateContactMessageParams {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const contactService = {
  async submitContactMessage(data: CreateContactMessageParams) {
    // Get current user if logged in
    const userResponse = await supabase.auth.getUser();
    const userId = userResponse.data.user?.id;
    
    const { data: contactMessage, error } = await supabase
      .from('contact_messages')
      .insert({
        ...data,
        user_id: userId || null,
      })
      .select()
      .single();
    
    if (error) throw error;
    
    return contactMessage;
  },
  
  async getUserMessages() {
    const { data, error } = await supabase
      .from('contact_messages')
      .select()
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return data || [];
  }
};
