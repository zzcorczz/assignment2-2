/*
File name:
  Edit.js
Purpose:
  This file is the edit screen of the application.
  When the user clicks on the activities, they will be 
  navigated to this screen. They will be able to edit
  this activity.
*/


import { View, Text, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Styles } from '../Components/Styles';
import TextBox from '../Components/TextBox';
import DatePicker from '../Components/DatePicker';
import { useUpdateHook, useContextHook } from '../Components/ActivitiesList';
import { getData, writeToDB } from '../firebase-files/firebaseHelper';
import { database } from '../firebase-files/firebaseSetup';
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';



export default function Edit( { navigation, route } ) {

  //updateArray = useUpdateHook();  

  const data = route.params;
  console.log(data);
  //console.log(data.id);
  const id = data.id;

  /*
  useEffect(() => {
    async function getData() {
      const docRef = doc(database, 'activities', id);
      try {
        const document = await getDoc(docRef);
        setDoc(document.data())
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  

  console.log(document.activity);
  */
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(data.duration.toString());
  console.log(data.activity);
  const [value, setValue] = useState(data.activity);
  const [items, setItems] = useState(
    [
      {label: 'Walking', value: 'Walking'},
      {label: 'Running', value: 'Running'},
      {label: 'Swimming', value: 'Swimming'},
      {label: 'Weights', value: 'Weights'},
      {label: 'Yoga', value: 'Yoga'},
      {label: 'Cycling', value: 'Cycling'},
      {label: 'Hiking', value: 'Hiking'},
    ]
  );
  const [text, setText] = useState(data.date);
  const [importance, setImportance] = useState(data.importance);

  function selectHandler(data) {
    setValue(data.value)
    setOpen(false)
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function update() {
    const docRef = doc(database, 'activities', data.id);
    await updateDoc(docRef, {
      activity: value,
      importance: importance,
      date: text,
      time: parseInt(duration),
    });
  };

  function confirmHandler() {
    
    
    if (isNaN(parseInt(duration)) === false && parseInt(duration) > 0 && text !== '' && value !== undefined) {

      const data = {
        date: text,
        time: parseInt(duration),
        activity: value,
        importance: importance,
      };

      update();

      /*

      async (e) => {
        await updateDoc(doc(database, 'activities', data.id), {
          activity: value,
          importance: importance,
          date: text,
          time: parseInt(duration),
        });
      }
      */



      

      /*
      updateArray(
        {
          date: text,
          time: parseInt(duration),
          activity: value
        } 
      )
      */
      navigation.goBack();
    }
    
    else {
      alert(
        'Wrong Input!'
      )
    }
  }

  return (

    <View style={Styles.containerAdd}>
      
      <DropDownPicker
        defaultValue={value}
        open={open}
        value={value}
        items={items}
        setValue={setValue}
        setItems={setItems}
        onPress={setOpen}
        onSelectItem={selectHandler}
        containerStyle={
          {
            width: 300,
          }
        }
      />
      <TextBox
        intro={'Duration (min) *'}
        onChangeText={setDuration}
        text={duration}
      />
      <DatePicker
        text={text}
        setText={setText}
      />
      <View style={Styles.cancelSaveView}>
        <Text
          style={Styles.cancelTextStyle}
          onPress={cancelHandler}
        >Cancel</Text>
        <Text
          onPress={confirmHandler}
          style={Styles.confirmStyle}
        >Save</Text>
      </View>
    </View>
  )
}