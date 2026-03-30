const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://yypjxzhhmjlhkdvianqe.supabase.co';
const supabaseAnonKey = 'sb_publishable_TJTopmN4E8Q9mdiMq0LAUg_rKxJY_do';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  const { data, error } = await supabase
    .from('prescriptions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('DB error:', error);
    return;
  }

  for (const item of data) {
    console.log(`Checking ${item.file_name}... url: ${item.file_url}`);
    try {
      const res = await fetch(item.file_url);
      console.log(`Status: ${res.status}, Type: ${res.headers.get('content-type')}, Size: ${res.headers.get('content-length')}`);
      const text = await res.text();
      console.log('Preview: ' + text.substring(0, 100));
    } catch (e) {
      console.error(e);
    }
  }
}

check();
