import React, { useState } from 'react';
import { StyleSheet,View, Image,ScrollView, FlatList,TouchableOpacity ,Button} from 'react-native';


import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import profile from "../../assets/images/profile.png"




export const ProfileScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ScrollView>
       <View style={styles.background}>
         <Txt style={styles.header} weight="bold">Profile</Txt>
       </View>
        <Image style={styles.profilePhoto} source={profile} />

        <View style={styles.credentials}>
        <Txt style={styles.userName} weight="bold">Evans Wan</Txt>
        <Txt style={styles.userEmail}>evanswan@gmail.com</Txt>
        
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("appointments")}>
              <Txt style={styles.linkTitle} weight="medium">Appointments</Txt>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
              <Txt style={styles.linkTitle} weight="medium">Feedback</Txt>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
              <Txt style={styles.linkTitle} weight="medium">Rate</Txt>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
              <Txt style={styles.linkTitle} weight="medium">Contact us</Txt>
          </TouchableOpacity>
      
          
        </View>  
        </ScrollView>   
     
          <BottomNav navigation={navigation}/> 
      
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "space-between",
    },
    background: {
      backgroundColor: "#167bf0",
      height: 500,
      width: "120%",
      position: "absolute",
      borderRadius: 150,
      alignSelf: "center",
      top: -200,
    },
    header: {
      fontSize: 26,
      color: "#fff",
      alignSelf: "flex-start",
      textTransform: "uppercase",
      zIndex: 1,
      marginTop: 280,
      marginLeft: 140,
      top: -60
    },
    profilePhoto: {
      width: 150,
      height: 150,
      borderRadius: 90,
      alignSelf: "center",
      marginVertical: 100,
      position: "absolute",
      zIndex: 1,
      top: 20
    },

    img: {
      width: 40,
      height: 40,
    },
    credentials :{
      marginTop: 200,
      marginHorizontal: 20,
      paddingVertical: 100,
      backgroundColor: "rgba(239, 251, 255, 0.81)",
      paddingHorizontal: 30
    },
    link: {
      borderBottomWidth:1,
      borderBottomColor: "#167bf0"
    },
    linkTitle: {
      fontSize: 15,
      color: "#5E5F61",
      paddingVertical: 20
    },
    userName: {
      fontSize: 20,
      color: "#167bf0",
      alignSelf: "center"
    },
    userEmail: {
      fontSize: 13,
      color: "#818383",
      alignSelf: "center"
    }
   
  });
  