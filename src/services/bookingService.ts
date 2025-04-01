
import { supabase } from "@/integrations/supabase/client";
import { v4 as uuidv4 } from "@supabase/supabase-js/dist/main/lib/helpers";

export interface Booking {
  id: string;
  user_id: string;
  name: string;
  email: string;
  company?: string;
  booking_date: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'canceled';
  created_at: string;
  updated_at: string;
}

export interface CreateBookingParams {
  name: string;
  email: string;
  company?: string;
  booking_date: string;
  message?: string;
}

export const bookingService = {
  async createBooking(data: CreateBookingParams) {
    const user = supabase.auth.getUser();
    if (!user) {
      throw new Error("User not authenticated");
    }
    
    const bookingId = `DEMO-${uuidv4().slice(0, 8).toUpperCase()}`;
    
    const { data: booking, error } = await supabase
      .from('bookings')
      .insert({
        ...data,
        id: bookingId,
        user_id: (await user).data.user?.id,
        status: 'pending',
      })
      .select()
      .single();
    
    if (error) throw error;
    
    return booking;
  },
  
  async getUserBookings() {
    const { data, error } = await supabase
      .from('bookings')
      .select()
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    return data || [];
  },
  
  async getBooking(id: string) {
    const { data, error } = await supabase
      .from('bookings')
      .select()
      .eq('id', id)
      .single();
    
    if (error) throw error;
    
    return data;
  },
  
  async updateBookingStatus(id: string, status: 'pending' | 'confirmed' | 'canceled') {
    const { data, error } = await supabase
      .from('bookings')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    return data;
  },
  
  async deleteBooking(id: string) {
    const { error } = await supabase
      .from('bookings')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    
    return true;
  }
};
