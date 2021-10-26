import { useFormikContext } from 'formik'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormInput({name, ...otherProps}) {
    const {errors, handleChange, values, setFieldValue} = useFormikContext();

   return (
       <>
        <AppTextInput
            onChangeText={(text) => setFieldValue(name, text)} 
            value={values[name]}
            {...otherProps}
        />
        {/* <ErrorMessage error={errors[name]}/> */}
       </>
   )
}

const styles = StyleSheet.create({

})

export default AppFormInput