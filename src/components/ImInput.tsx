import * as React from 'react';
import { StyleSheet, TextInput} from 'react-native';
import { BORDERRADIUS } from '../styles/borderRadius';
import { COLORS } from '../styles/color';
import { INPUTTYPES } from '../styles/inputTypes';

type ImInputTypes={
    placeholder?:string;
    shadowless?:any;
    type?:any;
}
const ImInput=(props:ImInputTypes)=>{

    const inputStyles = [
        styles.input,
        !props.shadowless && styles.shadow,
      ];

    return(
        <TextInput placeholder={props.placeholder} style={inputStyles}
          keyboardType={INPUTTYPES[props.type]}
        />
    )

}

const styles=StyleSheet.create({
    input:{
        width:300,
        borderRadius:BORDERRADIUS.radius5,
        borderColor:'red',
        height: 40,
        borderWidth:1,
        backgroundColor: '#FFFFFF',
        padding:5
    },
      shadow: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.05,
        elevation: 2,
      }
})
export default ImInput;