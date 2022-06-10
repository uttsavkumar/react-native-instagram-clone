import { Text, View, Input, Image, Pressable, Modal, ScrollView, Avatar, } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list';
import IconA from 'react-native-vector-icons/AntDesign'
import IconF from 'react-native-vector-icons/Feather'
import IconI from 'react-native-vector-icons/Ionicons'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import image from '../Json/image'

//SinglePost Model
const ModalContent = ({id}) => {
  return (
    <>
      <Modal.Content style={{ borderRadius: 15, backgroundColor: 'white' }}>
        <Modal.Header style={{ backgroundColor: '#272727', borderBottomWidth: 0 }} height={55}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Avatar source={require('../images/shoe5.png')} width={29} height={29}></Avatar>
            <Text style={{ color: 'white', marginLeft: 14, fontSize: 13.3, fontWeight: '700', marginTop: 1.5 }}>{id.name}</Text>
          </View>
        </Modal.Header>
        <Modal.Body style={{ padding: 0, margin: 0 }}>
          <Image source={{ uri:id.url+id.id }} alt="Shoe" height={300} style={{ padding: 0, margin: 0 }} />
        </Modal.Body>
        <Modal.Header style={{ backgroundColor: '#272727', borderBottomWidth: 0 }} height={45}>
          <View style={{ display: 'flex', flexDirection: 'row', height: 45, marginTop: -7 }}>
            <IconF name='heart' size={24} color='white' style={{ marginLeft: 20, flexGrow: .295 }} />
            <IconI name='person-circle-outline' size={28} color='white' style={{ flexGrow: .295, marginTop: -2.5 }} />
            <IconF name='send' size={22} color='white' style={{ flexGrow: .295 }} />
            <IconMCI name='dots-vertical' size={23} color='white' />
          </View>
        </Modal.Header>
      </Modal.Content>

    </>
  )
}

const Search = ({ navigation }) => {
  const [modal, setModal] = useState(false)
  const [id,setId] = useState('')
  const handleLongPress = (item) => {
      setId(item)
      modal === false ?
      setModal(true)
      :
      setModal(false)

  }

  return (
    <>
      <Modal isOpen={modal} onClose={handleLongPress} size={'xl'} _backdrop={{ bg: 'coolGrey.500' }}>
        <ModalContent id={id}/>
      </Modal>
      <View style={style.container}>

        <View style={style.header}>
          <View style={style.search}>
            <Input size="lg" borderRadius={'lg'} selectionColor={'white'} placeholder="Search" bgColor={'#272727'} placeholderTextColor={"#b5b5b5"} variant="unstyled"
              style={{ height: 36, color: 'white', }} InputLeftElement={<IconA name="search1" size={18} color="#b5b5b5" style={{ paddingLeft: 12 }} />} />
          </View>
        </View>

        <View style={style.content}>
          <MasonryList
            data={image}
            renderItem={({ item, key }) => (
              <>
                <Pressable onLongPress={() => handleLongPress(item)} key={key} >
                  <View style={style.post}>
                    {item.id % 7 === 0 ? <Image source={{ uri: item.url + item.id }} alt="shoe" style={{ margin: 1, height: 262 }} /> : <Image source={{ uri: item.url + item.id }} style={{ margin: 1, height: 130 }} alt="shoe" />}
                  </View>
                </Pressable>
              </>
            )}
            numColumns={3}
            keyExtractor={(item, index) => index}
            
            
          />
        </View>
      </View>
    </>
  )
}

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
    flexDirection: 'column',
    flex: 1
  },
  content: {
    backgroundColor: 'black',
    flex: 1
  },
  post: {
    width: 118.5,
  },

})
export default Search