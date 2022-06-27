import { Avatar, Box, HStack, Image, Modal, Pressable, ScrollView, Text, View, VStack } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import IconE from 'react-native-vector-icons/Entypo'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconI from 'react-native-vector-icons/Ionicons'
import IconSLI from 'react-native-vector-icons/SimpleLineIcons'
import ProfileImage from '../Profile/ProfileImage'
import auth from '@react-native-firebase/auth';

const ModalContent = () => {
  return (
    <>
      <Modal.Content  style={{ borderTopLeftRadius:20,borderTopRightRadius:20,backgroundColor:'#262626', marginBottom: 0,marginTop: "auto" }}>   
        <Modal.Body style={{ padding: 0, margin: 0,backgroundColor:'#262626',height:350 }}>
          <VStack style={{ padding:1}}>
              <Pressable onPress={() => auth().signOut()}>
              <Box style={{ marginTop:20 }}>
                <HStack>
                  <IconI name='ios-settings-outline' size={27} color='white' style={{marginRight:20,marginLeft:1.5}}/>
                  <Text style={{ color:'white',fontSize:16,textAlignVertical:'center',fontWeight:'600' }}>Settings</Text>
                </HStack>
              </Box>
              </Pressable>
              <Box style={{ marginTop:15 }}>
                <HStack>
                  <IconE name='back-in-time' size={27} color='white' style={{marginRight:20}}/>
                  <Text style={{ color:'white',fontSize:16,textAlignVertical:'center',fontWeight:'600' }}>Archieve</Text>
                </HStack>
              </Box>
              <Box style={{ marginTop:15 }}>
                <HStack>
                  <IconMI name='av-timer' size={31} color='white' style={{marginRight:17}}/>
                  <Text style={{ color:'white',fontSize:16,textAlignVertical:'center',fontWeight:'600' }}>Your Activity</Text>
                </HStack>
              </Box>
              <Box style={{ marginTop:17 }}>
                <HStack>
                  <IconMCI name='qrcode-scan' size={26} color='white' style={{marginRight:20,marginLeft:2}}/>
                  <Text style={{ color:'white',fontSize:16,textAlignVertical:'center',fontWeight:'600' }}>OR code</Text>
                </HStack>
              </Box>
              <Box style={{ marginTop:19 }}>
                <HStack>
                  <IconFA name='bookmark-o' size={26} color='white' style={{marginRight:24,marginLeft:5}}/>
                  <Text style={{ color:'white',fontSize:16,textAlignVertical:'center',fontWeight:'600' }}>Saved</Text>
                </HStack>
              </Box>
              <Box style={{ marginTop:15 }}>
                <HStack>
                  <IconI name='ios-menu-outline' size={30} color='white' style={{marginRight:18}}/>
                  <Text style={{ color:'white',fontSize:16,textAlignVertical:'center',fontWeight:'600' }}>Close friends</Text>
                </HStack>
              </Box>
              <Box style={{ marginTop:15 }}>
                <HStack>
                  <IconI name='heart-circle-outline' size={29} color='white' style={{marginRight:20}}/>
                  <Text style={{ color:'white',fontSize:16,textAlignVertical:'center',fontWeight:'600' }}>COVID-19 Information Center</Text>
                </HStack>
              </Box>
          </VStack>
        </Modal.Body>       
      </Modal.Content>
    </>
  )
}
const Profile = () => {
  const [modal, setModal] = useState(false)

  const handleMenu = () => {
    setModal(true)
  }
  return (
    <>
      {/* Menu Model */}
      <Modal isOpen={modal} onClose={() => setModal(false)} size={'full'} _backdrop={{ bg: 'coolGrey.500' }}>
        <ModalContent />
      </Modal>
      {/* Main Content */}
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
          <Pressable onPress={handleMenu}>
            <IconSLI name='menu' color={'white'} size={22} />
          </Pressable>
        </View>
        <ScrollView>

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
            <Pressable style={style.btnadd}>
              <IconMI name='person-add' size={20} color="white" />
            </Pressable>
          </View>

          <View style={style.stories}>
            <View style={{ paddingLeft: 13 }}>
              <Avatar source={require('../images/shoe5.png')} size={16} />
              <Text color={'white'} style={{ fontSize: 11, alignSelf: 'center' }}>Your Prev</Text>
            </View>
            <View style={{ paddingLeft: 13 }}>
              <Avatar source={require('../images/shoe5.png')} size={16} />
              <Text color={'white'} style={{ fontSize: 11, alignSelf: 'center' }}>New </Text>
            </View>
          </View>
        </ScrollView>

      </View>
      {/* TopNaviagtion Profile */}
      <ProfileImage />

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
    marginTop: -1
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
  btnadd: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
    borderRadius: 5,
    width: 43,
    marginLeft: 5,
    alignItems: 'center',
    borderWidth: .5,
    borderColor: 'grey'
  },
  stories: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    marginTop: -8,
    paddingBottom: 10

  }
})
export default Profile