import { StatusBar, } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Image, ScrollView, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { Surface, Title, TextInput } from 'react-native-paper';
import ModalView from '../../components/ModalView';
import PostCardItem from '../../components/PostCardItem';
import {BottomNav} from "../../components/BottomNav";
import { Txt } from '../../components/Txt';
import sun from "../../assets/images/sun.png";

// update this url -> "<new_ngrok_host_url>/posts"
const url = 'https://test-api-dpqa.onrender.com/employee'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export const HistoryScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [postId, setPostId] = useState(0);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true)
    await fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(e => console.log(e))
    setLoading(false)
  }

  const addPost = (id, name, phone) => {
    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        "id": id,
        "name": name,
        "phone": phone,
      })
    }).then((res) => res.json())
      .then(resJson => {
        console.log('post:', resJson)
        updatePost()
      }).catch(e => { console.log(e) })
  }

  const editPost = (id, name, phone) => {
    fetch(url + `/${postId}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        "id": id,
        "name": name,
        "phone": phone,
      })
    }).then((res) => res.json())
      .then(resJson => {
        console.log('updated:', resJson)
        updatePost()
      }).catch(e => { console.log(e) })
  }

  const deletePost = (id) => {
    fetch(url + `/${id}`, {
      method: "DELETE",
      headers,
    }).then((res) => res.json())
      .then(resJson => {
        console.log('delete:', resJson)
        getPosts()
      }).catch(e => { console.log(e) })
  }

  const updatePost = () => {
    getPosts()
    setVisible(false);
    setName('')
    setPhone('')
    setId(0)
  }

  const edit = (id, name, phone) => {
    setVisible(true)
    setName('')
    setPhone('')
    setId(0)
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
       <View  style={styles.header1}>
        <View style={{flexDirection: "row", alignItems: "center", marginTop: 4}}>
        <Image source={sun} style={styles.img}/>
          <Txt style={styles.greeting}>QUMI</Txt>
        </View>
          <Text style={{fontSize: 25, fontWeight: "bold", textAlign: "center", marginTop: 5, color: "white"}}>History</Text>
        </View>

      <StatusBar style="auto" />
      <Surface style={styles.header}>
        <Title>Recents</Title>
        {/* <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
          <Text style={styles.buttonText}>Join a Queue</Text>
        </TouchableOpacity> */}
      </Surface>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id + index.toString()}
        refreshing={loading}
        onRefresh={getPosts}
        renderItem={({ item }) => (
          <PostCardItem
            name={item.name}
            phone={item.phone}
            onEdit={() => edit(item.id, item.name, item.phone)}
            onDelete={() => deletePost(item.id)}
          />
        )}
      />
      <ModalView
        visible={visible}
        title="Add Post"
        onDismiss={() => setVisible(false)}
        onSubmit={() => {
          if (id && name && phone) {
            editPost(id, name, phone)
          } else {
            addPost(name, phone)
          }
        }}
        cancelable
      >
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
        />
        <TextInput
          label="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          mode="outlined"
        />
      </ModalView>
      <BottomNav navigation={navigation}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    marginTop: 10,
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
top: -2
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
