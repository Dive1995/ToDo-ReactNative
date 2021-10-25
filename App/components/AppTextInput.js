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
        backgroundColor: "#fff",
        borderRadius:5,
        fontSize:18,
        padding:10,
        paddingHorizontal:15,
        marginTop:10
    }
})

export default AppTextInput