import { Image, View } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'


const ProfileTags = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 1.5 }}>
          <View style={{ backgroundColor: 'white' }}>
            <Image alt='img' source={require('../images/img.jpg')} height={130} width={119} />
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <Image alt='img' source={require('../images/search1.jpg')} height={130} width={119} />
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <Image alt='img' source={require('../images/shoe5.png')} height={130} width={119} />
          </View>
        </View>
      </View>
    </>
  )
}

export default ProfileTags