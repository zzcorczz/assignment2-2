  /*
    File name:
      DatePicker.js
    Purpose:  
      Where the datapicker component is designed and implemented.
      It is used in AddAnActivity.js
  */

import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Styles } from './Styles';


export default function DatePicker( props ) {

  const [pressed, setPressed] = useState(false);
  const [date, setDate] = useState(new Date());

  function pressedHanlder() {

    const date = new Date();

    if (pressed === true) {
      setPressed(false);
    }
    if (pressed === false) {
      setPressed(true);
      props.setText(date.toDateString())
    }
  }


  function changeHandler( event, newDate ) {
    setPressed(false);
    setDate(newDate);
    props.setText(newDate.toDateString())
  }

  return (
    <View>
      <Text style={Styles.startFont}>Date *</Text>
      <TextInput
        value={props.text}
        style={Styles.textBox}
        onPressIn={pressedHanlder}
      />
      {pressed && 
      <DateTimePicker 
        value={new Date()} 
        display='inline' 
        style={{width: 300}}
        onChange={changeHandler}
      />
      }
    </View>

    
  )
}