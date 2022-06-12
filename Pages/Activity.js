import { Avatar, Button, Text, View } from 'native-base'
import React from 'react'

const Activity = () => {
  return (
    <>
      <View style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'black', padding: 15, }}>
        <Text fontSize={22} fontWeight='bold' color={'white'} ml={2} >Activity</Text>
        <View style={{ flexDirection: 'row', paddingTop: 27, alignItems: 'center' }}>
          <Avatar source={require('../images/shoe5.png')} size={12} />
          <View style={{ marginLeft: 17 }}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>Follow Request</Text>
            <Text style={{ color: 'grey', fontSize: 14, marginTop: -2 }}>Approve or Ignore Request</Text>
          </View>
        </View>


        <View style={{ marginTop: 20 }}>
          <Text fontSize={14} fontWeight='bold' color={'white'} ml={2} >This Week</Text>

          <View style={{ flexDirection: 'row', paddingTop: 17, alignItems: 'center' }}>
            <Avatar source={require('../images/shoe5.png')} size={12} />
            <View style={{ marginLeft: 17, width: 110 }}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>newuser </Text>
              <Text style={{ color: 'grey', fontSize: 14, marginTop: -2 }}>requested to follow you. 2 d</Text>
            </View>
            <View style={{ marginLeft: 17, flexDirection: 'row' }}>
              <Button size="xs" height={7} variant="subtle" style={{ backgroundColor: '#0095f6', marginRight: 3 }}>
                <Text color={'white'} mt='-1'>Confirm</Text>
              </Button>
              <Button size="xs" height={7} style={{ color: 'white' }} variant="outline" colorScheme="light">
                <Text color={'white'} mt='-1.5'>Delete</Text>
              </Button>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 17, alignItems: 'center' }}>
            <Avatar source={require('../images/shoe5.png')} size={12} />
            <View style={{ marginLeft: 17, width: 110 }}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>newuser </Text>
              <Text style={{ color: 'grey', fontSize: 14, marginTop: -2 }}>requested to follow you. 2 d</Text>
            </View>
            <View style={{ marginLeft: 17, flexDirection: 'row' }}>
              <Button size="xs" height={7} variant="subtle" style={{ backgroundColor: '#0095f6', marginRight: 3 }}>
                <Text color={'white'} mt='-1'>Confirm</Text>
              </Button>
              <Button size="xs" height={7} style={{ color: 'white' }} variant="outline" colorScheme="light">
                <Text color={'white'} mt='-1.5'>Delete</Text>
              </Button>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 17, alignItems: 'center' }}>
            <Avatar source={require('../images/shoe5.png')} size={12} />
            <View style={{ marginLeft: 17, width: 110 }}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>newuser </Text>
              <Text style={{ color: 'grey', fontSize: 14, marginTop: -2 }}>requested to follow you. 2 d</Text>
            </View>
            <View style={{ marginLeft: 17, flexDirection: 'row' }}>
              <Button size="xs" height={7} variant="subtle" style={{ backgroundColor: '#0095f6', marginRight: 3 }}>
                <Text color={'white'} mt='-1'>Confirm</Text>
              </Button>
              <Button size="xs" height={7} style={{ color: 'white' }} variant="outline" colorScheme="light">
                <Text color={'white'} mt='-1.5'>Delete</Text>
              </Button>
            </View>
          </View>

        </View>
        <View style={{ marginTop: 20 }}>
          <Text fontSize={14} fontWeight='bold' color={'white'} ml={2} >This Month</Text>

          <View style={{ flexDirection: 'row', paddingTop: 27, alignItems: 'center' }}>
            <Avatar source={require('../images/shoe5.png')} size={12} />
            <View style={{ marginLeft: 17,flexDirection:'row' }}>
              <Text style={{ color: 'white', fontWeight: '500', fontSize: 13,flexShrink:1 }} >new, new, dhritesh, yash and 7 others started
               following you.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 17, alignItems: 'center' }}>
            <Avatar source={require('../images/shoe5.png')} size={12} />
            <View style={{ marginLeft: 17, width: 110 }}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>newuser </Text>
              <Text style={{ color: 'grey', fontSize: 14, marginTop: -2 }}>requested to follow you. 2 d</Text>
            </View>
            <View style={{ marginLeft: 17, flexDirection: 'row' }}>
              <Button size="xs" height={7} variant="subtle" style={{ backgroundColor: '#0095f6', marginRight: 3 }}>
                <Text color={'white'} mt='-1'>Confirm</Text>
              </Button>
              <Button size="xs" height={7} style={{ color: 'white' }} variant="outline" colorScheme="light">
                <Text color={'white'} mt='-1.5'>Delete</Text>
              </Button>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 17, alignItems: 'center' }}>
            <Avatar source={require('../images/shoe5.png')} size={12} />
            <View style={{ marginLeft: 17, width: 110 }}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }}>newuser </Text>
              <Text style={{ color: 'grey', fontSize: 14, marginTop: -2 }}>requested to follow you. 2 d</Text>
            </View>
            <View style={{ marginLeft: 17, flexDirection: 'row' }}>
              <Button size="xs" height={7} variant="subtle" style={{ backgroundColor: '#0095f6', marginRight: 3 }}>
                <Text color={'white'} mt='-1'>Confirm</Text>
              </Button>
              <Button size="xs" height={7} style={{ color: 'white' }} variant="outline" colorScheme="light">
                <Text color={'white'} mt='-1.5'>Delete</Text>
              </Button>
            </View>
          </View>

        </View>


      </View>
    </>
  )
}

export default Activity   