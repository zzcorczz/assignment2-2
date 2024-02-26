/*
File name:
  Start.js
Purpose:
  The start screen of the app.
  It will check the user's input and make sure that it is valid.
*/


import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import TextBox from '../Components/TextBox';
import { Styles } from '../Components/Styles';

export default function Start( {navigation} ) {

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [phoneAlert, setPhoneAlert] = useState(false);
  const [confirm, setConfirm] = useState(false);


  function nameHanlder(text) {
    setEmail(text);
  }
  function phoneHanlder(text) {
    setPhone(text);
  }

  function resetHandler() {
    setEmail('');
    setPhone('');
    setEmailAlert(false);
    setPhoneAlert(false);
  }

  function emailTest(text) {
    const emailTester = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailTester.test(text) === true) {
      return true;
    }
    else {
      return false;
    }
  }

  function phoneTest(phone) {
    const phoneTester = /^\d{10}$/;
    if (phoneTester.test(phone)) {
      return true;
    }
    else {
      return false;
    }
  }

  const phoneNumber = 0;

  function phoneChecker(phone) {
    if(isNaN(parseInt(phone)) === true) {
      return false;
    }
    if (isNaN(parseInt(phone)) === false && phoneTest(phone) === true) {
      return true;
      phoneNumber = parseInt(phone);
    }
    else {
      return false;
    }

  }

  function buttonHanlder() {
    if (emailTest(email) === true) {
      setEmailAlert(false);
    }
    if (emailTest(email) === false) {
      setEmailAlert(true);
    }
    if (phoneChecker(phone) === true) {
      setPhoneAlert(false);
    }
    if (phoneChecker(phone) === false) {
      setPhoneAlert(true);
    }
    setConfirm(false);
    if (phoneTest(phone) === true && emailTest(email) === true) {
      setConfirm(true);
      setPhoneAlert(false);
      setEmailAlert(false);
      navigation.navigate('Tab')
    }
  };



  return (
    <SafeAreaView style={Styles.container}>
      <TextBox
        onChangeText={nameHanlder}
        text={email}
        intro={'Email Address'}
        status={emailAlert}
        alert={'Please Enter a Valid Email'}
      />
      <TextBox
        onChangeText={phoneHanlder}
        text={phone}
        intro='Phone Number'
        status={phoneAlert}
        alert={'Please Enter a Valid Phone Number'}
      />
      <View style={Styles.resetConfirm}>
        <Text
          style={Styles.resetStyle}
          onPress={resetHandler}
        >Reset</Text>
        <Text
          style={Styles.confirmStyle}
          onPress = {buttonHanlder}
        >Confirm</Text>
      </View>
    </SafeAreaView>
  )
}