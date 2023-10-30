import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register(){
    const navigation = useNavigation();
    const [userNome, setNome] = useState('');
    const [userDt_Nasc, setDt_Nasc] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userConfPassword, setConfPassword] = useState('');

function newUSer(){
    if (userNome === '' || userDt_Nasc ==='' || userEmail ==='' || userPassword === '' || userConfPassword ===''){
        alert("Todos os campos devem ser preenchidos");
        return;
    }
    if (userPassword !==userConfPassword){
        alert("A senha e a confirmação não são iguais");
        return;
    } else {
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then ((USerCredential) => {
            const user = USerCredential.user;
            alert("O usuário " + userEmail +" foi criado. Faça o login");

            const data = {
                id: userEmail,
                nome: userNome,
                data_nascimento: userDt_Nasc
              }
            AsyncStorage.setItem(userEmail, JSON.stringify(data));

            navigation.navigate('Signin');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
            navigation.navigate('Register');
        })
    }
}


    return(
        <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS =="ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
        > 
        <ScrollView>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}> Bem-vindo(a) </Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerform}>
                <Text style={styles.title}> Nome </Text>
                <TextInput style={styles.input}
                placeholder="Digite seu nome..."
                value={userNome}
                onChangeText={setNome}
                />

                <Text style={styles.title}> Data de Nascimento </Text>
                <TextInput style={styles.input}
                placeholder="Digite sua data de nascimento..."
                value={userDt_Nasc}
                onChangeText={setDt_Nasc}
                />

                <Text style={styles.title}> Email </Text>
                <TextInput style={styles.input}
                placeholder="Digite um e-mail..."
                keyboardType='email-address'
                autoCapitalize='none'
                autoComplete='email'
                value={userEmail}
                onChangeText={setEmail}
                />

                <Text style={styles.title}> Senha </Text>
                <TextInput style={styles.input}
                placeholder="Digite sua senha..."
                value={userPassword}
                onChangeText={setPassword}
                />

                <Text style={styles.title}> Confirme senha </Text>
                <TextInput style={styles.input}
                placeholder="Confirme sua senha..."
                value={userConfPassword}
                onChangeText={setConfPassword}
                />                

                <TouchableOpacity style={styles.button} onPress={newUSer}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </Animatable.View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles=StyleSheet.create({
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
        fontWeight:'bold',
        color: '#fff',
    },
    containerform:{
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
        backgroundColor:'#00CC93',
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
    }
})