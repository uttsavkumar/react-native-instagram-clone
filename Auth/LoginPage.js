import { HStack, Image, Input, Text, View, VStack } from 'native-base'
import React, { useState } from 'react'
import { Pressable } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import auth from '@react-native-firebase/auth';

const LoginPage = ({ navigation }) => {
    const [btn, setBtn] = useState(false)
    const validationSchema = Yup.object({
        user: Yup.string().email('Please enter a v alid email').required('Please enter a valid email'),
        pass: Yup.string().min(8, 'Password less than 8 characters!')
    })

    const handleLogin = ({ user, pass }) => {
        auth().signInWithEmailAndPassword(user, pass).then((user) => {
            console.log(user)
        }).catch((error) => {
            if (error.code === 'auth/wrong-password') {
                console.log('Wrong Password ')
            }
            if (error.code === 'auth/wrong-email' || error.code === 'auth/user-not-found') {
                console.log('Wrong Email / User not found!')
            }
            console.log(error)
        })
    }
    return (
        <>
            <Formik
                initialValues={{
                    user: '',
                    pass: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleLogin(values)}
            >
                {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', padding: 25 }}>
                        <VStack alignItems={'center'} >
                            <Image source={require('../images/logo.png')} alt="logo" style={{ height: 50, width: 178, marginBottom: 30 }} />
                            <Input size="md"
                                selectionColor={'white'}
                                placeholder="Phone number, email or username"
                                bgColor={'#272727'} mb={3}
                                placeholderTextColor={"#b5b5b5"}
                                variant="unstyled"
                                style={{ height: 48, color: 'white' }}
                                value={values.user}
                                onChangeText={handleChange('user')}
                                onBlur={handleBlur('user')}
                            />
                            {errors.user && (
                                <Text color={'red.400'} mt={-3} mb={3} style={{ fontSize: 11, alignSelf: 'flex-start' }}>{errors.user}</Text>

                            )}
                            <Input size="md"
                                selectionColor={'white'}
                                placeholder="Password"
                                bgColor={'#272727'}
                                placeholderTextColor={"#b5b5b5"}
                                variant="unstyled"
                                secureTextEntry={true}
                                style={{ height: 48, color: 'white', }}
                                value={values.pass} mb={3}
                                onChangeText={handleChange('pass')}
                                onBlur={handleBlur('pass')}
                            />

                            {errors.pass && (
                                <Text color={'red.400'} mt={-3} mb={3} style={{ fontSize: 11, alignSelf: 'flex-start' }}>{errors.pass}</Text>

                            )}

                            {
                                values.user && values.pass !== "" ?
                                    isValid ?
                                        <Pressable style={{ marginBottom: 8 }} onPress={handleSubmit}>
                                            <View style={{ height: 48, width: 310, justifyContent: 'center', backgroundColor: '#0095f6', alignItems: 'center' }}>
                                                <Text fontSize={15} color='white'>Log in</Text>
                                            </View>
                                        </Pressable> :
                                        <View style={{ height: 48, marginBottom: 8, width: 310, backgroundColor: '#294a61', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text fontSize={15} color='#a1a1a1'>Log in</Text>
                                        </View>
                                    :
                                    <View style={{ height: 48, marginBottom: 8, width: 310, backgroundColor: '#294a61', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text fontSize={15} color='#a1a1a1'>Log in</Text>
                                    </View>

                            }
                            <HStack>
                                <Text color={'grey'} fontSize={12.4}>Forget your login details? </Text>
                                <Pressable>
                                    <Text color={'white'} fontSize={12.4}>Get help logging in</Text>
                                </Pressable>
                            </HStack>

                            <View style={{ position: 'absolute', bottom: -210, }}>
                                <HStack>
                                    <Text color={'grey'} fontSize={13}>Don't have an account? </Text>
                                    <Pressable onPress={() => navigation.navigate('signup')}>
                                        <Text color={'white'} fontSize={13}>Sign up. </Text>
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

export default LoginPage
// ...(btn === false ? { backgroundColor: '#294a61' } : { backgroundColor: '#0095f6' })