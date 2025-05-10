const quoteText = document.getElementById('citacao');
const authorText = document.getElementById('author');
const button = document.getElementById('new-citacao');
const loading = document.getElementById('loading');

// Lista de citações
const citacaos = [
  { text: "A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon" },
  { text: "Não importa o quão devagar você vá, contanto que não pare.", author: "Confúcio" },
  { text: "O único modo de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
  { text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier" },
  { text: "Você não pode mudar o vento, mas pode ajustar as velas do barco.", author: "Confúcio" },
  { text: "A única forma de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs" },
  { text: "Acredite em si próprio e todo o resto virá naturalmente.", author: "Elon Musk" },
  { text: "Ser feliz não é ter uma vida perfeita. É saber que, apesar das imperfeições, ela é bela.", author: "Desconhecido" },
  { text: "A persistência é o caminho do êxito.", author: "Charles Chaplin" },
  { text: "Nunca é tarde para ser o que você poderia ter sido.", author: "George Eliot" },
  { text: "O segredo do sucesso é a constância do propósito.", author: "Benjamin Disraeli" },
  { text: "O maior erro que você pode cometer é ter medo de cometer um erro.", author: "Elbert Hubbard" },
  { text: "A vida é curta, e o tempo não volta atrás.", author: "Desconhecido" },
  { text: "O melhor jeito de prever o futuro é criá-lo.", author: "Abraham Lincoln" },
  { text: "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.", author: "Charles Darwin" }
];

function getRandomGradient() {
  const gradients = [
    'linear-gradient(135deg, #ff9a9e, #fad0c4)',
    'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
    'linear-gradient(135deg, #ffecd2, #fcb69f)',
    'linear-gradient(135deg, #d4fc79, #96e6a1)',
    'linear-gradient(135deg, #84fab0, #8fd3f4)',
    'linear-gradient(135deg, #a18cd1, #fbc2eb)'
  ];
  return gradients[Math.floor(Math.random() * gradients.length)];
}

// Função 
function getRandomcitacao() {
  const randomIndex = Math.floor(Math.random() * citacaos.length);
  const randomcitacao = citacaos[randomIndex];

  quoteText.textContent = `"${randomcitacao.text}"`;
  authorText.textContent = `- ${randomcitacao.author}`;

  document.body.style.background = getRandomGradient();
}

button.addEventListener('click', getRandomcitacao);

window.addEventListener('load', getRandomcitacao);
