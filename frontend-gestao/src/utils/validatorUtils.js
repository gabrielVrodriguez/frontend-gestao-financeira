




export function validateEmail(email) {
  if (!email) {
    return "O campo de email é obrigatório.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Por favor, insira um email válido.";
  }
  return null; // Retorna null se não houver erro
}