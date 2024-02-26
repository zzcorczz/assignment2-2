/*
File name:
  AllActivities.js
Purpose:
  This file contains All Activities screen.
*/

import { View, Text, Button, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { Styles } from '../Components/Styles';
import Activity from '../Components/Activity';
import { useContextHook } from '../Components/ActivitiesList';
import { FontAwesome } from '@expo/vector-icons';

export default function AllActivities( {navigation} ) {

  function addHandler() {
    navigation.navigate('Add')
  }

  useEffect(() => navigation.setOptions(
    {
      headerRight: () => (
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
      
    },

    ) 
  )

  function saperator() {
    return (
      <View style={Styles.saperator}>

      </View>
    )
  }

  array = useContextHook();


  return (
    <View style={Styles.container}>
      <View style={Styles.flatListView}>
        <FlatList
          data={array}
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