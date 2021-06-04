import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import CarItem from '../CarItem/CarItem';
import cars from './FakeData'

const CarList = () => {
    return (
    
    <View style={styles.container}>
      
        <FlatList
            data={cars}
            renderItem = {({item})=><CarItem car={item}/>}
            showsVerticalScrollIndicator={false}
            snapToAlignment ={'start'}
            decelarationRate = {'fast'}
            snapToInterval ={Dimensions.get('window').height}
        />
        {/* {
            cars.map(car =><CarItem car={car}/>)
            
        } */}
        
    </View>
    )
}

export default CarList;

const styles = StyleSheet.create({
    container:{
        width:'100%'
    }
})
