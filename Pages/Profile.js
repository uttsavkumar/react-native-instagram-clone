import { Avatar, Pressable, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import IconE from 'react-native-vector-icons/Entypo'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import IconI from 'react-native-vector-icons/Ionicons'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
import ProfileImage from '../Profile/ProfileImage'

const Profile = () => {
  return (
    <>
      <View style={style.container}>

        <View style={style.header}>
          <IconMI name='lock-outline' color={'white'} size={18} style={{ marginLeft: 2, flexGrow: .057 }} />
          <Text style={{ color: 'white', fontSize: 21.5, fontWeight: '700' }}>userName</Text>
          <IconMI name='keyboard-arrow-down' size={19} color="white" style={{ flexGrow: .73 }} />
          <Pressable onPress={() => console.log('skdkh')} style={{ flexGrow: .18 }}>
            <View style={style.addicondiv}>
              <IconE name='plus' style={style.addicon} />
            </View>
          </Pressable>
          <IconSLI name='menu' color={'white'} size={22} />
        </View>

        <View style={style.profile}>
          <Avatar source={require('../images/shoe5.png')} size={20} style={{ marginTop: -7, }} />
          <View style={{ flexGrow: .2 }}></View>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 12, flexGrow: .4 }}>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>3</Text>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 13, marginTop: -1.5 }}>Posts</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 12, flexGrow: .4 }}>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>156</Text>
            <Text style={{ color: 'white', fontSize: 13, marginTop: -1.5 }}>Followers</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 12, flexGrow: .4 }}>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>400</Text>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 13, marginTop: -1.5 }}>Following</Text>
          </View>
        </View>

        <View style={style.desc}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '700' }}>Uttsav Kumar</Text>
          <Text style={{ color: 'white', fontSize: 13.5, marginTop: -2 }}>Lorem ipsum, dolor sit amet consectfuga explicabo, ab animi? Iure accusamus soluta illo sequi neque provident qui vel.</Text>
        </View>

        <View style={style.buttondiv}>
          <Pressable style={style.btn}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>Edit Profile</Text>
          </Pressable>
          <Pressable style={style.btn}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>View Archieve</Text>
          </Pressable>
        </View>

        <View style={style.stories}>
          <View style={{ paddingLeft:13 }}>
            <Avatar source={require('../images/shoe5.png')} size={16}  />
            <Text color={'white'}  style={{ fontSize:11,alignSelf:'center' }}>Your Prev </Text>
          </View>
          <View style={{ paddingLeft:13 }}>
            <Avatar source={require('../images/shoe5.png')} size={16} />
            <Text color={'white'}  style={{ fontSize:11,alignSelf:'center' }}>New </Text>
          </View>
        </View>
        
      </View>
      <ProfileImage/>

    </>
  )
}
const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    // borderBottomWidth: .3,
    // borderBottomColor: '#8c8c8c94'
  },
  addicondiv: {
    width: 22, height: 23, backgroundColor: 'transparent', borderRadius: 6, borderColor: 'white', borderWidth: 1.5
  },
  addicon: {
    fontWeight: 'bold', fontSize: 20, color: 'white', marginTop: -1, marginLeft: -.3
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    padding: 21,
  },
  desc: {
    marginLeft: 18,
    marginTop: -9
  },
  buttondiv: {
    display: 'flex',
    flexDirection: 'row',
    padding: 14,
    marginTop: -4
  },
  btn: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
    borderRadius: 5,
    width: 135,
    marginLeft: 5,
    alignItems: 'center',
    borderWidth: .5,
    borderColor: 'grey'
  },
  stories: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    marginTop:-8,
    paddingBottom:18
    
  }
})
export default Profile