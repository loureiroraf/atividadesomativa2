import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyB7-Wtfe8m5MqyGk7DG6WFjUC7EWydZe8M',
	authDomain: 'projetoead-1b978.firebaseapp.com',
	projectId: 'projetoead-1b978',
	storageBucket: 'projetoead-1b978.appspot.com',
	messagingSenderId: '912301541743',
	appId: '1:912301541743:web:58cf0be09948c3cdfc009a',
	measurementId: 'G-R8KPFGKN34',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
