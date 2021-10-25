import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

function AppButton({color=colors.white, onPress, style, title}) {
   return (
       <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, style]}>
          <AppText style={{textAlign:'center', color}}>{title}</AppText>
        </View>
       </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.secondary,
        borderRadius:5,
        paddingVertical: 10,
        minWidth: 100
    }
})

export default AppButton