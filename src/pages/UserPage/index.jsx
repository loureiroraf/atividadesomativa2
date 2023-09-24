import React, { useState, Component } from 'react';
import firebase from '../../Firebase';

class UserPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:"",
            sobrenome:""
        }
    }

    async componentDidMount(){
        await firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                var uid = user.uid;
                await firebase.firestore().collection("usuario").doc(uid).get()
                    .then((response) => {
                        this.setState({
                            nome:response.data().nome,
                            sobrenome: response.data().sobrenome
                        })
                });
            }
        });
    }

    render(){
        return(
            <div>
                Nome:{this.state.nome} <br/>
                Sobrenome: {this.state.sobrenome}
            </div>
        )
    }
}

export default UserPage;