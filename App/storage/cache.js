import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log("Error occured while storing data to localstorage : " + error);
    }
}

export const getData = async (key) => {
    try {
        const result = await AsyncStorage.getItem(key)
        if(result == 'null') return null
        return JSON.parse(result)
    } catch (error) {
        console.log("Error occured while getting data from local storage : " + error);
    }
}