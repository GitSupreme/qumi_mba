import React from 'react';
import { StyleSheet,View,Image,TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const BottomNav = ({navigation}) => {
  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <View style={styles.circle}>
              <FontAwesome name='home' size={32} color="white"/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("barscan")}>
              <View style={styles.homeCircle}>
              <FontAwesome name='qrcode' size={34} color="black"/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("history")}>
              <View style={styles.circle}>
              <FontAwesome name='history' size={32} color="white"/>
              </View>
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#167bf0',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 0,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 0
    
  
  },
  circle: {
     width: 40,
     height: 40,
     borderRadius: 15,
     borderColor: "#ffffff",
     backgroundColor: "#167bf0",
     justifyContent: "center",
     alignItems: "center"
  },
  homeCircle: {
    width: 50,
    height: 50,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "#51abf8",
    justifyContent: "center",
    alignItems: "center",
    bottom: 28
  },
  img: {
    width: 20,
    height: 21,
  }
});
