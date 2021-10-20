import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors'

function CreateButton({onPress}) {
   return (
       <TouchableHighlight onPress={() => console.log("create")} style={styles.container} underlayColor="rgba(0,0,0,0.1)">
            <MaterialCommunityIcons name="plus" size={35} color="#fff"/>
       </TouchableHighlight>
   )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:colors.secondary,
        borderRadius: 25,
        height:50,
        justifyContent:"center",
        width: 50,
    },

})

export default CreateButton