import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

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
        backgroundColor: "#f1f1f1",
        borderRadius:25,
        fontSize:18,
        padding:10,
        paddingHorizontal:20,
    }
})

export default AppTextInput