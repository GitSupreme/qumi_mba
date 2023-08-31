import React, { useState } from 'react';
import { StyleSheet,View,ScrollView, Image,Text, FlatList,TouchableOpacity ,Button} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import FontAwesome from '@expo/vector-icons/FontAwesome';


import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png"

export const SettingScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        <View  style={styles.header}>
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 4}}>
        <Image source={sun} style={styles.img}/>
          <Txt style={styles.greeting}>QUMI</Txt>
        </View>
          <Text style={{fontSize: 25, fontWeight: "bold", textAlign: "center", marginTop: 5, color: "white"}}>Settings</Text>
        </View>
        
        <ScrollView>
        <View style={styles.links}>
        <TouchableOpacity onPress={() => navigation.navigate("")} style={styles.link}>
        <FontAwesome name='sun-o' size={20} color="#70706f"/>
        <Txt style={styles.linkTitle}>Theme Settings</Txt>
              <View style={styles.downArrow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("notification")} style={styles.link}>
          <FontAwesome name='bell-o' size={20} color="#70706f"/>
        <Txt style={styles.linkTitle}>Notifications & Sound</Txt>
              <View style={styles.downArrow} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("history")} style={styles.link}>
          <FontAwesome name='history' size={20} color="#70706f"/>
              <Txt style={styles.linkTitle}>Queue History</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
          <FontAwesome name='shield' size={20} color="#70706f"/>
              <Txt style={styles.linkTitle}>Privacy & Security</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
          <FontAwesome name='question-circle' size={20} color="#70706f"/>
              <Txt style={styles.linkTitle}>Help</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
          <FontAwesome name='share-alt' size={20} color="#70706f"/>
              <Txt style={styles.linkTitle}>Invite a friend</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
          <FontAwesome name='info-circle' size={20} color="#70706f"/>
              <Txt style={styles.linkTitle}>About company</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
          <FontAwesome name='user' size={20} color="#70706f"/>
              <Txt style={styles.linkTitle}>Account Settings</Txt>
              <View style={styles.downArrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("login")} style={styles.link}>
          <FontAwesome name='sign-out' size={20} color="#70706f"/>
              <Txt style={styles.linkTitle1}>Logout</Txt>
              <View style={styles.downArrow}/>
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
      marginTop: 40
    },
    header: {
      backgroundColor: "#167bf0",
  height: 100,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddingHorizontal: 40,
  width: "100%",
  borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
  top: -40
    },
    greeting: {
      fontSize: 24,
      color: "#fff"
    },
    img: {
      width: 40,
      height: 40,
    },
    name: {
      color: "#167bf0",
      fontSize: 26,
      textTransform: "uppercase",
      marginVertical: 30,
      marginHorizontal: 20
    },
    links :{
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderColor: "#30302f",
      borderWidth: 1.0,
      borderRadius: 50,
      marginTop: 1,
      marginBottom: 90
    },
    link: {
      backgroundColor: '#fff',
      justifyContent: "left",
      marginVertical: 15,
      // borderColor: "#167bf0",
      // borderWidth: 1,
      paddingVertical: 15,
      borderRadius: 40,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      alignItems: "center",
      marginBottom: 5

    },
    linkTitle: {
      fontSize: 18,
      color: "#5E5F61",
    },
    linkTitle1: {
      fontSize: 18,
      color: "red",
    },
    downArrow: {
      width: 10,
      height: 10,
      borderRightWidth: 2,
      borderRightColor: "#5E5F61",
      borderBottomWidth: 2,
      borderBottomColor: "#5E5F61",
      transform: [{ rotate: '320deg' }]
    }
   
  });
  
