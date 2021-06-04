import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'

const StyleButton = (props) => {
    

    const {type,content,onPress} = props
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF': '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor:backgroundColor}]}
                onPress={() =>onPress()}
            >
                <Text style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyleButton;

const styles = StyleSheet.create({
    button:{
       backgroundColor:'black',
       height:40,
       justifyContent:'center',
       alignItems: 'center',
       borderRadius:'20px'
    },
    container:{
        width:'100%',
        padding:'10px',
    },

    text:{
        color: 'black',
        fontWeight:'bold',
        textTransform: 'uppercase',
    }
})
