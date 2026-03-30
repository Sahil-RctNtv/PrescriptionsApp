import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://yypjxzhhmjlhkdvianqe.supabase.co';
export const supabaseAnonKey = 'sb_publishable_TJTopmN4E8Q9mdiMq0LAUg_rKxJY_do';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)