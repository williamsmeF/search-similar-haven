
import { supabase } from "@/integrations/supabase/client";

export interface Profile {
  id: string;
  username: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpdateProfileParams {
  username?: string;
  avatar_url?: string;
}

export const profileService = {
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', userId)
      .single();
    
    if (error) throw error;
    
    return data as Profile;
  },
  
  async updateProfile(userId: string, updates: UpdateProfileParams) {
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    
    return data as Profile;
  },
  
  async uploadAvatar(userId: string, file: File) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}-${Math.random()}.${fileExt}`;
    const filePath = `avatars/${fileName}`;
    
    // Create a bucket for avatars if it doesn't exist
    const { error: bucketError } = await supabase.storage.createBucket('avatars', {
      public: true
    });
    
    // Upload the file
    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file);
    
    if (uploadError) throw uploadError;
    
    // Get the public URL
    const { data } = supabase
      .storage
      .from('avatars')
      .getPublicUrl(filePath);
      
    // Update profile
    await profileService.updateProfile(userId, {
      avatar_url: data.publicUrl
    });
    
    return data.publicUrl;
  }
};
