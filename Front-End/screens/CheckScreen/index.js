import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, ScrollView, View, TouchableOpacity, Button, SafeAreaView, Platform } from 'react-native';
import { Surface, Title, TextInput } from 'react-native-paper';
import {BottomNav} from "../../components/BottomNav";
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export const CheckScreen = ({navigation}) => {
const [counter, setCounter] = useState(105);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter - 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
       <View  style={styles.header1}>
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 0}}>
        <Image source={sun} style={styles.img}/>
          <Txt style={styles.greeting}>QUMI</Txt>
        </View>
          <Text style={{fontSize: 13, textAlign: "center", marginTop: 8, color: "white"}}>Queue Entry Confirmed! You've Successfully Joined the Line.</Text>
        </View>

        <View> 
            <Txt style={{textAlign: "center", color: "red", fontWeight: "bold", marginTop: -10 }}>Keep an Eye on Your Position!</Txt>
        </View>

        <View style={{
          padding: 80,
          paddingHorizontal: 30,
          marginTop: 20,
          marginLeft: 50,
          marginRight: 50,
          borderRadius: 10,
          backgroundColor: "#ffffff",
          backgroundColor: "#167bf0"
        }}>
        <Txt style={{textAlign: "center", fontSize: 58, fontWeight: "bold", color: "white"}}>{counter}</Txt>
        </View>
        {/* <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <FontAwesome name='rotate-right' size={15} color="#6b6a6a"/>
        <Button
             onPress={() => {setCounter(counter - 2)}} title="Refresh"
           />
        </View> */}
        <TouchableOpacity
        onPress={() => {setCounter(0)}}
        style={{
          padding: 12,
          paddingHorizontal: 30,
          marginTop: 15,
          marginLeft: 20,
          marginRight: 20,
          textAlign: "center",
          borderRadius: 10,
          backgroundColor: "#ffffff",
          backgroundColor: "#167bf0"
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Leave the line</Text>
      </TouchableOpacity>
     
      <BottomNav navigation={navigation}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: -20,
    padding: 16,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  header1: {
    backgroundColor: "#167bf0",
height: 100,
alignItems: "center",
justifyContent: "center",
flexDirection: "column",
paddingHorizontal: 40,
width: "100%",
borderBottomLeftRadius: 40,
borderBottomRightRadius: 40,
top: -20
  },
  greeting: {
    marginTop: 10,
    fontSize: 24,
    color: "#fff"
  },
  img: {
    marginTop: 10,
    width: 40,
    height: 40,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'steelblue',
  },
  buttonText: {
    color: 'white'
  },
});