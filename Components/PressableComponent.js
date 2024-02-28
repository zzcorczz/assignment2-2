import { View, Text, Pressable } from 'react-native'
import React, { Children } from 'react'
import { Styles } from './Styles'

export default function PressableComponent( {
  children, 
  onPressFunction,
  customStyle,
})
{
  return (
    <View>
      <Pressable 
      onPress={onPressFunction}
      style={({pressed}) => [
          customStyle,
          pressed && Styles.pressed,
        ]}
      >
        {children}
      </Pressable>
    </View>
  )
}