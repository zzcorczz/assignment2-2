/*
File name:
  AllActivities.js
Purpose:
  This file contains All Activities screen.
*/

import { View, Text, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Styles } from '../Components/Styles';
import Activity from '../Components/Activity';
import { useContextHook } from '../Components/ActivitiesList';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { database } from '../firebase-files/firebaseSetup';
import { collection, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import PressableComponent from '../Components/PressableComponent';

export default function AllActivities( {navigation} ) {


  const [activities, setActivities] = useState([]);

  function addHandler() {
    navigation.navigate('Add');
  }

  function navigationHelper(activity, duration, date, importance, id) {
    //console.log(activity);
    data = {
      activity: activity,
      duration: duration,
      date: date,
      importance: importance,
      id:id,
    };
    navigation.navigate('Edit', data);
  }


  
  useEffect(() => {
    onSnapshot(collection(database, 'activities'), (QuerySnapshot) => {
        let array = new Array();
        QuerySnapshot.forEach((doc) => {
          array.push({...doc.data(), id: doc.id});
        });
        setActivities(array);
      })
  }, []);


  //console.log(database);

  useEffect(() => navigation.setOptions(
    {
      headerRight: () => (
        <PressableComponent onPressFunction={addHandler}>
          <Ionicons name="add" size={24} color="white" />
        </PressableComponent>
      ),
      headerTitleStyle: {
        color: 'white',
      },  
      headerStyle: {
        backgroundColor:'#363776',
      },
      tabBarStyle: {
        backgroundColor: '#363776'
      },
    },

    ) 
  );

  function saperator() {
    return (
      <View style={Styles.saperator}>

      </View>
    )
  }

  

  //array = useContextHook(); The previous method of accessing the global array.

  return (
    <View style={Styles.container}>
      <View style={Styles.flatListView}>
        <FlatList
          data={activities}
          renderItem={
            ({item}) => {
              if (item) {
              return (
                <Activity
                  activity = {item.activity}
                  date = {item.date}
                  duration = {item.time}
                  id = {item.id}
                  importance = {item.importance}
                  navigationHelper = {navigationHelper}
                />
              )}}
          }
          ItemSeparatorComponent={saperator}
        />
      </View>
    </View>
  )


}