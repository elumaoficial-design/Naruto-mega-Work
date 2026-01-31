// 🔑 CONFIGURAÇÃO SUPABASE
const SUPABASE_URL = "https://iqehcccxzfokmsoktjua.supabase.co";
const SUPABASE_KEY = "sb_publishable_b1-CaCpTrnMHmNAnEVpOxA_NB0-rSMr";

// cria o client
const supabase = supabaseJs.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// função chamada pelo botão
async function login() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google"
  });

  if (error) {
    alert("Erro no login: " + error.message);
  }
}

console.log("script.js carregado com sucesso");
