document.addEventListener("DOMContentLoaded", function () {
  const chatbox = document.getElementById('chatbox');
  const userInput = document.getElementById('userInput');
  const sendButton = document.getElementById('send');

  sendButton.addEventListener('click', () => {
    const input = userInput.value.trim();
    if (input !== '') {
      addMessage('user', input);
      const reply = getBotReply(input);
      setTimeout(() => addMessage('bot', reply), 500);
      userInput.value = '';
    }
  });

  function addMessage(sender, text) {
    const message = document.createElement('div');
    message.className = sender;
    message.textContent = `${sender === 'user' ? 'You' : 'Bot'}: ${text}`;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function getBotReply(input) {
    input = input.toLowerCase();

    if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! How can I help you today?';
    } else if (input.includes('how are you')) {
      return 'I’m just a bot, but I’m doing great!';
    } else if (input.includes('your name')) {
      return 'I’m just a simple chatbot.';
    } else if (input.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } else {
      return 'Sorry, I didn’t understand that.';
    }
  }
});
