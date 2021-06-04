import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../images/logo.png')}/>
            <Image style={styles.manu} source={require('../../images/menu.png')}/>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        position:'absolute',
        top:40,
        zIndex: 100,
        alignItems: 'center',
        justifyContent:'space-between',
        width: '100%',
        paddingHorizontal:10,
    },
    logo:{
            width: 100,
            height: 20,
            resizeMode:'contain'
    },
    manu: {
        width: 25,
        height: 25,
        resizeMode:'contain'
    }   
})
