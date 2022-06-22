const signUpErrors = (err) => {
  let errors = { pseudo: '', email: '', password: '' };

  if (err.message.includes('pseudo')) errors.pseudo = 'Pseudo de 3 caractères min.';

  if (err.message.includes('email')) errors.email = 'Format email incorrect';

  if (err.message.includes('password')) errors.password = 'Mot de passe de 6 caractères min.';

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
    errors.email = 'Cet email est déjà enregistré, veuillez en saisir un autre.';

  return errors;
};

const signInErrors = (err) => {
  let errors = { email: '', password: '' };

  if (err.message.includes('email')) errors.email = 'Adresse email inconnue';

  if (err.message.includes('password')) errors.password = 'Mot de passe incorrect';

  return errors;
};

module.exports = { signUpErrors, signInErrors };
