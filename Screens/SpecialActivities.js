/*
File name:
  SpecialActivities.js
Purpose:
  This function will display all the special activities.
*/


import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from '../Components/Styles'
import Activity from '../Components/Activity'
import { useContextHook } from '../Components/ActivitiesList'

export default function SpecialActivities({navigation}) {
  
  function addHandler() {
    navigation.navigate('Add')
  }
  
  function judgeSpecial(obj) {
    
    if ((obj.data.activity === 'Running' || obj.data.activity === 'Weights') && obj.data.time >= 60)
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

  array = useContextHook();

  const newArray = array.filter(judgeSpecial);

  return (
    <View style={Styles.container}>
      <View style={Styles.flatListView}>
        <FlatList
          data={newArray}
          renderItem={
            ({item}) => {
              return (
                <Activity
                  activity = {item.data.activity}
                  date = {item.data.date}
                  duration = {item.data.time}
                  id = {item.id}
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