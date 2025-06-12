window.addEventListener('DOMContentLoaded', () => {
  const musica = document.getElementById("musica");
  document.getElementById("botaoMusica").addEventListener("click", () => {
    musica.volume = 0.7;
    musica.play();
  });

  // Atualiza o contador digital estilo relógio
  function atualizarContador() {
    const inicio = new Date("2024-10-09T00:00:00");
    const agora = new Date();
    const diff = agora - inicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    const formatado = `${dias}d ${String(horas).padStart(2, '0')}h ${String(minutos).padStart(2, '0')}m ${String(segundos).padStart(2, '0')}s`;
    document.getElementById("contador").textContent = `Juntos há: ${formatado} ❤️`;
  }

  setInterval(atualizarContador, 1000);
  atualizarContador();

  // Corações caindo
  const container = document.getElementById("coracoes-container");

  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = (Math.random() * 2 + 3) + "s";
    coracao.textContent = "❤️";
    container.appendChild(coracao);
    setTimeout(() => coracao.remove(), 5000);
  }

  setInterval(criarCoracao, 300);
});
