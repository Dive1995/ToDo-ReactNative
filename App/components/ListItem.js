import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

function ListItem({title}) {
   return (
       <View style={styles.container}>
          <View style={styles.circle}></View>
          <View>
              <AppText>{title}</AppText>
          </View>
       </View>
   )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        marginVertical:15,
    },
    circle:{
        borderWidth: 2,
        borderRadius:10,
        borderColor:colors.medium,
        height: 20,
        width: 20,
        marginRight: 15,
    }
})

export default ListItem