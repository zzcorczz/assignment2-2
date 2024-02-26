  /* 
    File - Styles.js
    Purpose - Helper file that stores all of my
    style attributes.
  */


    import { StyleSheet, Dimensions } from "react-native";
    import { Color } from "./Color";
    
    
    export const Styles = StyleSheet.create({
      image: {
        position: 'absolute', 
        left: 90,
        top: 14,
      },
      container: {
        flex: 1,
        backgroundColor: '#aaa9c7',
        alignItems: 'center',
        justifyContent: 'center',
      },
      date: {
        flex: 1,
      },
      containerAdd: {
        flex: 1,
        backgroundColor: '#aaa9c7',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 50,
      },
      textBox: {
        backgroundColor: '#b2b2d5',
        borderRadius: 5,
        width: 300,
        borderColor: '#3d3d78',
        borderWidth: 1,
      },
      startFont: {
        fontSize: 15,
        color: '#12126a',
        fontWeight:'bold',
        marginTop: 20,
      },
      screenStyles: {
        headerShown: false,
        headerBackVisible: false,
      },
      activities: {
        headerShown: false,
        headerBackVisible: false,
        headerStyle: {
          backgroundColor: "#363776"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff"
        },
      },
      bottomTab: {
        style: {
          backgroundColor: '#363776'
        }
      },
      addScreen: {
        title:'Add An Activity',
        headerStyle: {
          backgroundColor: "#363776"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff"
        },
      },
      resetConfirm: {
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 20,
      },
      resetStyle: {
        fontSize: 20,
        color: 'red',
        marginRight: 100,
      },
      cancelTextStyle: {
        fontSize: 20,
        color: 'red',
      },
      cancelSaveView: {
        flexDirection:'row',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        marginTop: 180,
      },
      confirmStyle: {
        fontSize: 20,
        color: 'blue',
      },
      activityView: {
        flex: 1,
        flexDirection: 'row',
        width: 350,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#363776',
        shadowColor: 'grey',
        shadowOpacity: 1,
        shadowRaius: 15,
        elevation: 10,
        justifyContent: 'center',
        alignContent: 'center',
      },
      activityText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        marginTop: 15,
        marginLeft: 5,
        flex: 1,
      },
      dateView: {
        backgroundColor: 'white',
        width: 130,
        height: 25,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        right: 14,
        top: -15,
      },
      dateView2: {
        backgroundColor: 'white',
        width: 130,
        height: 25,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        position: 'aboslute',
        right: 14,
        top: -15,
      },
      durationView: {
        backgroundColor: 'white',
        width: 80,
        height: 25,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'aboslute',
        top: 10,
        right: 10,
      },
      durationAndDateText: {
        fontWeight: 'bold',
      },
      flatListView: {
        flex:1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height: '100%',
        backgroundColor: "#aaa9c7",
      },
      saperator: {
        height: 20,
      }
      
    })