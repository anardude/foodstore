import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBVFoWQOAXA2Jau5Gr3g2DHrcCIrfMZINc",
    authDomain: "foodstore-demo.firebaseapp.com",
    databaseURL: "https://foodstore-demo.firebaseio.com",
    projectId: "foodstore-demo",
    storageBucket: "foodstore-demo.appspot.com",
    messagingSenderId: "30018624112",
    appId: "1:30018624112:web:7e9cc61f4bca1b3f1e72b5",
    measurementId: "G-J42Y9GZLBT"
  };

  export const createUserProfileDocument = async (userAuth, AdditionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...AdditionalData
          });
        } catch (e){
          console.log('Error creating user', e.message);
        }
      }

      return userRef;
  }

  // Initialize Firebase
  firebase.initializeApp(config);
  //firebase.analytics();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;