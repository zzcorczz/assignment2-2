/*
File name:
  AddAnActivity.js
Purpose:
  This file contains the Add Activity Screen.
  This is where we add activities.
*/


import { View, Text, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Styles } from '../Components/Styles';
import TextBox from '../Components/TextBox';
import DatePicker from '../Components/DatePicker';
import { useUpdateHook, useContextHook } from '../Components/ActivitiesList';
import { writeToDB } from '../firebase-files/firebaseHelper';
import { database } from '../firebase-files/firebaseSetup';
import { addDoc, collection } from 'firebase/firestore';
import PressableComponent from '../Components/PressableComponent';



export default function AddAnActivity( { navigation, route } ) {

  //updateArray = useUpdateHook(); 

  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState('')
  const [value, setValue] = useState();
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
  const [text, setText] = useState('');

  function selectHandler(data) {
    setValue(data.value)
    setOpen(false)
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    
    
    if (isNaN(parseInt(duration)) === false && parseInt(duration) > 0 && text !== '' && value !== undefined) {

      data = {
        date: text,
        time: parseInt(duration),
        activity: value,
        importance: true,
      }

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

      writeToDB(data);

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
        <PressableComponent onPressFunction={cancelHandler} customStyle={Styles.cancelButtonStyle}>
          <Text style={Styles.cancelTextStyle}>Cancel</Text>
        </PressableComponent>
        <PressableComponent onPressFunction={confirmHandler} customStyle={Styles.confirmButtonStyle}>
          <Text style={Styles.cancelTextStyle}>Save</Text>
        </PressableComponent>
      </View>
    </View>
  )
}