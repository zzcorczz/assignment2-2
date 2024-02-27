import { addDoc, collection } from 'firebase/firestore';
import { database } from './firebaseSetup';

export async function writeToDB(data) {
  try {
    console.log(typeof data);
    //console.log('triggered');
    //console.log(database);
    const docRef = await addDoc(collection(database, "activities"), data);
    console.log(docRef);
  } catch (err) {
    console.log('There is an error: ', err);
  }
}

