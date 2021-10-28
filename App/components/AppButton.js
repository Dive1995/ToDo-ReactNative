import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

function AppButton({color=colors.white, onPress, style, title, disabled}) {
   return (
       <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={[styles.button, style, disabled && {backgroundColor: colors.active}]}>
          <AppText style={[{textAlign:'center', color}, disabled && {color:colors.medium}]}>{title}</AppText>
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