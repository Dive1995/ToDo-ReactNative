import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

function Seperator() {
   return (
       <View style={styles.container}>
        <View style={styles.seperator}/>
       </View>
   )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"flex-end"
    },
    seperator:{
        width: "90%",
        height:1,
        backgroundColor:colors.light,

    }
})

export default Seperator