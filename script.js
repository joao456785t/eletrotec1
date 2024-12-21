// Adiciona o evento de submissão no formulário
document.getElementById('whatsappForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém o nome do usuário
    const nome = document.getElementById('nome').value.trim();

    if (nome) {
        const numero = "5573988145913"; // Número do WhatsApp
        const mensagem = `Olá, me chamo ${nome}. Vim pelo site, ainda está disponível?`; // Mensagem personalizada
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        // Redireciona para o WhatsApp
        window.open(url, '_blank');
    } else {
        alert('Por favor, preencha seu nome antes de enviar a mensagem.');
    }
});
