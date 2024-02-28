  /*
    File name:
      Activity.js
    Purpose:  
      This is where the fomatted component that
      displays the activity, date, duration is defined.
  */

import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Styles } from './Styles'
import { FontAwesome } from '@expo/vector-icons';
import PressableComponent from './PressableComponent';

export default function Activity( props ) {

  function judgeSpecial() {
    if ((props.activity === 'Running' || props.activity === 'Weights') && parseInt(props.duration) >= 60 && props.importance === true)
    {
      return true;
    }
    else {
      return false;
    }
  }

  
  function helper() {
    //console.log(props.activity);
    props.navigationHelper(props.activity, props.duration, props.date, props.importance, props.id);
  };

  let component;

  if (judgeSpecial() === true) {
    
    component = (

      <PressableComponent onPressFunction={helper}>
        <View style={Styles.activityView}>
            <Text style={Styles.activityText}> {props.activity} </Text>
            <FontAwesome name="exclamation-triangle" size={20} color="orange" style={Styles.image}/>
            <View style={Styles.dateView}>
              <Text style = {Styles.durationAndDateText}>{props.date}</Text>
            </View>
            <View style={Styles.durationView}>
              <Text style = {Styles.durationAndDateText}>{props.duration + 'mins'}</Text>
            </View>
        </View>
      </PressableComponent>
    )
  }

  else if (judgeSpecial() === false) {
    
    component =  (
      <PressableComponent onPressFunction={helper}>
        <View style={Styles.activityView}>
          <Text style={Styles.activityText}> {props.activity} </Text>
          <View style={Styles.dateView2}>
            <Text style = {Styles.durationAndDateText}>{props.date}</Text>
          </View>
          <View style={Styles.durationView}>
            <Text style = {Styles.durationAndDateText}>{props.duration + ' mins'}</Text>
          </View>
        </View>
      </PressableComponent>
    )

  }
  
  return component;
}