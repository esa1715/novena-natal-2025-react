export async function carregarEncontros() {
  const resp = await fetch("/encontros.json");
  return resp.json();
}