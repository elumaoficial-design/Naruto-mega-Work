import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://iqehcccxzfokmsoktjua.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_b1-CaCpTrnMHmNAnEVpOxA_NB0-rSMr";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ===== TESTE DE CONEXÃO =====
async function testarConexao() {
  const { data, error } = await supabase
    .from("comandos") // ⚠️ confirme o nome da tabela
    .select("*")
    .order("criado_em", { ascending: false })
    .limit(5);

  if (error) {
    console.error("Erro Supabase:", error.message);
    document.getElementById("status").innerText = "❌ Erro ao conectar";
    return;
  }

  document.getElementById("status").innerText = "✅ Supabase conectado";
  console.log("Dados recebidos:", data);
}

testarConexao();
