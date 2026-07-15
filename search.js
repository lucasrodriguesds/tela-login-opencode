// Mock data - Em uma aplicação real, isso viria do Firestore
const searchData = {
  clientes: [
    { id: 1, name: "Lucas Silva", type: "Cliente" },
    { id: 2, name: "Maria Oliveira", type: "Cliente" }
  ],
  tarefas: [
    { id: 1, title: "Finalizar Kanban", type: "Tarefa" },
    { id: 2, title: "Reunião de Alinhamento", type: "Tarefa" }
  ],
  contatos: [
    { id: 1, name: "Suporte Técnico", type: "Contato" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('global-search');
  
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      if (!term) return;

      // Filtragem simples combinando todas as categorias
      const results = [
        ...searchData.clientes.filter(item => item.name.toLowerCase().includes(term)),
        ...searchData.tarefas.filter(item => item.title.toLowerCase().includes(term)),
        ...searchData.contatos.filter(item => item.name.toLowerCase().includes(term))
      ];

      console.log("Resultados da busca:", results);
      // Aqui você implementaria a exibição dos resultados na tela
    });
  }
});
