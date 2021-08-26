import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBpfhvZ8SjI2mihshj0X3nxgDijiceqysM',
  authDomain: 'barberos-site.firebaseapp.com',
  projectId: 'barberos-site',
  storageBucket: 'barberos-site.appspot.com',
  messagingSenderId: '906949757230',
  appId: '1:906949757230:web:58c5730d4ada54237252bf',
  measurementId: 'G-65HHGW9HKE',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const analytics = firebase.analytics;

export { firebase, analytics };
