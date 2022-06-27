import { Image, Pressable, Text, View, Avatar } from 'native-base'
import React, { useState,useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import IconE from 'react-native-vector-icons/Entypo'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import Content from './Content.js'

const stories = [
  {
    id: 1,
    name: 'new',
    image: require('../images/img.jpg')
  },
  {
    id: 2,
    name: 'new1',
    image: require('../images/img.jpg')
  },
  {
    id: 3,
    name: 'new2',
    image: require('../images/img.jpg')
  },
  {
    id: 4,
    name: 'new3',
    image: require('../images/img.jpg')
  },
]


const Landing = ({navigation}) => {
 
  return (
    <>

      {/*Container*/}
      {/* Header */}
      <View style={style.container}>
        <View style={style.header}>
          <Image source={require('../images/logo.png')} alt="logo" style={{ height: 30, width: 105, marginLeft: 20 }} />
          <View style={{ flexGrow: .78 }}></View>

          <Pressable onPress={() => navigation.navigate('addpost')}>
            <View style={style.addicondiv}>
              <IconE name='plus' style={style.addicon} />
            </View>
          </Pressable>
          <View style={{ flexGrow: .12 }}></View>

          <Pressable onPress={() => navigation.navigate('chat')}>

            <Image source={require('../images/chat.png')} alt="Chat" style={{ height: 25, width: 25 }} />
            <View style={style.badgediv}>
              <Text style={style.badgetext}>4</Text>
            </View>
          </Pressable>
        </View>

        {/* Avatar Div */}
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
          <View style={{ backgroundColor: 'black', height: 107, borderBottomWidth: .2, borderBottomColor: '#8c8c8c94' }}>

            <ScrollView horizontal>
              <View style={{ display: 'flex', flexDirection: 'row', }}>
                {/* add new story  */}
                <View style={{ marginTop: 14, marginLeft: 10 }}>
                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Avatar style={style.avatar}>
                      <IconFA5 name="user-alt" size={30} />
                    </Avatar>
                    <View style={{ height: 20, width: 20, backgroundColor: '#0095f6', position: 'absolute', right: 0, top: 40, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
                      <IconMI name="add" style={{ color: 'white' }} size={15} />
                    </View>
                  </View>
                  <Text style={{ color: 'white', fontSize: 10.4, fontWeight: '600', alignSelf: 'center', marginLeft: 10 }}>Your Story</Text>
                </View>
                {/* your story */}
                {/* <View >
                  <View style={style.avatardiv}>
                    <Avatar style={style.avatar}>
                      <IconFA5 name="user-alt" size={30} />
                    </Avatar>
                  </View>
                  <Text style={{ color: 'white', fontSize: 10.4, fontWeight: '600', alignSelf: 'center', marginLeft: 10 }}>Your Story</Text>
                </View> */}

                {/* Other's Story */}
                {stories.map((item, key) => (
                  <View key={key}>
                    <View style={style.avatardiv}>
                      <Avatar style={style.avatar}>
                        <Image alt="story" source={item.image} style={{ height: 60, width: 60, borderRadius: 30 }} />
                      </Avatar>
                    </View>
                    <Text style={{ color: 'white', fontSize: 10.4, fontWeight: '600', alignSelf: 'center', marginLeft: 10 }}>{item.name}</Text>
                  </View>
                ))}



              </View>
            </ScrollView>

          </View>
          {/* Content Div */}
          <Content />
        </ScrollView>

      </View>
     
    </>
  )
}


const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'black', height: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomWidth: .3, borderBottomColor: '#8c8c8c94'
  },
  addicondiv: {
    width: 21, height: 21.9, backgroundColor: 'transparent', borderRadius: 6, borderColor: 'white', borderWidth: 1.5,
  },
  addicon: {
    fontWeight: 'bold', fontSize: 20, color: 'white', marginTop: -1, marginLeft: -.9
  },
  badgediv: {
    height: 18, width: 19.5, position: 'absolute', backgroundColor: '#f24c4c', left: 15, borderRadius: 19, top: -4, alignItems: 'center'
  },
  badgetext: {
    color: 'white', marginTop: -2, fontSize: 11.5, fontWeight: 'bold'

  },
  avatardiv: {
    width: 70, height: 70, borderWidth: 2, borderColor: '#d82d5d', borderRadius: 40, marginTop: 10, marginLeft: 10
  },
  avatar: {
    backgroundColor: 'grey', width: 62, height: 62, marginLeft: 2, marginBottom: 3, marginTop: 2
  }
})

export default Landing