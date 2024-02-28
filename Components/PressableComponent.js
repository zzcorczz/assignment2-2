import { View, Text, Pressable } from 'react-native'
import React, { Children } from 'react'

export default function PressableComponent( {
  children, 
  onPressFunction,
})
{
  return (
    <View>
      <Pressable onPress={onPressFunction}>
        {children}
      </Pressable>
    </View>
  )
}