import React from 'react';
import {  StyleSheet,View, Image, FlatList, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Card, Icon } from '@rneui/themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import EvilIcons from '@expo/vector-icons/EvilIcons';

import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png"
import { Company } from '../../components/Company';
import { gold } from 'color-name';

// const DATA = [
//   {
//     id: '3ac68afc-c605-48d3-a4f8-f7bd91aa97f63',
//     title: 'Take Ticket',
//     services: [
//       {
//         title: "Ticket Counter 1",
//         id: '3ac68afc-c605-48d3-a4f28-fbd91aa97f63',
//         branches: [
//           {
//             title: "Number of people",
//             place: 13
//           },
//         ]
//       },
//       {
//         title: "Ticket Counter 2",
//         id: '3ac68afc-c605-48d3-a4f81-fbd91aa97f63',
//         branches: [
//           {
//             title: "Number of people",
//             place: 20
//           },
//         ]
//       },
//       {
//         title: "Ticket Counter 3",
//         id: '3ac68afc-c605-48d3-a4f8-mfbd91aa97f63',
//         branches: [
//           {
//             title: "Number of people",
//             place: 17
//           },
//         ]
//       },
//     ]
//   }, 
// ];


export const HomeScreen = ({navigation}) => {


  return (
      <View style={styles.container}>
       
        <View style={styles.header}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
          <Image source={sun} style={styles.img}/>
          <Txt style={styles.greeting}>QUMI</Txt>
          </View>

          <View style={{flexDirection: "row", marginRight: 0, justifyContent: "space-between", padding: 10}}>
          <TouchableOpacity onPress={() => navigation.navigate("notification")}>
          <FontAwesome name='bell' size={24} color="#e0a80d"/>
          </TouchableOpacity>
          <View style={{padding: 5}}>
            </View>
          <TouchableOpacity onPress={() => navigation.navigate("setting")}>
          <FontAwesome name='cog' size={24} color="#38e8d3"/>
          </TouchableOpacity>
          </View>

        </View>

        <ScrollView>
        <Card>
          <Text style={{color: "#757373", textAlign: "center", marginBottom: 10, fontSize: 16}}>Hello, Welcome!</Text>
          <Image
            style={{ width: 70, height: 70, borderRadius: 70/ 2, alignSelf: 'center' }}
            source={{
              uri:
                'https://i.pinimg.com/564x/80/3f/99/803f99a7db4dfef05c3f671b44e3e9c5.jpg',
            }}
          />
          <Text style={{ marginBottom: 10, marginTop: 2, alignSelf: 'center', color: "#757373" }}>
            What would you like to do?
          </Text> 
        </Card>

        <View style={{ display:"flex" ,backgroundColor: "#167bf0", paddingHorizontal: 30, paddingVertical: 15, marginLeft: 15, marginRight: 15, borderRadius: 5 }}>
          <Text style={{ marginTop: 15, textAlign: "center", color: "white" }}>
            Click to Queue: Load the form and begin your waiting journey.
          </Text>
          <TouchableOpacity
        onPress={() => {
          navigation.navigate("confirm");
        }}
        style={{
          padding: 12,
          paddingHorizontal: 30,
          marginTop: 15,
          textAlign: "center",
          borderRadius: 10,
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={{ color: "black", textAlign: "center" }}>Join</Text>
      </TouchableOpacity>
        </View>

        <View style={{ display:"flex" ,backgroundColor: "#167bf0", paddingHorizontal: 30, paddingVertical: 15, marginLeft: 15, marginRight: 15, marginTop: 30, borderRadius: 5 }}>
          <Text style={{ marginTop: 15, textAlign: "center", color: "white" }}>
          Queue status at your fingertips: Click to view your position now!
          </Text>
          <TouchableOpacity
        onPress={() => {
          navigation.navigate("check");
        }}
        style={{
          padding: 12,
          paddingHorizontal: 30,
          marginTop: 15,
          textAlign: "center",
          borderRadius: 10,
          backgroundColor: "#ffffff",
        }}
      >
        <Text style={{ color: "black", textAlign: "center" }}>Check</Text>
      </TouchableOpacity>
        </View>

        <View
        style={styles.companies}
        />
        </ScrollView>

        <BottomNav navigation={navigation}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  header: {
    backgroundColor: "#167bf0",
      height: 70,
      marginTop: 0,
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
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
  companies: {
    width: "100%",
    marginVertical: 60,
    
  }
});
