import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'

function Screen({children, style}) {
   return (
       <SafeAreaView style={[styles.container, style]}>
          {children}
       </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Constants.statusBarHeight,
    }
})

export default Screen