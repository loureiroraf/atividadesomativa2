import React, { useState } from 'react';
import firebase from '../../Firebase';


const LoginPage = () => {
    const [errorMessages, setErrorMessages] = useState({});
	const [sucessMessages, setSuccessMessages] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email,senha)
            .then(()=> {
                window.location.href = './user'
            })
            .catch((error) => {
                console.log(error);
            });

		// const userInput = credenciais.find(
		// 	(user) => user.usuario === usr.value
		// );

		// if (userInput) {
		// 	if (userInput.senha !== pwd.value) {
		// 		setIsSubmitted(false);
		// 		setErrorMessages({ message: erro });
		// 	} else {
		// 		setIsSubmitted(true);
		// 		setSuccessMessages({ message: sucesso });
		// 	}
		// } else {
		// 	setIsSubmitted(false);
		// 	setErrorMessages({ message: erro });
		// }
	};

	const mostrarErro = () => (
		<div className='mensagem'>{errorMessages.message}</div>
	);

	const mostrarSucesso = () => (
		<div className='mensagem'>{sucessMessages.message}</div>
	);

	const renderForm = (
		<div className='form'>
			<form onSubmit={handleSubmit}>
            <div className='input-container'>
					<input type='text' name='email' placeholder='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div className='input-container'>
					<input type='password' name='senha' placeholder='senha' id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} required />
					{isSubmitted ? mostrarSucesso() : mostrarErro()}
				</div>
				<div className='button-container'>
					<input value='Acessar' type='submit' />
				</div>
			</form>
		</div>
	);

	return (
		<div className='app'>
			<div className='login-form'>
				<div className='title'>Login</div>
				{renderForm}
			</div>
		</div>
	);
}

export default LoginPage; 