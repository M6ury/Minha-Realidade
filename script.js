window.addEventListener('DOMContentLoaded', () => {
  // Contador de dias
  const inicio = new Date("2024-10-09T00:00:00");
  const hoje = new Date();
  const diffTime = Math.abs(hoje - inicio);
  const dias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById('contador').textContent = `Já se passaram ${dias} dias desde o nosso início ❤️`;

  // Música ao clicar
  const musica = document.getElementById("musica");
  document.getElementById("botaoMusica").addEventListener("click", () => {
    musica.volume = 0.7;
    musica.play();
  });

  // Corações descendo
  const container = document.getElementById("coracoes-container");

  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = (Math.random() * 2 + 3) + "s";
    coracao.textContent = "❤️";
    container.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 5000);
  }

  setInterval(criarCoracao, 300);
});
