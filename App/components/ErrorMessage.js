import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppText from './AppText'

function ErrorMessage({error}) {
   return (
    <AppText style={{color:"red"}} >
        {error}
    </AppText>  
   )
}

const styles = StyleSheet.create({

})

export default ErrorMessage