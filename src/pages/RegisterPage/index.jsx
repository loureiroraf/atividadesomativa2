import React, { useState } from 'react';
import firebase from '../../Firebase';

const RegisterPage = () => {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [datanascimento, setDatanascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
	const [sucessMessages, setSuccessMessages] = useState({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const erro = 'Usuário ou senha incorretos!';
	const sucesso = 'Acessado com sucesso!';
    
	const handleSave = (event) => {
		event.preventDefault();
        console.log("submit", {nome, sobrenome, datanascimento, email, senha});
        firebase.auth().createUserWithEmailAndPassword(email, senha).then((result) =>{
            firebase.firestore().collection("usuario").doc(result.user.uid).set({
                nome : nome,
                sobrenome : sobrenome,
                datanascimento : datanascimento,
            }).then(() => {
                window.location.href = './login';
            });
        });


	};  

	const mostrarErro = () => (
		<div className='mensagem'>{errorMessages.message}</div>
	);

	const mostrarSucesso = () => (
		<div className='mensagem'>{sucessMessages.message}</div>
	);

	const renderForm = (
		<div className='form'>
			<form onSubmit={handleSave}>
				<div className='input-container'>
					<input type='text' name='nome' placeholder='nome' id='nome' value={nome} onChange={(e) => setNome(e.target.value)} required />
				</div>
				<div className='input-container'>
					<input type='text' name='sobrenome' placeholder='sobrenome' id='sobrenome' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
				</div>
				<div className='input-container'>
					<input type='date' name='datanascimento' placeholder='data de nascimento' id='datanascimento' value={datanascimento} onChange={(e) => setDatanascimento(e.target.value)} required />
				</div>
				<div className='input-container'>
					<input type='text' name='email' placeholder='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div className='input-container'>
					<input type='password' name='senha' placeholder='senha' id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} required />
					{isSubmitted ? mostrarSucesso() : mostrarErro()}
				</div>
				<div className='button-container'>
					<input value='Cadastrar' type='submit' />
				</div>
			</form>
		</div>
	);

	return (
		<div className='app'>
			<div className='login-form'>
				<div className='title'>Cadastrar</div>
				{renderForm}
			</div>
		</div>
	);
}

export default RegisterPage; 