/*
File name:
  SpecialActivities.js
Purpose:
  This function will display all the special activities.
*/


import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Styles } from '../Components/Styles'
import Activity from '../Components/Activity'
import { useContextHook } from '../Components/ActivitiesList'
import { collection, onSnapshot } from 'firebase/firestore'
import { database } from '../firebase-files/firebaseSetup'

export default function SpecialActivities({navigation}) {
  
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    onSnapshot(collection(database, 'activities'), (QuerySnapshot) => {
        let array = [];
        QuerySnapshot.forEach((doc) => {
          array.push({...doc.data(), id: doc.id});
        });
        const newArray = array.filter(judgeSpecial);
        setActivities(newArray);
      })
      
  }, []);

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

  function addHandler() {
    navigation.navigate('Add')
  }
  
  function judgeSpecial(obj) {
    
    if ((obj.activity === 'Running' || obj.activity === 'Weights') && obj.time >= 60 && obj.importance === true)
    {
      return true;
    }
    else {
      return false;
    }
  }
  
  useEffect(() => navigation.setOptions(
    {headerRight: () => (
        <Button
          title='Add'
          onPress={addHandler}
        />
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
     
    }
    )
  )


  
  function saperator() {
    return (
      <View style={Styles.saperator}>

      </View>
    )
  }

  //const newArray = array.filter(judgeSpecial);

  return (
    <View style={Styles.container}>
      <View style={Styles.flatListView}>
        <FlatList
          data={activities}
          renderItem={
            ({item}) => {
              return (
                <Activity
                  activity = {item.activity}
                  date = {item.date}
                  duration = {item.time}
                  id = {item.id}
                  importance = {item.importance}
                  navigationHelper = {navigationHelper}
                />
              )
            }
          }
          ItemSeparatorComponent={saperator}
        />
      </View>
    </View>
  )
}