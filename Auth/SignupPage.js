import { HStack, Image, Input, Text, View, VStack } from 'native-base'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const SignupPage = ({ navigation }) => {
    const [btn, setBtn] = useState(false)
    const validationSchema = Yup.object({
        user: Yup.string().email('Enter a valid email').required('Enter a valid email'),
        pass: Yup.string().min(8, 'Password less than 8 characters!')
    })

    const handleSignup = ({ name, user, pass }) => {
        auth().createUserWithEmailAndPassword(user, pass).then((res) => {
            firestore().collection('user').add({
                name: name,
                email: user,
                u_id: res.user.uid
            }).then(() => {
                navigation.navigate('top')
            })
        }).catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                alert('Already have an account!')
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                alert('Email is not avlid!')
            }

            console.log(error)
        })

    }

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    user: '',
                    pass: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSignup(values)}
            >
                {({ handleBlur, handleSubmit, handleChange, values, errors, isValid }) => (
                    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', padding: 25 }}>
                        <VStack alignItems={'center'} >
                            <Image source={require('../images/logo.png')} alt="logo" style={{ height: 50, width: 178, marginBottom: 30 }} />
                            <Input size="md"
                                selectionColor={'white'}
                                placeholder="Name"
                                bgColor={'#272727'} mb={3}
                                placeholderTextColor={"#b5b5b5"}
                                variant="unstyled"
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                style={{ height: 48, color: 'white' }} />
                            <Input size="md"
                                selectionColor={'white'}
                                placeholder="Phone number, email or username"
                                bgColor={'#272727'} mb={3}
                                placeholderTextColor={"#b5b5b5"}
                                variant="unstyled"
                                value={values.user}
                                onChangeText={handleChange('user')}
                                onBlur={handleBlur('user')}
                                style={{ height: 48, color: 'white' }} />
                            {errors.user && (
                                <Text color={'red.400'} mt={-3} mb={3} style={{ fontSize: 11, alignSelf: 'flex-start' }}>{errors.user}</Text>

                            )}
                            <Input size="md"
                                selectionColor={'white'}
                                placeholder="Password"
                                bgColor={'#272727'}
                                placeholderTextColor={"#b5b5b5"} mb={3}
                                variant="unstyled"
                                secureTextEntry={true}
                                value={values.pass}
                                onChangeText={handleChange('pass')}
                                onBlur={handleBlur('pass')}
                                style={{ height: 48, color: 'white', }} />

                            {errors.pass && (
                                <Text color={'red.400'} mt={-3} mb={3} style={{ fontSize: 11, alignSelf: 'flex-start' }}>{errors.pass}</Text>

                            )}
                            {values.pass && values.user && values.name !== "" ?
                                isValid ? <Pressable style={{ marginBottom: 8 }} onPress={handleSubmit}>
                                    <View style={{ height: 48, color: 'white', width: 310, backgroundColor: '#0095f6', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text fontSize={15} color='white'>Sign up</Text>
                                    </View>
                                </Pressable>
                                    :
                                    <View style={{ height: 48, backgroundColor: '#294a61', width: 310, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text fontSize={15} color='grey'>Sign up</Text>
                                    </View>
                                :
                                <View style={{ height: 48, backgroundColor: '#294a61', width: 310, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text fontSize={15} color='grey'>Sign up</Text>
                                </View>

                            }


                            <View style={{ position: 'absolute', bottom: -190, }}>
                                <HStack>
                                    <Text color={'grey'} fontSize={13}>Already have an account? </Text>
                                    <Pressable onPress={() => navigation.navigate('login')}>
                                        <Text color={'white'} fontSize={13}>Log in. </Text>
                                    </Pressable>
                                </HStack>
                            </View>
                        </VStack>
                    </View>
                )}
            </Formik>
        </>
    )
}

export default SignupPage
// 