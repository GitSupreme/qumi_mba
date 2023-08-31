import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import {BottomNav} from "../../components/BottomNav";
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png"

export const FormScreen = ({navigation}) => {
  
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <View  style={styles.header}>
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 4}}>
        <Image source={sun} style={styles.img}/>
          <Txt style={styles.greeting}>QUMI</Txt>
        </View>
          <Text style={{textAlign: "center", marginTop: 5, color: "white"}}>Instant Queue Access: Fill Forms and Get Ready to Join the Line</Text>
        </View>

        <ScrollView>
        <View style={{marginTop: 30}}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#3bcc73"}}>12 people are ahead of you.</Text>
      <View style={{}}>
        <TextInput
          style={{
            paddingVertical: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            marginTop: 20,
          }}
          placeholder="Enter your fullname"
          placeholderTextColor="grey" 
        />
      </View>
      <View style={{ marginTop: 12,}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter phone number"
          placeholderTextColor="grey" 
        />
      </View>
      <View style={{ marginTop: 12,}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Enter your ID number"
          placeholderTextColor="grey" 
        />
      </View>
      <View style={{ marginTop: 12,}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
          }}
          placeholder="Purpose of visitation"
          placeholderTextColor="grey" 
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("appointments");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 25,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "#167bf0",
        }}
      >
        {/* <AntDesign name="apple1" size={24} color="white" /> */}
        <Text style={{ paddingLeft: 10, color: "white" }}>Join Queue</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      <BottomNav navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
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
  top: 6
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

});