function updateTimer() {
    // Obtém a data e hora atuais
    const now = new Date();
    
    // Define o horário alvo para 00:00
    const target = new Date();
    target.setHours(00, 00, 0); // 00:00:00
    
    // Se o horário alvo já passou para hoje, define o alvo para o próximo dia
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }

    // Calcula a diferença em milissegundos
    const diff = target - now;
    
    if (diff <= 0) {
        // Se o tempo acabou, para o temporizador
        clearInterval(timerInterval);
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Atualiza e exibe a imagem
        const imgElement = document.getElementById('imagem');
        imgElement.src = 'celebration.jpg'; // Coloque o caminho da sua imagem aqui
        imgElement.style.display = 'block'; // Exibe a imagem
        
        return;
    }
    
    // Calcula horas, minutos e segundos restantes
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Atualiza o display
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Atualiza o temporizador a cada segundo
const timerInterval = setInterval(updateTimer, 1000);

// Inicializa o temporizador imediatamente
updateTimer();



        