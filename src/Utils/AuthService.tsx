import { supabase } from '../SupaBase/SupaBase';

export const signUp = async (
    email: string, 
    password: string,
    name: string,
    phone: string,) => {
    try {
            const { data, error } = await supabase.auth.signUp({ email,password})
            if (error){
                throw error
            };

            const user=data.user;
            
            const { error: profileError } = await supabase.from('profiles').insert([
            {
              id: user?.id,
              name,
              phone,
            },
            ])    
            if (profileError) throw profileError;
    
            return { 
                user, 
                session: data.session 
            }
        }catch (error: any) {
        return { 
            error: error.message 
        }
    }
}

//----------------------------------------------------------------------------------

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({email,password,})
    if (error) throw error
    return { 
        user: data.user, 
        session: data.session 
    }
  } catch (error: any) {
    return { 
        error: error.message 
    }
  }
}

//-----------------------------------------------------------------------------------

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { 
        success: true 
    }
  } catch (error: any) {
    return { 
        error: error.message 
    }
  }
}

// ================= GET CURRENT USER =================
export const getCurrentUser = async () => {
  const { data } = await supabase.auth.getUser()
  return data?.user
}

//---------------------------------------------------------
export const getSession = async () => {
  const { data } = await supabase.auth.getSession()
  return data?.session
}