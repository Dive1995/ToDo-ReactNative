import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import colors from '../config/colors'

function AppTextInput({style,...otherProps}) {
    return (
        <TextInput
            {...otherProps}
            style={[styles.textInput, style]}
        />
    )
}

const styles = StyleSheet.create({
    textInput:{
        backgroundColor: colors.gray,
        borderRadius:5,
        fontSize:18,
        padding:10,
        paddingHorizontal:15,
        marginVertical:20
    }
})

export default AppTextInput