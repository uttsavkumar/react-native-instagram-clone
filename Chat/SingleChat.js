import { Avatar, Input, Pressable, Text, View, FlatList } from 'native-base'
import React, { useState } from 'react'
import IconA from 'react-native-vector-icons/AntDesign'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Feather'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet } from 'react-native'

const inputBtn = [
  {
    id: 1,
    item: <IconF name='mic' size={23} color='white' style={{ paddingRight: 12 }} />
  },
  {
    id: 2,
    item: <IconFA5 name='photo-video' size={21} color='white' style={{ paddingRight: 12 }} />
  },
  {
    id: 3,
    item: <IconMCI name='sticker-emoji' size={24} color='white' style={{ paddingRight: 12 }} />
  }
]
const SingleChat = ({ navigation }) => {

  const [change, setChange] = useState('')
  const Data = [
    {
      id: 1,
      msg: 'asjghdkja',
      type: 'self'
    },
    {
      id: 2,
      msg: 'ashdhas',
      type: 'friend'
    },
    {
      id: 3,
      msg: 'hi',
      type: 'self'
    },
    

  ]
  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.action}>
            <Pressable style={{ flexGrow: .15 }} onPress={() => navigation.navigate('chat')}>
              <IconA name='arrowleft' size={25} color="white" />
            </Pressable>
            <View style={{ flexGrow: .68, flexDirection: 'row' }}>
              <Avatar source={require('../images/shoe5.png')} size={35} />
              <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                <Text style={{ color: 'white', fontSize: 15.4, fontWeight: '700' }}>Uttsav</Text>
                <Text style={{ fontSize: 12, color: '#9f9e9e', marginTop: -3.5 }}>uttsav_shrv</Text>
              </View>
            </View>
            <IconI name='call-outline' size={27} color="white" style={{ textAlignVertical: 'center', flexGrow: .15 }} />
            <IconI name='ios-videocam-outline' size={28} color="white" style={{ textAlignVertical: 'center' }} />
          </View>
        </View>


        <FlatList
          inverted
          contentContainerStyle={{ flexDirection: 'column-reverse' }}
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={({ item }) => (
            item.type === 'self' ?

              <>
                <View style={style.selfchat}>
                  <View style={style.self}>
                    <Text style={{ color: 'white', fontSize: 15.5 }}>{item.msg}</Text>
                  </View>
                </View>
              </>
              :
              <>
                <View style={style.friendchat}>
                  <Avatar source={require('../images/shoe5.png')} size={7} margin='1' ml={2}/>
                  <View style={style.friend}>
                    <Text style={{ color: 'white', fontSize: 15.5 }}>{item.msg}</Text>
                  </View>
                </View>
              </>
          )}
          keyExtractor={item => item.id}
        />


        <View style={style.footer}>
          <Input size={'lg'} selectionColor={"white"} onChangeText={(text) => setChange(text)} width={340} backgroundColor={'#272727'} color="white" variant="unstyled" borderRadius="full" placeholder="Message..."
            InputLeftElement={change === '' ?
              <Avatar style={{ padding: 5, backgroundColor: '#0095f6', marginLeft: 5, }} source={require('../images/camera.png')} size={9} />
              :
              <Avatar style={{ padding: 7, backgroundColor: '#5849d6', marginLeft: 5, }} source={require('../images/search.png')} size={9} />
            }
            InputRightElement={change === '' ?
              inputBtn.map((d, key) => (
                <View key={key}>
                  {d.item}
                </View>
              )) :
              <Text style={{ fontSize: 16, color: '#5849d6', marginRight: 15, fontWeight: '700' }}>Send</Text>
            }
          />
        </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'black'
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    position: 'relative',
    bottom: 0,
    padding: 5,
    marginLeft: 1,
  },
  selfchat: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,

  },
  self: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#0095f6',
    padding: 10,
    borderRadius: 13,
    maxWidth: 230,
    margin: 3,
    marginRight: 15
  },
  friendchat: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  friend: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#272727',
    padding: 10,
    borderRadius: 15,
    maxWidth: 230,
    margin: 3,
  }

})
export default SingleChat