// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbscO_j9cwn-50OH6M7G4p9z3sqtSnqXQ",
  authDomain: "tela-de-login---opencode.firebaseapp.com",
  projectId: "tela-de-login---opencode",
  storageBucket: "tela-de-login---opencode.firebasestorage.app",
  messagingSenderId: "504371411989",
  appId: "1:504371411989:web:5a9c524436cb7a22dba21c",
  measurementId: "G-7LMVFK291N"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const passwordInput = document.getElementById('password');
  const strengthBar = document.getElementById('password-strength-bar');

  // Função para calcular a força da senha
  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[!@#$%^&*]/.test(password)) strength += 25;
    return strength;
  };

  // Evento para atualizar a barra de força em tempo real
  if (passwordInput && strengthBar) {
    passwordInput.addEventListener('input', () => {
      const strength = calculateStrength(passwordInput.value);
      strengthBar.style.width = strength + '%';
      
      if (strength <= 25) strengthBar.style.backgroundColor = '#ef4444'; // Vermelho
      else if (strength <= 50) strengthBar.style.backgroundColor = '#f59e0b'; // Laranja
      else if (strength <= 75) strengthBar.style.backgroundColor = '#3b82f6'; // Azul
      else strengthBar.style.backgroundColor = '#10b981'; // Verde
    });
  }

  if (!form) return;

  // Função para limpar erros
  const clearErrors = () => {
    document.querySelectorAll('.error-message').forEach(el => el.innerText = '');
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();
    
    const submitBtn = document.getElementById('submit-btn');
    const spinner = document.getElementById('btn-spinner');
    const btnText = document.getElementById('btn-text');
    
    spinner.style.display = 'inline-block';
    btnText.innerText = 'Processando...';
    submitBtn.disabled = true;

    // Identificar se é página de Login ou Cadastro pelo título do h2
    const title = document.querySelector('h2').innerText;
    let isValid = true;
    
    if (title === "Login") {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      try {
        await auth.signInWithEmailAndPassword(email, password);
        alert("Login realizado com sucesso!");
        localStorage.setItem('loggedUser', email);
        window.location.href = "dashboard.html";
      } catch (error) {
        document.getElementById('password-error').innerText = "E-mail ou senha incorretos ou erro de conexão.";
        isValid = false;
      }
      
    } else if (title === "Cadastro") {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // Validação de Senha: Pelo menos uma maiúscula e um caractere especial
      const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
      
      if (!passwordRegex.test(password)) {
        document.getElementById('password-error').innerText = "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.";
        isValid = false;
      }

      if (isValid) {
        try {
          await auth.createUserWithEmailAndPassword(email, password);
          alert("Cadastro realizado com sucesso!");
          window.location.href = "index.html"; // Redirecionar para o login
        } catch (error) {
          document.getElementById('email-error').innerText = "Erro no cadastro: " + error.message;
          isValid = false;
        }
      }
    }

    if (!isValid) {
      spinner.style.display = 'none';
      btnText.innerText = title === "Login" ? "Entrar" : "Cadastrar";
      submitBtn.disabled = false;
    }
  });
});
