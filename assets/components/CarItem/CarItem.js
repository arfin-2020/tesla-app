import React from 'react'
import { StyleSheet, Text, View,ImageBackground, Dimensions } from 'react-native'
import Header from '../Header/Header';
import StyleButton from '../StyleButton/StyleButton';

const CarItem = (props) => {
  // console.log(props)
  const {name, subTitle, image,titleCTA} = props.car
    return (
        <View style={styles.carContainer}>
             <Header/>
        <ImageBackground style={styles.background} source={image} />

        <View style={styles.titles}>
            <Text style={styles.Header}>{name}</Text>

            <Text style={styles.subtitle}>{subTitle} {' '}
               <Text style={styles.titleCTA}>{titleCTA}</Text>
            </Text>

        </View>

        <View style={styles.buttonContainer}>
        <StyleButton 
        type ='primary'
        content = {'Custom Order'}
        onPress = {()=>{
          alert("Custom Order was Pressed")
        }}  
        />
        
        <StyleButton 
        type ='secondary'
        content = {'Existing Inventory'}
        onPress = {()=>{
          alert("Existing Inventory Order was Pressed")
        }}  
        />

        </View>
</View>
    )
}

export default CarItem;

const styles = StyleSheet.create({
    carContainer:{
        height: Dimensions.get('window').height,
        width: '100%',
      },
      titles:{
          marginTop: '30%',
          alignItems: 'center'
      },
      Header:{
        fontSize: 40,
        fontWeight: 'bold',
        color:'black'
      },
      subtitle:{
        fontSize: 16,
        color:'black'
      },
      background:{
        height: '100%',
        width: '100%',
        position:'absolute',
        resizeMode:'cover'
      },
      buttonContainer:{
          position:'absolute',
          bottom:'50px',
          width: '100%',
      },
      titleCTA:{
        textDecorationLine:'underline',
      }
})
