import { Text, View, Input, Image, Pressable, Modal, ScrollView, Avatar } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import IconA from 'react-native-vector-icons/AntDesign'
import IconF from 'react-native-vector-icons/Feather'
import IconI from 'react-native-vector-icons/Ionicons'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'

const style = StyleSheet.create({
  search: {
    padding: 10,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 5
  },
  header: {
    height: 62,
    backgroundColor: 'black'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'black'
  },
  col1: {
    display: 'flex',
    flexDirection: 'column'
  },
  post: {
    marginTop: 1.5,
    height: 120,
    width: 118.5,
  },
  post2: {
    marginTop: 1.5,
    backgroundColor: 'red',
    height: 120,
    width: 118.5,
    marginLeft: 1.5
  },
  post3: {
    marginTop: 1.5,
    backgroundColor: 'red',
    height: 241,
    width: 118.5,
    marginLeft: 1.5
  },
  post13: {
    marginTop: 1.5,
    backgroundColor: 'red',
    height: 241,
    width: 118.5,
  },
  col2: {
    display: 'flex',
    flexDirection: 'column'
  },
  col3: {
    display: 'flex',
    flexDirection: 'column'
  }
})

//SinglePost Model
const ModalContent = () => {
  return (
    <>
      <Modal.Content style={{ borderRadius: 15,backgroundColor:'white' }}>
        <Modal.Header style={{ backgroundColor: '#272727',borderBottomWidth:0 }} height={55}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar source={require('../images/shoe5.png')} width={29} height={29}></Avatar>
            <Text style={{ color: 'white', marginLeft: 14, fontSize: 13.3, fontWeight: '700', marginTop: 1.5 }}>forgoodCode</Text>
          </View>
        </Modal.Header>
        <Modal.Body style={{ padding: 0, margin: 0 }}>
          <Image source={require('../images/search1.jpg')} alt="Shoe" height={300} style={{padding:0,margin:0}}/>
        </Modal.Body>
        <Modal.Header style={{ backgroundColor: '#272727',borderBottomWidth:0 }} height={45}>
          <View style={{ display: 'flex', flexDirection: 'row', height: 45, marginTop: -7 }}>
            <IconF name='heart' size={24} color='white' style={{ marginLeft: 20, flexGrow: .295 }} />
            <IconI name='person-circle-outline' size={28} color='white' style={{ flexGrow: .295, marginTop: -2.5 }} />
            <IconF name='send' size={22} color='white' style={{ flexGrow: .295 }} />
            <IconMCI name='dots-vertical' size={23} color='white'  />
          </View>
        </Modal.Header>
      </Modal.Content>

    </>
  )
}

const Search = ({navigation}) => {
  const [modal, setModal] = useState(false)

  const handleLongPress = () => {
    modal === false ?
      setModal(true)
      :
      setModal(false)
  }
  return (
    <>
      <Modal isOpen={modal} onClose={handleLongPress} size={'xl'} _backdrop={{ bg: 'coolGrey.500' }}>
        <ModalContent />
      </Modal>
      <View style={style.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View style={style.search}>
            <Input size="lg" placeholder="Search" bgColor={'#272727'} placeholderTextColor={"#b5b5b5"} variant="unstyled"
              style={{ height: 36, color: 'white', }} InputLeftElement={<IconA name="search1" size={18} color="#b5b5b5" style={{ paddingLeft: 12 }} />} />
          </View>
        </View>
        <View style={style.content}>
          {/* COL1  post13 height:241 post1 height:120 */}
          <View style={style.col1}>

            <Pressable onPress={console.log('lasjbd')} onLongPress={() => handleLongPress()} onPressOut={() => setModal(false)} delayLongPress={-300}>
              <View style={style.post}>
                <Image source={require('../images/search1.jpg')} alt="shoe" height={120} />
              </View>
            </Pressable>
            <Pressable onLongPress={() => handleLongPress()} onPressOut={() => setModal(false)} delayLongPress={-300}>
              <View style={style.post13}>
                <Image source={require('../images/search1.jpg')} alt="shoe" height={241} />
              </View>
            </Pressable>
            <Pressable onPress={console.log('lasjbd')} onLongPress={() => handleLongPress()} onPressOut={() => setModal(false)} delayLongPress={-300}>
              <View style={style.post}>
                <Image source={require('../images/search1.jpg')} alt="shoe" height={120} />
              </View>
            </Pressable>
            <Pressable onPress={console.log('lasjbd')} onLongPress={() => handleLongPress()} onPressOut={() => setModal(false)} delayLongPress={-300}>
              <View style={style.post}>
                <Image source={require('../images/search1.jpg')} alt="shoe" height={120} />
              </View>
            </Pressable>
                
          </View>
          {/* COL2 */}
          <View style={style.col2}>

            <View style={style.post2}>
            </View>
            <View style={style.post2}>
            </View>
            <View style={style.post2}>
            </View>
            <View style={style.post2}>
            </View>
            <View style={style.post2}>
            </View>
            <View style={style.post2}>
            </View>
            

          </View>
          {/* COL3 */}
          <View style={style.col3}>

            <View style={style.post3}>
            </View>

          </View>

        </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Search