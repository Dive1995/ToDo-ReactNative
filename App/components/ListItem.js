import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors'
import AppText from './AppText'

function ListItem({title, renderRightActions, onPress}) {
   return ( 
       <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.circle}></TouchableOpacity>
            <View>
                <AppText>{title}</AppText>
            </View>
        </View>
       </Swipeable>
   )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        paddingVertical:15,
        paddingHorizontal: 20,
        // backgroundColor:"gold"
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