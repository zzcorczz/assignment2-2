import {collection, addDoc} from 'firebase/firestore';
import { database } from './firebaseSetup';

export async function writeToDB(data) {
  try {
    addDoc(collection(database, 'activities'), data);
  } catch (err) {
    console.log(err);
  }
}

