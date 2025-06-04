<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Formulaire Inscription</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background: #f8f9fa;
    padding: 20px;
  }
  .container {
    max-width: 400px;
    margin: auto;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 0.1);
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  label {
    font-weight: 600;
    display: block;
    margin-top: 15px;
  }
  input[type="text"], input[type="password"], input[type="tel"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .otp-group {
    display: flex;
    margin-top: 5px;
  }
  .otp-group input {
    flex: 1;
    border-radius: 4px 0 0 4px;
    border-right: none;
  }
  .otp-group button {
    padding: 10px 15px;
    border: 1px solid #007bff;
    background-color: #007bff;
    color: white;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
  .otp-group button:hover {
    background-color: #0056b3;
  }
  button.submit-btn {
margin-top: 30px;
    width: 100%;
    background-color: #3b74e6;
    color: white;
    padding: 15px;
    font-size: 1rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
  button.submit-btn:hover {
    background-color: #2a55c1;
  }
</style>
</head>
<body>

<div class="container">
  <h2>Bienvenue à nous rejoindre</h2>
  <form>
    <label for="phone">Numéro de Téléphone</label>
    <input type="tel" id="phone" name="phone" placeholder="Entrez votre numéro" required />

    <label for="password">Mot de Passe de Connexion</label>
    <input type="password" id="password" name="password" placeholder="Mot de Passe de Connexion" required />

    <label for="pseudo">Pseudo</label>
    <input type="text" id="pseudo" name="pseudo" placeholder="Entrez votre pseudo" required />

    <label for="invite">Code d'Invitation</label>
    <input type="text" id="invite" name="invite" placeholder="Veuillez entrer le code d'invitation" />

    <label for="otp">Code de Vérification (OTP)</label>
    <div class="otp-group">
      <input type="text" id="otp" name="otp" placeholder="Code de Vérification" />
      <button type="button" onclick="envoyerOTP()">Envoyer</button>
    </div>

    <button type="submit" class="submit-btn">S'inscrire Maintenant</button>
  </form>
</div>
<script>
  function envoyerOTP() {
    alert('Code de vérification envoyé!');
    // Ici tu peux ajouter ta logique d'envoi OTP
  }
</script>

</body>
</html>
