<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>ChatGPT avec bouton voix</title>
<style>
  body {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 40px auto;
    padding: 10px;
    background: #f4f4f8;
  }
  #chat {
    border: 1px solid #ccc;
    height: 400px;
    overflow-y: auto;
    padding: 10px;
    background: white;
    margin-bottom: 10px;
    border-radius: 8px;
  }
  .message {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  .user {
    font-weight: bold;
    color: #007bff;
    margin-right: 8px;
  }
  .bot {
    font-weight: bold;
    color: #28a745;
    margin-right: 8px;
  }
  .text {
    flex: 1;
  }
  button.speak-btn {
    background: #28a745;
    color: white;
    border: none;
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  #inputForm {
    display: flex;
  }
  #inputForm input {
flex: 1;
    padding: 10px;
    font-size: 16px;
  }
  #inputForm button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
</head>
<body>

<div id="chat"></div>

<form id="inputForm">
  <input type="text" id="userInput" placeholder="Tape ta question..." autocomplete="off" required />
  <button type="submit">Envoyer</button>
</form>

<script>
const chat = document.getElementById('chat');
const inputForm = document.getElementById('inputForm');
const userInput = document.getElementById('userInput');

// Fonction pour échapper les caractères HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Fonction pour ajouter un message dans la discussion
function addMessage(user, text, isBot = false) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'message';

  const userSpan = document.createElement('span');
  userSpan.className = isBot ? 'bot' : 'user';
  userSpan.textContent = isBot ? 'Bot:' : 'Vous:';

  const textSpan = document.createElement('span');
  textSpan.className = 'text';
  textSpan.innerHTML = escapeHtml(text);

  msgDiv.appendChild(userSpan);
  msgDiv.appendChild(textSpan);

  // Si c'est le bot, ajoute un bouton de synthèse vocale
if (isBot) {
    const speakBtn = document.createElement('button');
    speakBtn.className = 'speak-btn';
    speakBtn.textContent = '🔊';
    speakBtn.title = 'Lire la réponse à voix haute';
    speakBtn.onclick = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    };
    msgDiv.appendChild(speakBtn);
  }

  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}

// Clé API OpenAI (NE PAS EXPOSER EN PRODUCTION !)
const OPENAI_API_KEY = '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';

// Fonction pour appeler l'API OpenAI
async function getChatGPTResponse(message) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini', // ou gpt-4, gpt-3.5-turbo selon ce que tu veux
      messages: [{ role: 'user', content: message }]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content.trim();
}

inputForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = userInput.value.trim();
  if (!message) return;
  addMessage('Vous', message);
userInput.value = '';
  addMessage('Bot', '...', true);

  try {
    const botResponse = await getChatGPTResponse(message);
    // Remplace le dernier message '...' par la vraie réponse
    const botMessages = chat.querySelectorAll('.bot');
    botMessages[botMessages.length - 1].nextSibling.textContent = botResponse;
  } catch (err) {
    // En cas d'erreur, affiche un message
    const botMessages = chat.querySelectorAll('.bot');
    botMessages[botMessages.length - 1].nextSibling.textContent = 'Erreur lors de la requête.?';
  }
});
</script>

</body>
</html>
    
