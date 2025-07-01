<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BZ BK - Votre Assistant Intelligent</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Animation pour le chargement */
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        .animate-pulse { animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        /* Animation d'entrée des messages */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .message-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        
        /* Style personnalisé pour la scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        
        /* Effet de profondeur */
        .depth-effect {
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 
                        0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
    </style>
</head>
<body class="bg-gray-100 h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-2xl h-[80vh] flex flex-col depth-effect rounded-2xl overflow-hidden bg-white">
        <!-- En-tête du chat -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between text-white">
            <div class="flex items-center space-x-3">
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <i class="fas fa-robot text-blue-600 text-xl"></i>
                </div>
                <div>
                    <h1 class="font-bold text-lg">BZ BK</h1>
                    <p class="text-xs opacity-80">Assistant intelligent</p>
                </div>
            </div>
            <div class="flex space-x-2">
                <button class="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition">
                    <i class="fas fa-cog"></i>
                </button>
                <button class="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        </div>
        
        <!-- Zone de conversation -->
        <div id="chat-container" class="flex-1 p-4 overflow-y-auto custom-scrollbar bg-gray-50">
            <div class="message-fade-in flex mb-4">
                <div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-3">
                    <i class="fas fa-robot text-blue-600"></i>
                </div>
                <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                    <p class="text-gray-800">Salut ! Je suis BZ BK, votre assistant intelligent. Comment puis-je vous aider aujourd'hui ?</p>
                    <p class="text-xs text-gray-500 mt-1">Aujourd'hui, 10:42</p>
                </div>
            </div>
            
            <!-- Les messages seront ajoutés ici dynamiquement -->
        </div>
        
        <!-- Zone de saisie -->
        <div class="border-t border-gray-200 p-3 bg-white">
            <div class="flex items-center space-x-2">
                <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition">
                    <i class="fas fa-plus"></i>
                </button>
                <div class="flex-1 relative">
                    <input 
                        id="user-input" 
                        type="text" 
                        placeholder="Écrivez votre message..." 
                        class="w-full p-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                    <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
                        <i class="far fa-smile"></i>
                    </button>
                </div>
                <button id="send-btn" class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
            <p class="text-xs text-gray-400 mt-2 text-center">BZ BK peut faire des erreurs. Vérifiez les informations importantes.</p>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const chatContainer = document.getElementById('chat-container');
            const userInput = document.getElementById('user-input');
            const sendBtn = document.getElementById('send-btn');
            
            // Réponses possibles de BZ BK
            const bzResponses = [
                "Je comprends ce que vous dites. Pouvez-vous développer un peu plus ?",
                "C'est une question intéressante. Voici ce que je peux vous dire à ce sujet...",
                "Je suis désolé, je n'ai pas bien compris. Pourriez-vous reformuler votre question ?",
                "D'après mes informations, la réponse à votre question est la suivante...",
                "Je suis en train de rechercher cela pour vous. Un instant s'il vous plaît...",
                "Voici quelques suggestions qui pourraient vous aider...",
                "Je ne suis pas sûr de pouvoir répondre à cette question. Voulez-vous que je recherche des informations ?",
                "Merci pour votre question ! Voici ce que je peux vous dire..."
            ];
            
            // Fonction pour ajouter un message utilisateur
            function addUserMessage(message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message-fade-in flex mb-4 justify-end';
                messageDiv.innerHTML = `
                    <div class="bg-blue-600 text-white p-3 rounded-lg rounded-tr-none shadow-sm max-w-[80%]">
                        <p>${message}</p>
                        <p class="text-xs text-blue-100 mt-1">Maintenant</p>
                    </div>
                    <div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center ml-3">
                        <i class="fas fa-user text-blue-600"></i>
                    </div>
                `;
                chatContainer.appendChild(messageDiv);
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }
            
            // Fonction pour ajouter une réponse de BZ BK
            function addBotResponse() {
                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'flex mb-4';
                typingIndicator.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-3">
                        <i class="fas fa-robot text-blue-600"></i>
                    </div>
                    <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                        <div class="flex space-x-2">
                            <div class="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                            <div class="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-100"></div>
                            <div class="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-200"></div>
                        </div>
                    </div>
                `;
                chatContainer.appendChild(typingIndicator);
                chatContainer.scrollTop = chatContainer.scrollHeight;
                
                // Simuler un délai de réponse
                setTimeout(() => {
                    chatContainer.removeChild(typingIndicator);
                    
                    const randomResponse = bzResponses[Math.floor(Math.random() * bzResponses.length)];
                    const responseDiv = document.createElement('div');
                    responseDiv.className = 'message-fade-in flex mb-4';
                    responseDiv.innerHTML = `
                        <div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-3">
                            <i class="fas fa-robot text-blue-600"></i>
                        </div>
                        <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                            <p class="text-gray-800">${randomResponse}</p>
                            <p class="text-xs text-gray-500 mt-1">Maintenant</p>
                        </div>
                    `;
                    chatContainer.appendChild(responseDiv);
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                }, 1500 + Math.random() * 2000);
            }
            
            // Envoyer un message avec le bouton
            sendBtn.addEventListener('click', function() {
                const message = userInput.value.trim();
                if (message) {
                    addUserMessage(message);
                    userInput.value = '';
                    addBotResponse();
                }
            });
            
            // Envoyer un message avec Entrée
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const message = userInput.value.trim();
                    if (message) {
                        addUserMessage(message);
                        userInput.value = '';
                        addBotResponse();
                    }
                }
            });
            
            // Message de bienvenue aléatoire
            const welcomeMessages = [
                "Prêt à répondre à vos questions !",
                "Comment puis-je vous aider aujourd'hui ?",
                "Je suis à votre disposition pour toute question.",
                "Envoyez-moi un message et je ferai de mon mieux pour vous aider."
            ];
            
            // Changer le message de bienvenue toutes les 5 secondes (juste pour la démo)
            setInterval(() => {
                const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
                document.querySelector('#chat-container > div:first-child .text-gray-800').textContent = randomWelcome;
            }, 5000);
        });
    </script>
</body>
</html>
