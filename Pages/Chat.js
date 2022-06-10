import { Avatar, Input, Pressable, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import IconA from 'react-native-vector-icons/AntDesign'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler'
const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
    flex:1
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
  search: {
    padding: 10,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 5
  },
  desc: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    marginTop: 6,
    marginLeft: 12
  },
  message: {
    padding: 16,
    marginTop: 5,
    marginBottom: 50
  },
  singlechat: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 18
  }
})
const Chat = ({ navigation }) => {
  return (
    <>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.action}>
            <Pressable style={{ flexGrow: .27 }} onPress={() => navigation.navigate('landing')}>
            <IconA name='arrowleft' size={25} color="white"  />
            </Pressable>
            <Text style={{ color: 'white', fontSize: 18.5, textAlignVertical: 'center', fontWeight: '700' }}>UserName</Text>
            <IconMI name='keyboard-arrow-down' size={20} color="white" style={{ textAlignVertical: 'center', flexGrow: .60 }} />
            <IconI name='ios-videocam-outline' size={25} color="white" style={{ textAlignVertical: 'center', flexGrow: .12 }} />
            <IconA name='plus' size={25} color="white" style={{ textAlignVertical: 'center' }} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.search}>
            <Input selectionColor={'white'} borderRadius="lg" size="lg" placeholder="Search" bgColor={'#272727'} placeholderTextColor={"#b5b5b5"} variant="unstyled"
              style={{ height: 36, color: 'white', }} InputLeftElement={<IconA name="search1" size={18} color="#b5b5b5" style={{ paddingLeft: 12 }} />} />
          </View>

          <View style={style.desc}>
            <Text style={{ color: 'white', fontSize: 14.5, fontWeight: '700', flexGrow: 1 }}>Messages</Text>
            <Text style={{ color: '#0095f6', fontSize: 14.5, fontWeight: '400', marginRight: 12 }}>Requests</Text>
          </View>

          <View style={style.message}>

           
           
           <Pressable onPress={() => navigation.navigate('singlechat')}>
           <View style={style.singlechat}>
              <Avatar source={require('../images/shoe5.png')} size={58} />
              <View style={{ padding: 5, marginLeft: 15, flexGrow: 1 }}>
                <Text style={{ color: 'white', marginTop: 3.2, fontSize: 13.5 }}>Dhritesh Kr</Text>
                <Text style={{ color: '#9f9e9e', marginTop: -3, fontSize: 12.8 }}>Sent studentpage reel. 1h</Text>
              </View>
              <IconF name='camera' size={25} style={{ textAlignVertical: 'center', color: '#b5b5b5' }} />
            </View>
           </Pressable>

          </View>
        </ScrollView>
      </View>
    </>
  )
}
    
export default Chat