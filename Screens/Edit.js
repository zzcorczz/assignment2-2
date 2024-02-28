/*
File name:
  Edit.js
Purpose:
  This file is the edit screen of the application.
  When the user clicks on the activities, they will be 
  navigated to this screen. They will be able to edit
  this activity.
*/



import { View, Text, Button, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { Styles } from '../Components/Styles';
import TextBox from '../Components/TextBox';
import DatePicker from '../Components/DatePicker';
import { useUpdateHook, useContextHook } from '../Components/ActivitiesList';
import { deleteData, getData, writeToDB } from '../firebase-files/firebaseHelper';
import { database } from '../firebase-files/firebaseSetup';
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import Checkbox from 'expo-checkbox';
import PressableComponent from '../Components/PressableComponent';
import { FontAwesome } from '@expo/vector-icons';




export default function Edit( { navigation, route } ) {


  function deleteHanlder() {
    Alert.alert(
      'Delete',
      'Are you sure you wish to delete this item?',
      [
        {
          text: 'No',
          onPress: ()=> {}
        },
        {
          text: 'Yes',
          onPress: () => {
            deleteData(data.id);
            navigation.goBack();
          }
        }
      ]
    )
  }
  //updateArray = useUpdateHook();  
  useEffect(() => navigation.setOptions(
    {
      headerRight: () => (
        <PressableComponent onPressFunction={deleteHanlder}>
          <View>
            <FontAwesome name="trash" size={24} color="white" />
          </View>
        </PressableComponent>
      ),
    },
    ) 
  );

  
  function judgeSpecial(activity, duration, importance) {

    if ((activity === 'Running' || activity === 'Weights') && parseInt(duration) >= 60 && importance === true)
    {
      return true;
    }
    else {
      return false;
    }
  }

  const data = route.params;
  const id = data.id;
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(data.duration.toString());
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
  const [status, setStatus] = useState(false);

  useEffect(() => {
    function determineStatus(){
      let status = false;
      if (judgeSpecial(value, duration, importance) === true) {
        status = true;
        setStatus(status);
      } else {
        setImportance(true);
        status = false;
        setStatus(status);
      }
    }
    determineStatus();
  }
    
  ,[]);

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
    
    
    const data = {
      date: text,
      time: parseInt(duration),
      activity: value,
      importance: importance,
    };

    if (isNaN(parseInt(duration)) === false && parseInt(duration) > 0 && text !== '' && value !== undefined) {

      Alert.alert(
        'Important',
        'Are you sure you wish to save these changes?',
        [
          {
            text: 'No',
            onPress: ()=> {}
          },
          {
            text: 'Yes',
            onPress: () => {
              update();
              navigation.goBack();
            }
          }
        ]
      )
    }
    
    else {
      alert(
        'Wrong Input!'
      )
    }
  }
  
  let component;

  if (status === true) {
    
    component = (
      
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
          <View style={Styles.checkBoxView}>
            <Text style={Styles.SpecialActivityTextStyle}>
              This item is marked as special. 
              Select the checkbox if you would like to approve it.
            </Text> 
            <Checkbox
              value={importance}
              onValueChange={setImportance}
            />
          </View>
          <View style={Styles.cancelSaveWithCheckBoxView}>
            <PressableComponent onPressFunction={cancelHandler} customStyle={Styles.cancelButtonStyle}>
                  <Text style={Styles.cancelTextStyle}>Cancel</Text>
              </PressableComponent>
              <PressableComponent onPressFunction={confirmHandler} customStyle={Styles.confirmButtonStyle}>
                  <Text style={Styles.cancelTextStyle}>Save</Text>
              </PressableComponent>
          </View>
        </View>
      
    );
  } else {


    component = (
      
      (
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
            <PressableComponent onPressFunction={cancelHandler} customStyle={Styles.cancelButtonStyle}>
                <Text style={Styles.cancelTextStyle}>Cancel</Text>
            </PressableComponent>
            <PressableComponent onPressFunction={confirmHandler} customStyle={Styles.confirmButtonStyle}>
                <Text style={Styles.cancelTextStyle}>Save</Text>
            </PressableComponent>
          </View>
        </View>
      )
    )
  }

  return component;

  
}