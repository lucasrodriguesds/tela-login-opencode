# Documentação do Projeto: Projeto Tela Login

Este projeto é uma demonstração de uma interface de autenticação moderna, desenvolvida com foco em UX (Experiência do Usuário), responsividade e boas práticas de estruturação.

---

## 🏗️ Estrutura do Projeto

O projeto é dividido em três arquivos principais, cada um com uma responsabilidade clara:

| Arquivo | Função |
| :--- | :--- |
| `index.html` | Estrutura da página de **Login**. |
| `cadastro.html` | Estrutura da página de **Cadastro**. |
| `style.css` | Define todo o visual, cores, fontes e comportamento responsivo das páginas. |

---

## 🎨 Principais Conceitos Implementados

### 1. Variáveis CSS (`:root`)
No início do `style.css`, utilizamos o bloco `:root`. Isso é uma **boas prática** para definir variáveis globais. Se você quiser mudar a cor de todo o site, basta alterar o valor aqui, e ele atualizará automaticamente em todos os lugares onde a variável é usada.

```css
:root {
  --primary-color: #4f46e5; /* Cor principal (Indigo) */
  --bg-color: #f3f4f6;     /* Cor de fundo */
  --border-radius: 12px;   /* Arredondamento padrão */
}
```

### 2. Estrutura do Formulário (`.container`, `.input-group`)
Utilizamos classes para organizar o HTML:
- `.container`: Centraliza o formulário na tela e aplica o sombreamento (shadow) para dar profundidade.
- `.input-group`: Uma "caixa" que agrupa o `label` (título do campo) e o `input` (caixa de texto), garantindo um espaçamento consistente entre eles.

### 3. Responsividade (`@media`)
Para que o site funcione bem tanto no computador quanto no celular, usamos `@media (max-width: 480px)`. Isso diz ao navegador: "Se a tela for menor que 480px (típico de celulares), aplique este estilo diferente". No nosso caso, reduzimos o preenchimento (padding) do container para aproveitar melhor o espaço limitado.

---

## 💡 O que é "Vibecoding" neste contexto?

"Vibecoding" refere-se a este processo ágil de desenvolvimento onde usamos a IA (eu) para:
1.  **Iterar rapidamente:** Testar ideias e ver o resultado imediato.
2.  **Focar no fluxo:** Manter a velocidade da criação sem se prender excessivamente na sintaxe manual de cada linha de código.
3.  **Refinamento contínuo:** Construir uma base funcional e, em seguida, pedir ajustes estéticos ou funcionais ("o visual está bom, agora vamos adicionar validação").

---

## 🚀 Infraestrutura (Firebase)

O projeto foi migrado do armazenamento local (`localStorage`) para o **Firebase Authentication**.

- **Autenticação:** O cadastro e login agora são gerenciados pelo Firebase, permitindo persistência real de dados em nuvem.
- **Configuração:** A conexão é feita no arquivo `script.js` usando o `firebaseConfig`.

---
*Dica: Sempre que você ler um arquivo `.html`, imagine que é o esqueleto (a estrutura). O arquivo `.css` é a pele e a roupa (o visual). O arquivo `.js` (que criaremos em breve) será o cérebro (o comportamento).*
