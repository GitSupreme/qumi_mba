import { StatusBar, } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
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

export const ConfirmScreen = ({navigation}) => {
  const { empid } = useParams();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  // const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  const empdata={name,email,phone,active};
  // const [postId, setPostId] = useState(0);
  const[id,idchange]=useState("");
  const[name,namechange]=useState("");
  const[email,emailchange]=useState("");
  const[phone,phonechange]=useState("");
  const[active,activechange]=useState(true);
  const[validation,valchange]=useState(false);
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

  const addPost = (empdata) => {
    fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(empdata)
    }).then((res)=> {
      alert('Joined successfully.')
      updatePost()
    }).catch((err)=>{
      console.log(err.message)
    })
  }

  const editPost = (empdata) => {
    fetch(url + `/${empid}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(empdata)
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
    namechange('')
    emailchange('')
    phonechange('')
    idchange(0)
  }

  const edit = (empdata) => {
    setVisible(true)
    namechange('')
    emailchange('')
    phonechange('')
    idchange(0)
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
          <Text style={{fontSize: 13, textAlign: "center", marginTop: 8, color: "white"}}>Instant Queue Access: Fill Forms and Get Ready to Join the Line</Text>
        </View>

      <StatusBar style="auto" />
      <Surface style={styles.header}>
        <Title>Recents</Title>
        <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
          <Text style={styles.buttonText}>Join a Queue</Text>
        </TouchableOpacity>
      </Surface>
      <FlatList
        data={empdata}
        keyExtractor={(empdata, index) => empdata.id + index.toString()}
        refreshing={loading}
        onRefresh={getPosts}
        renderItem={({ empdata }) => (
          <PostCardItem
            name={empdata.name}
            phone={empdata.phone}
            onEdit={() => edit(empdata.id, empdata.name, empdata.name, empdata.phone)}
            onDelete={() => deletePost(empdata.id)}
          />
        )}
      />
      <ModalView
        visible={visible}
        title="Add Post"
        onDismiss={() => setVisible(false)}
        onSubmit={() => {
          if (id && name && email &&  phone) {
            editPost(id, name, email, phone)
          } else {
            addPost(name, email, phone)
          }
        }}
        cancelable
      >
        <TextInput
          label="Name"
          required value={name}
          onChangeText={(text) => namechange(text)}
          mode="outlined"
        />
        <TextInput
          label="Customer ID"
          value={email}
          onChangeText={(text) => emailchange(text)}
          mode="outlined"
        />
        <TextInput
          label="Phone Number"
          value={phone}
          onChangeText={(text) => phonechange(text)}
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
    marginTop: 5,
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
