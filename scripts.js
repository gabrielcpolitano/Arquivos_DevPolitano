const motivationalMessages = [
  "Acredite em você mesmo!",
  "Você é capaz de grandes coisas!",
  "Continue avançando, um passo de cada vez.",
  "A persistência é o caminho para o sucesso.",
  "Não desista, o começo é sempre a parte mais difícil."
];

const programmingMessages = [
  "Codar é transformar sonhos em realidade.",
  "Cada erro é uma oportunidade de aprendizado.",
  "A prática constante leva à perfeição.",
  "Resolver problemas é o que torna a programação divertida!",
  "Você está a um passo de criar algo incrível!"
];

document.getElementById('add-goal-button').addEventListener('click', () => {
  addGoal();
});

function addGoal(goalText = '') {
  const goalsContainer = document.getElementById('goals-container');
  const goalElement = document.createElement('div');
  goalElement.classList.add('goal');

  const goalInput = document.createElement('input');
  goalInput.type = 'text';
  goalInput.value = goalText;
  goalInput.placeholder = 'Escreva sua meta aqui...';
  goalInput.addEventListener('input', saveGoals);

  const randomMotivationalMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
  const randomProgrammingMessage = programmingMessages[Math.floor(Math.random() * programmingMessages.length)];

  const motivationalText = document.createElement('span');
  motivationalText.textContent = ` ${randomMotivationalMessage} ${randomProgrammingMessage}`;

  goalElement.appendChild(goalInput);
  goalElement.appendChild(motivationalText);
  goalsContainer.appendChild(goalElement);

  saveGoals();
}

function saveGoals() {
  const goals = [];
  document.querySelectorAll('.goal input').forEach(input => {
      goals.push(input.value);
  });
  localStorage.setItem('goals', JSON.stringify(goals));
}

function loadGoals() {
  const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
  savedGoals.forEach(goal => addGoal(goal));
}

document.addEventListener('DOMContentLoaded', loadGoals);
