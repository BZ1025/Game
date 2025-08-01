<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services Informatiques - Paiement</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .gradient-bg {
            background: linear-gradient(135deg, #6e8efb, #a777e3);
        }
        .payment-card {
            box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }
        .payment-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.25);
        }
        .wave-shape {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
        }
        .wave-shape svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 150px;
        }
        .wave-shape .shape-fill {
            fill: #FFFFFF;
        }
        .pulse {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(110, 142, 251, 0.7);
            }
            70% {
                transform: scale(1.05);
                box-shadow: 0 0 0 10px rgba(110, 142, 251, 0);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(110, 142, 251, 0);
            }
        }
    </style>
</head>
<body class="font-sans bg-gray-50">
    <!-- Header -->
    <header class="gradient-bg text-white py-12 relative overflow-hidden">
        <div class="container mx-auto px-4 text-center relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Services Informatiques Professionnels</h1>
            <p class="text-xl md:text-2xl mb-8">Paiement sécurisé pour commencer votre projet</p>
            <div class="pulse inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                <i class="fas fa-lock mr-2"></i> Paiement 100% Sécurisé
            </div>
        </div>
        <div class="wave-shape">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12">
        <div class="max-w-4xl mx-auto">
            <!-- Payment Options -->
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <!-- Mobile Money Payment -->
                <div class="payment-card bg-white rounded-xl p-8">
                    <div class="text-center mb-6">
                        <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-mobile-alt text-indigo-600 text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">Paiement par Mobile Money</h3>
                        <p class="text-gray-600">Transfert instantané et sécurisé</p>
                    </div>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <i class="fas fa-check-circle text-green-500"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-700">1. Ouvrez votre application Mobile Money</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <i class="fas fa-check-circle text-green-500"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-700">2. Sélectionnez "Envoyer de l'argent"</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <i class="fas fa-check-circle text-green-500"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-700">3. Entrez le numéro suivant :</p>
                            </div>
                        </div>
                        
                        <div class="bg-indigo-50 p-4 rounded-lg text-center">
                            <p class="text-sm text-gray-600 mb-1">Numéro de paiement</p>
                            <p class="text-2xl font-bold text-indigo-700">+243 841 674 247</p>
                            <button onclick="copyNumber()" class="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center justify-center mx-auto">
                                <i class="far fa-copy mr-1"></i> Copier le numéro
                            </button>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <i class="fas fa-check-circle text-green-500"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-700">4. Entrez le montant et confirmez</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <div class="flex-shrink-0 mt-1">
                                <i class="fas fa-check-circle text-green-500"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-700">5. Envoyez-nous la confirmation par WhatsApp</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <a href="https://wa.me/243841674247?text=J'ai%20effectué%20le%20paiement%20pour%20les%20services%20informatiques" 
                           class="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                           <i class="fab fa-whatsapp mr-2"></i> Envoyer la confirmation
                        </a>
                    </div>
                </div>
                
                <!-- Bank Transfer -->
                <div class="payment-card bg-white rounded-xl p-8">
                    <div class="text-center mb-6">
                        <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-university text-blue-600 text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">Virement Bancaire</h3>
                        <p class="text-gray-600">Option alternative pour les paiements</p>
                    </div>
                    
                    <div class="space-y-6">
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Nom du titulaire</p>
                            <p class="text-lg font-medium text-blue-800">[VOTRE NOM]</p>
                        </div>
                        
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Nom de la banque</p>
                            <p class="text-lg font-medium text-blue-800">[NOM DE VOTRE BANQUE]</p>
                        </div>
                        
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Numéro de compte</p>
                            <p class="text-lg font-medium text-blue-800">[VOTRE NUMÉRO DE COMPTE]</p>
                        </div>
                        
                        <div class="bg-blue-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-600 mb-1">Code SWIFT/BIC</p>
                            <p class="text-lg font-medium text-blue-800">[CODE SWIFT]</p>
                        </div>
                    </div>
                    
                    <div class="mt-8 text-center">
                        <button class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            <i class="fas fa-download mr-2"></i> Télécharger les détails
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Services Info -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden mb-12">
                <div class="md:flex">
                    <div class="md:flex-shrink-0 md:w-1/3 bg-indigo-100 flex items-center justify-center p-8">
                        <i class="fas fa-laptop-code text-indigo-600 text-6xl"></i>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-600 font-semibold mb-1">Nos Services</div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Que proposez-vous?</h2>
                        <p class="text-gray-600 mb-6">
                            Nous offrons des services informatiques professionnels adaptés à vos besoins. 
                            Après réception de votre paiement, nous commencerons immédiatement à travailler 
                            sur votre projet avec le plus grand professionnalisme.
                        </p>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0 text-indigo-600 mt-1">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700 font-medium">Développement Web</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 text-indigo-600 mt-1">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700 font-medium">Applications Mobiles</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 text-indigo-600 mt-1">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700 font-medium">Maintenance Informatique</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="flex-shrink-0 text-indigo-600 mt-1">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-700 font-medium">Formation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Testimonials -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-2">Ils nous ont fait confiance</h2>
                <p class="text-gray-600 max-w-2xl mx-auto mb-8">Nos clients satisfaits témoignent de la qualité de nos services</p>
                
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="text-yellow-400 mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="text-gray-700 mb-4">"Service rapide et professionnel. Le paiement était sécurisé et le travail a été livré à temps."</p>
                        <p class="font-medium text-gray-800">- Jean K.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="text-yellow-400 mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p class="text-gray-700 mb-4">"J'ai apprécié la transparence dans le processus de paiement. Le site web créé est exactement ce que je voulais."</p>
                        <p class="font-medium text-gray-800">- Marie L.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <div class="text-yellow-400 mb-3">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <p class="text-gray-700 mb-4">"Solution efficace à un problème complexe. Le paiement mobile money était très pratique."</p>
                        <p class="font-medium text-gray-800">- Paul M.</p>
                    </div>
                </div>
            </div>
            
            <!-- FAQ -->
            <div class="bg-white rounded-xl shadow-md p-8 mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Questions Fréquentes</h2>
                
                <div class="space-y-4">
                    <div class="border-b border-gray-200 pb-4">
                        <button class="flex items-center justify-between w-full text-left font-medium text-gray-700 focus:outline-none">
                            <span>Comment puis-je être sûr que mon paiement est sécurisé?</span>
                            <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                        </button>
                        <div class="mt-2 text-gray-600 hidden">
                            <p>Tous les paiements sont effectués directement via les plateformes officielles de Mobile Money ou virement bancaire sécurisé. Nous ne stockons aucune information de paiement.</p>
                        </div>
                    </div>
                    
                    <div class="border-b border-gray-200 pb-4">
                        <button class="flex items-center justify-between w-full text-left font-medium text-gray-700 focus:outline-none">
                            <span>Que se passe-t-il après mon paiement?</span>
                            <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                        </button>
                        <div class="mt-2 text-gray-600 hidden">
                            <p>Dès réception de votre paiement et confirmation, nous commencerons immédiatement à travailler sur votre projet. Vous recevrez un email de confirmation avec les prochaines étapes.</p>
                        </div>
                    </div>
                    
                    <div class="border-b border-gray-200 pb-4">
                        <button class="flex items-center justify-between w-full text-left font-medium text-gray-700 focus:outline-none">
                            <span>Puis-je obtenir un remboursement?</span>
                            <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                        </button>
                        <div class="mt-2 text-gray-600 hidden">
                            <p>Les remboursements sont évalués au cas par cas avant le début des travaux. Une fois le travail commencé, les remboursements ne sont plus possibles.</p>
                        </div>
                    </div>
                    
                    <div class="border-b border-gray-200 pb-4">
                        <button class="flex items-center justify-between w-full text-left font-medium text-gray-700 focus:outline-none">
                            <span>Combien de temps prend le traitement?</span>
                            <i class="fas fa-chevron-down text-indigo-600 transition-transform duration-200"></i>
                        </button>
                        <div class="mt-2 text-gray-600 hidden">
                            <p>Les paiements Mobile Money sont généralement confirmés en quelques minutes. Les virements bancaires peuvent prendre 1-2 jours ouvrables.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Services Informatiques</h3>
                    <p class="text-gray-400">Solutions technologiques professionnelles pour vos besoins numériques.</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Moyens de Paiement</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Mobile Money</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Virement Bancaire</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Contact</h3>
                    <ul class="space-y-2">
                        <li class="flex items-center text-gray-400"><i class="fas fa-phone-alt mr-2"></i> +243 841 674 247</li>
                        <li class="flex items-center text-gray-400"><i class="fas fa-envelope mr-2"></i> contact@votresite.com</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Suivez-nous</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-400 transition-colors">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-pink-600 transition-colors">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2023 Services Informatiques. Tous droits réservés.</p>
            </div>
        </div>
    </footer>

    <script>
        // Copy payment number to clipboard
        function copyNumber() {
            const number = '+243841674247';
            navigator.clipboard.writeText(number).then(() => {
                alert('Numéro copié dans le presse-papiers: ' + number);
            }).catch(err => {
                console.error('Erreur lors de la copie: ', err);
            });
        }
        
        // FAQ accordion functionality
        document.querySelectorAll('.border-b button').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('i');
                
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
        
        // Animate elements on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.payment-card, .bg-white');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }
        
        // Set initial state for animation
        document.querySelectorAll('.payment-card, .bg-white').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Run animation on load and scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
    </script>
</body>
</html>
