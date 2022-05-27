import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import * as React from 'react';
import { COLORS } from '../styles/color';
import { BORDERRADIUS } from '../styles/borderRadius';
import { BUTTONSIZE } from '../styles/buttonSize';

type ImButtonTypes={
    mode?: 'text' | 'outlined' | 'contained';
    disabled?:boolean;
    text?:string;
    color?:string;
    border?:any
    btnsize?:string
}

const ImButton=(props:ImButtonTypes)=> {
    
    const buttonStyles=[
        styles.defaultSize,
        styles.defaultRadius,
        props.btnsize && BUTTONSIZE[props.btnsize],
        props.color &&{backgroundColor:COLORS[props.color]},
        props.border && {borderRadius:BORDERRADIUS[props.border]},
    ]
    return (
        <TouchableOpacity style={buttonStyles}>
            <Text style={styles.textButton}>
                {props.text.toUpperCase()}
            </Text>
        </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    defaultSize:{
        width:90,
        height:30
    },
    defaultRadius:{
        borderRadius:3
    },
    textButton:{
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    }
})
export default ImButton;