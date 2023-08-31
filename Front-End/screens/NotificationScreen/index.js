import { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import {BottomNav} from "../../components/BottomNav"
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const NotificationScreen = ({navigation}) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <View  style={styles.header1}>
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 4}}>
        <Image source={sun} style={styles.img}/>
          <Txt style={styles.greeting}>QUMI</Txt>
        </View>
          <Text style={{fontSize: 25, fontWeight: "bold", textAlign: "center", marginTop: 5, color: "white"}}>Norifications</Text>
        </View>
      {/* <Text style={{fontSize: 17, fontWeight: "bold", marginTop: -30}}>Recent Notifications</Text> */}
      <View style={{ alignItems: 'center', justifyContent: 'center', borderStyle: 'solid', borderWidth: 1, borderColor: "black", borderRadius: 18, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 12 }}>
        <Text>{notification && notification.request.content.title}</Text>
        <Text>{notification && notification.request.content.body}</Text>
        <Text>{notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
      <Button
        title="Tap to refresh"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
              <BottomNav navigation={navigation}/>

    </View>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Joined queue successfully! 📬",
      body: 'Please make sure to check your queue position',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
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
top: -98
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
