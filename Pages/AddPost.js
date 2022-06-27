import { Hidden, HStack, Image, Input, Text, View, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'react-native-image-picker'
import { Formik } from 'formik'
import * as Yup from "yup";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

const img = "https://via.placeholder.com/100.jpg"
const AddPost = ({ navigation }) => {
  const [image, setImage] = useState('')
  const [userdata,setUserData] = useState(null)
  const validationSchema = Yup.object({
    // postImage: Yup.string().url('Image is required').required('Image is required'),
    caption: Yup.string().max(200, 'text limit reached')

  })

  const user = auth().currentUser
  const getUser = () => {
    const data = firestore().collection('user').where('u_id', '==', user.uid).onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => (
        setUserData({
          name:doc.data().name,
          email:doc.data().email
        })
      ))
    })
  }
  useEffect(() => {
    getUser()
  }, [])
  const handlePost = ({ postImage, caption }) => {
    firestore().collection('posts').add({
      imageUrl: postImage,
      caption: caption,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      likes_by_users: [],
      comments: [],
      user:userdata.name,
      user_uid: user.uid,
      user_email: user.email
    }).then(() => navigation.navigate('top')).catch((error) => {
      console.log(error)
    })
    
  }
  return (

    <>
      <Formik
        initialValues={{
          postImage: '', caption: ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => handlePost(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
          <View style={{ padding: 10, display: 'flex', fleDirection: 'column', flex: 1, backgroundColor: 'black' }}>
            <HStack space={8} alignItems={'center'}>
              <AntDesign name='arrowleft' color={'white'} size={26} onPress={() => navigation.navigate('top')} />
              <Text color={'white'} fontSize={21} flex={1}>New Post</Text>
              <Feather name='check' color={'#0095f6'} size={30} onPress={() => handleSubmit()} />
            </HStack>
            <VStack mt={10}>
              <HStack space={2} borderBottomWidth={.2} borderBottomColor={'#b5b5b444'} padding={3}>

                <Image source={{ uri: image !== '' ? image : img }} alt="post" height={20} width={20} />
                <Input size="md"
                  width={250}
                  borderRadius={'lg'}
                  selectionColor={'white'}
                  placeholder="Write a caption..."
                  onChangeText={handleChange('caption')}
                  onBlur={handleBlur('caption')}
                  values={values.caption}
                  multiline={true}
                  placeholderTextColor={"#b5b5b5"}
                  variant="unstyled"
                  style={{ height: 'auto', color: 'white' }} />

              </HStack>
              {errors.caption && (
                <Text style={{ color: 'red', fontSize: 11, alignSelf: 'center' }}>{errors.caption}</Text>
              )}
              {/* Select Image using setFieldValue to directly set value of postImage with image url*/}

              <TouchableOpacity style={{ marginTop: 10, borderBottomWidth: .2, borderBottomColor: '#b5b5b444', justifyContent: 'center' }} onPress={() => {
                const options = {
                  title: 'post',
                  selectionLimit: 0,

                  storageOptions: {
                    skipBackup: false,
                    path: 'images',
                  },
                }
                ImagePicker.launchImageLibrary(options, res => {
                  if (res.didCancel) {
                    console.log('User cancelled image picker');
                  } else if (res.error) {
                    console.log('ImagePicker Error: ', res.error);
                  }
                  else {
                    setImage(res.assets[0].uri)
                    setFieldValue('postImage', res.assets[0].uri)
                  }
                })

              }}>
                <View padding={3}>
                  <Text color={'#b5b5b5'} fontSize={15.4} mt="-3">Add Photo</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 10, borderBottomWidth: .2, borderBottomColor: '#b5b5b444', justifyContent: 'center' }}>
                <View padding={3}>
                  <Text color={'#b5b5b5'} fontSize={15.4} mt="-3">Add Location</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 10, borderBottomWidth: .2, borderBottomColor: '#b5b5b444', justifyContent: 'center' }}>
                <View padding={3}>
                  <Text color={'#b5b5b5'} fontSize={15.4} mt="-3">Add music</Text>
                </View>
              </TouchableOpacity>
            </VStack>
          </View>
        )}
      </Formik>
   
    </>
  )
}

export default AddPost