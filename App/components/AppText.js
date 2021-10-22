import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants';


function AppText({children, style,  ...otherProps}) {
   return (
       <Text {...otherProps} style={[styles.text, style]}>
          {children}
       </Text>
   )
}

const styles = StyleSheet.create({
    text:{
        // fontFamily: Constants.platform === "android" ? "Roboto" : "Courier",
        fontSize: 18,
    }
})

export default AppText