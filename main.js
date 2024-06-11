const userName = document.getElementById("input-user");
const inputBtn = document.getElementById("input-btn");
const quotesWord = document.getElementById("quotes");
const contQuotes = document.querySelector(".container-quotes");
const closeBtn = document.getElementById("close-btn");

function quotesGenerate() {
  inputBtn.classList.add("scaled");
  setTimeout(() => {
    inputBtn.classList.toggle("scaled");
  }, 200);

  const name = userName.value;

  const quotesList = [
    `Stay strong, ${name}. You have incredible potential and the ability to achieve all your dreams.`,
    `Never give up, ${name}. Every small step you take brings you closer to your goal.`,
    `Remember, ${name}, success is not about how fast you reach it, but about how hard you try.`,
    `You can do it, ${name}. Believe in yourself and all that you are.`,
    `Every challenge you face is an opportunity to grow, ${name}. Keep moving forward.`,
    `Stay focused and don't let failure stop you, ${name}. You are stronger than you think.`,
    `Believe that tomorrow will be better, ${name}. Keep fighting and never stop dreaming.`,
    `When you feel tired, remember all the reasons why you started, ${name}. Don't give up.`,
    `You are a warrior, ${name}. Every obstacle only makes you stronger.`,
    `Stay optimistic, ${name}. A bright future awaits you if you keep striving and never give up.`,
  ];

  quotesWord.textContent =
    quotesList[Math.floor(Math.random() * quotesList.length)];

  contQuotes.classList.add("showed");

  userName.value = "";
}

function closeQuotes() {
  closeBtn.classList.add("scaled");

  setTimeout(() => {
    closeBtn.classList.toggle("scaled");
  }, 200);

  quotesWord.textContent = "";

  contQuotes.classList.remove("showed");
}

inputBtn.addEventListener("click", quotesGenerate);
closeBtn.addEventListener("click", closeQuotes);
