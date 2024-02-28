/*
File name:
  firebaseHelper.js
Purpose:
  This file conatins helper functions that help
  write, get and delete data from the database.
*/


import { addDoc, collection, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { database } from './firebaseSetup';

export async function writeToDB(data) {
  try {

    const docRef = await addDoc(collection(database, "activities"), data);

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

export async function deleteData(id) {
  try {
    await deleteDoc(doc(database, 'activities', id))
  } catch (err) {
    console.log(err);
  }
}
