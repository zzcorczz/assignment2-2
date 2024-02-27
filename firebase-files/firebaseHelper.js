import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { database } from './firebaseSetup';

export async function writeToDB(data) {
  try {
    //console.log(typeof data);
    //console.log('triggered');
    //console.log(database);
    const docRef = await addDoc(collection(database, "activities"), data);
    //console.log(docRef);
  } catch (err) {
    console.log('There is an error: ', err);
  }
}

export async function getData(id) {

  const docRef = doc(database, 'activities', id);

  try {
    const document = await getDoc(docRef);
  } catch (err) {
    console.log(err);
  }
}
