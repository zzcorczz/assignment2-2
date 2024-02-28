  /* 
    File - TextBox.js
    Purpose - allows us to wrap the Text element
    in a layer of additional view.
    Helps with beautification and design.
  */

import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Styles } from './Styles'

export default function TextBox( props ) {

  return (
    <View>
      <Text style={Styles.startFont}>{props.intro}</Text>
      <View>
        <TextInput
          onChangeText={props.onChangeText}
          value={props.text}
          style={Styles.textBox}
        />
      </View>
      {props.status && <Text>{props.alert}</Text>}
    </View>
  )
}