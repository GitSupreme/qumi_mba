import React, {useState} from "react";
import { View,TextInput,StyleSheet ,TouchableOpacity,Image, ScrollView } from "react-native";

import openEye from "../assets/images/openEye.png" 
import closeEye from "../assets/images/closeEye.png" 

import {Txt} from "./Txt"


export const Field = ({value,handleFieldChange,secure,name}) => {
   
    // const [passIsHide,setPassIsHide] = useState(secure)
    
    
return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Txt style={styles.name}>{name}</Txt>
        <TextInput
         style={styles.input}
         value={value}
         onChangeText={(v) => handleFieldChange(name,v)}
        //  secureTextEntry={passIsHide}
       />

{/* {
        secure && 
        <View style={styles.passwordHideToggleElement}>
        <TouchableOpacity onPress={() => setPassIsHide((v) => !v)} style={styles.imgWrapper}>
          {passIsHide ? (
            <Image
              style={styles.passwordHideToggleElementImg}
              source={openEye}
            />
          ) : (
            <Image
              style={styles.passwordHideToggleElementImg}
              source={closeEye}
            />
          )}
        </TouchableOpacity>
      </View>
    } */}
      </View>    
    </View>
)
};

const styles = StyleSheet.create({
    container:{
        width: "100%",
        justifyContent:"center",
        overflow:"hidden",
        marginVertical: 10,
    },
    inputWrapper: {
      flexDirection: "column",
      marginHorizontal: 40,
      alignItems: "left",
      justifyContent: "space-between",
      position: "relative"
    },
    name: {
      color: "#818383",
      fontSize: 14,
      fontWeight: "bold"      
    },
    input: {
        paddingVertical:13,
        borderColor: '#167bf0',
        borderWidth: 1,
        borderRadius: 10,
        width: "100%",
        paddingHorizontal: 16
    },
    passwordHideToggleElement: {
        position: "absolute",
        width: 19,
        height: 19,
        right: 0
        
      },
      passwordHideToggleElementImg: {
        width: 19,
        height: 19,
        
      },
     imgWrapper: {
        backgroundColor: "#167bf0",
        borderRadius: 10,
        width: 21,
        height: 18,
        alignItems: "center",
        justifyContent: "right"
     }
    

});