import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function Signin() {
    const navigation = useNavigation();
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    function userLogin() {
        // navigation.navigate('Home');

        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then((userCredential) => {
                AsyncStorage.setItem('user', userEmail);
                const user = userCredential.user;
                alert('Login efetuado...')
                console.log(user);
                navigation.navigate('Home');
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }

    // useEffect(() => {
    //     setEmail('jamerson22@gmail.com');
    //     setPassword('123456');
    // }, []) // NÃO ESQUEMA DE REMOVER O USE EFFECT 
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}> Bem-vindo(a) </Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerform}>
                <Text style={styles.title}> Email </Text>
                <TextInput style={styles.input}
                    placeholder="Digite um e-mail..."
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoComplete='email'
                    value={userEmail}
                    onChangeText={setEmail}
                />
                <View>
                    <Text style={styles.title}> Senha </Text>
                    <View style={styles.inputPassEntrar}>
                        <TextInput style={styles.inputTextEntrar}
                            placeholder="Digite sua senha..."
                            value={userPassword}
                            onChangeText={setPassword}
                            secureTextEntry={hidePassword}
                        />
                        <TouchableOpacity style={styles.olhoEntrar} onPress={() => setHidePassword(!hidePassword)}>
                            <Ionicons name='eye' color='#00CC93' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={userLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('ReplacePass')}>
                    <Text style={styles.registerText}>Recupere sua senha</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00CC93',
    },
    containerHeader: {
        marginTop: '18%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    containerform: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#00CC93',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#A1A1A1',
    },
    inputTextEntrar: {
        borderBottomWidth: 1,
        height: 50,
        marginBottom: 12,
        fontSize: 16,
        width: '98%',
    },
    olhoEntrar: {
        width: '20%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputPassEntrar: {
        flexDirection: 'row',
        width: '90%',
        height: 50,
        alignItems: 'center',
    },
})