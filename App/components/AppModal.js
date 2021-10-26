import React from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppButton from './AppButton'
import AppFormInput from './AppFormInput'
import AppText from './AppText'
import colors from '../config/colors'

const validationSchema = Yup.object().shape({
    title: Yup.string().min(1).label("Title").required("Add some todo.")
})

function AppModal({modalVisible ,setModalVisible, addTodo, todo }) {
   return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
              <View style={styles.modal}>
                  <AppText>New TODO</AppText>
                  <Formik
                    initialValues={{title:''}}
                    onSubmit={({title}) => {
                                    const newTodo = {id: Date.now(), title}
                                    addTodo([newTodo, ...todo])
                                    setModalVisible(false)
                                }}
                    validationSchema={validationSchema}
                  >
                      {({handleSubmit, values}) => (
                        <>
                        {/* <AppTextInput autoFocus={true} style={{backgroundColor:"#fff", marginVertical:15}} placeholder="Whats on your mind!!" onChangeText={(text) => setTitle(text)} value={title}/> */}
                        <AppFormInput 
                            name="title"
                            placeholder="Whats on your mind !!"
                            autoFocus
                            />
                        <View>
                            
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <AppButton 
                                style={{backgroundColor: colors.medium}}
                                title="Cancel" 
                                onPress={() => {
                                    setModalVisible(false)
                                    // setTitle('')
                                }}
                            />
                            <AppButton 
                                disabled={!values.title}
                                title="Add"
                                onPress={handleSubmit}
                            />
                        </View>
                        </>
                      )}
                  </Formik>
              </View>
          </Modal>
   )
}

const styles = StyleSheet.create({
    modal:{
        // height: 80,
        // width:100,
        padding: 20,
        position: 'absolute',
        bottom:100,
        left:50,
        right:50,
        backgroundColor: colors.white,
        borderRadius:20,
        elevation:1,
    },
    modalButtonContainer:{
        flexDirection:"row",
        justifyContent:'space-around'
    },
})

export default AppModal