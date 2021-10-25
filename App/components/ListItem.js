import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'
import AppText from './AppText'

function ListItem({title, renderRightActions}) {
   return ( 
       <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity style={styles.container}>
            <View style={styles.circle}></View>
            <View>
                <AppText>{title}</AppText>
            </View>
        </TouchableOpacity>
       </Swipeable>
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