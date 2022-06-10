import { Avatar, Text, View } from 'native-base'
import React from 'react'

const Activity = () => {
  return (
    <>
      <View style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'black', padding: 15, }}>
        <Text fontSize={22} fontWeight='bold' color={'white'} ml={2} >Activity</Text>
        <View style={{ flexDirection: 'row' }}>
          <Avatar source={require('../images/shoe5.png')} size={10} />
          <View>
            <Text style={{ color:'white',fontWeight:'700',fontSize:14 }}>Follow Request</Text>
            <Text style={{ color:'grey',fontSize:14,marginTop:-2 }}>Approve or Ignore Request</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default Activity   