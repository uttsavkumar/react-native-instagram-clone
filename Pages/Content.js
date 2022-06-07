import { Avatar, Image, Input, Pressable, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconF from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconI from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'

const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    avatardiv: {
        width: 38, height: 38, borderWidth: 1.5, borderColor: '#DD2A7B', borderRadius: 40,
    },
    avatar: {
        backgroundColor: 'grey', width: 32, height: 32, marginLeft: 1.5, marginBottom: 3, marginTop: 1
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'transparent'
    },
    send: {
        marginLeft: 14,
        flexGrow: 1
    },
    content:{
        display:'flex',
        flexDirection:'row',
    }
})
const Content = () => {
   
    return (
        <>
            <View style={{ marginBottom: 60 }}>
                <View style={style.container}>
                    <View style={style.header}>
                        <View style={style.avatardiv}>
                            <Avatar style={style.avatar}>
                                <Image alt="story" source={require('../images/img.jpg')} style={{ height: 32, width: 32, borderRadius: 30 }} />
                            </Avatar>
                        </View>
                        <Text style={{ color: 'white', fontSize: 12.8, fontWeight: '700', textAlignVertical: 'center', marginLeft: 10, flexGrow: 1 }}>forgoodcode</Text>
                        <IconMCI name='dots-vertical' size={20} color="white" style={{ textAlignVertical: 'center' }} />
                    </View>
                    {/* <ScrollView horizontal> */}
                       <Pressable>
                       <View style={style.content} >
                            <Image source={require('../images/img.jpg')} alt="sd" height={200}  />
                         </View >
                       </Pressable>
                    {/* </ScrollView> */}
                    <View style={style.action}>
                        <IconF name='heart' size={23} color="white" style={{ marginLeft: 4 }} />
                        <IconI name='ios-chatbubble-outline' size={23} color="white" style={{ marginLeft: 15 }} />
                        <IconF name='send' size={23} color="white" style={style.send} />
                        <IconFA name='bookmark-o' size={23} color="white" style={{ marginRight: 5 }} />
                    </View>
                    <View style={style.footer}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginLeft: 13 }}>
                            <Avatar style={{ height: 19, width: 19, marginTop: 3 }} />
                            <Text style={{ color: 'white', fontSize: 12.9, marginLeft: 10 }}>Liked by </Text>
                            <Text style={{ color: 'white', fontSize: 12.9, fontWeight: '700' }}>_igris and 8371 others</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 13 }}>
                            <Text style={{ color: 'white', fontSize: 12.9, marginLeft: 5, fontWeight: '700' }}>forgoodcode</Text>
                            <Text style={{ color: 'white', fontSize: 12.5, marginLeft: 5 }}>We have the best ...</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginLeft: 13 }}>
                            <Text style={{ color: 'grey', fontSize: 12.3, marginLeft: 5, fontWeight: '300' }}>View all 200 comments</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: -2, marginLeft: 13 }}>
                            <Text style={{ color: '#c6c6c6f0', fontSize: 10, marginLeft: 5, fontWeight: '300' }}>10 minutes ago</Text>
                        </View>
                    </View>
                </View>
                <View style={style.container}>
                    <View style={style.header}>
                        <View style={style.avatardiv}>
                            <Avatar style={style.avatar}>
                                <Image alt="story" source={require('../images/img.jpg')} style={{ height: 32, width: 32, borderRadius: 30 }} />
                            </Avatar>
                        </View>
                        <Text style={{ color: 'white', fontSize: 12.8, fontWeight: '700', textAlignVertical: 'center', marginLeft: 10, flexGrow: 1 }}>forgoodcode</Text>
                        <IconMCI name='dots-vertical' size={20} color="white" style={{ textAlignVertical: 'center' }} />
                    </View>
                    <View style={style.content}>
                        <Image source={require('../images/shoe5.png')} alt="sd" height={400} />
                    </View>
                    <View style={style.action}>
                        <IconF name='heart' size={23} color="white" style={{ marginLeft: 4 }} />
                        <IconI name='ios-chatbubble-outline' size={23} color="white" style={{ marginLeft: 15 }} />
                        <IconF name='send' size={23} color="white" style={style.send} />
                        <IconFA name='bookmark-o' size={23} color="white" style={{ marginRight: 5 }} />
                    </View>
                    <View style={style.footer}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginLeft: 13 }}>
                            <Avatar style={{ height: 19, width: 19, marginTop: 3 }} />
                            <Text style={{ color: 'white', fontSize: 12.9, marginLeft: 10 }}>Liked by </Text>
                            <Text style={{ color: 'white', fontSize: 12.9, fontWeight: '700' }}>_igris and 8371 others</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 13 }}>
                            <Text style={{ color: 'white', fontSize: 12.9, marginLeft: 5, fontWeight: '700' }}>forgoodcode</Text>
                            <Text style={{ color: 'white', fontSize: 12.5, marginLeft: 5 }}>We have the best ...</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginLeft: 13 }}>
                            <Text style={{ color: 'grey', fontSize: 12.3, marginLeft: 5, fontWeight: '300' }}>View all 200 comments</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: -2, marginLeft: 13 }}>
                            <Text style={{ color: '#c6c6c6f0', fontSize: 10, marginLeft: 5, fontWeight: '300' }}>10 minutes ago</Text>
                        </View>
                    </View>
                </View>
                <View style={style.container}>
                    <View style={style.header}>
                        <View style={style.avatardiv}>
                            <Avatar style={style.avatar}>
                                <Image alt="story" source={require('../images/img.jpg')} style={{ height: 32, width: 32, borderRadius: 30 }} />
                            </Avatar>
                        </View>
                        <Text style={{ color: 'white', fontSize: 12.8, fontWeight: '700', textAlignVertical: 'center', marginLeft: 10, flexGrow: 1 }}>forgoodcode</Text>
                        <IconMCI name='dots-vertical' size={20} color="white" style={{ textAlignVertical: 'center' }} />
                    </View>
                    <View style={style.content}>
                        <Image source={require('../images/img.jpg')} alt="sd" height={400} />
                    </View>
                    <View style={style.action}>
                        <IconF name='heart' size={23} color="white" style={{ marginLeft: 4 }} />
                        <IconI name='ios-chatbubble-outline' size={23} color="white" style={{ marginLeft: 15 }} />
                        <IconF name='send' size={23} color="white" style={style.send} />
                        <IconFA name='bookmark-o' size={23} color="white" style={{ marginRight: 5 }} />
                    </View>
                    <View style={style.footer}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginLeft: 13 }}>
                            <Avatar style={{ height: 19, width: 19, marginTop: 3 }} />
                            <Text style={{ color: 'white', fontSize: 12.9, marginLeft: 10 }}>Liked by </Text>
                            <Text style={{ color: 'white', fontSize: 12.9, fontWeight: '700' }}>_igris and 8371 others</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 5, marginLeft: 13 }}>
                            <Text style={{ color: 'white', fontSize: 12.9, marginLeft: 5, fontWeight: '700' }}>forgoodcode</Text>
                            <Text style={{ color: 'white', fontSize: 12.5, marginLeft: 5 }}>We have the best ...</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 1, marginLeft: 13 }}>
                            <Text style={{ color: 'grey', fontSize: 12.3, marginLeft: 5, fontWeight: '300' }}>View all 200 comments</Text>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: -2, marginLeft: 13 }}>
                            <Text style={{ color: '#c6c6c6f0', fontSize: 10, marginLeft: 5, fontWeight: '300' }}>10 minutes ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Content