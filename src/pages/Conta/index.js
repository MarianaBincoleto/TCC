import React, { useEffect } from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState } from 'react';


import { SafeAreaView } from 'react-native-safe-area-context';

export default function Conta(){
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [dataNasc, setDataNasc] = useState('');

    async function handleFetchList() {
        // const response = await AsyncStorage.getItem('@financialProjection:adomesticApp');
        const userEmail = await AsyncStorage.getItem('user');
        console.log('socorro',userEmail);
        const user = await AsyncStorage.getItem(userEmail);
        setEmail(userEmail);
    
        const response = await AsyncStorage.getItem(`@financialProjection:${userEmail}`);
        
        if (user) {
          const userData = JSON.parse(user)
          setUserName(userData.nome);
          setEmail(userEmail);
          setDataNasc(userData.data_nascimento)
          console.log(userData);
        }
    
      }

      useEffect(() => {
        handleFetchList()
      })
    
    return(
       <SafeAreaView style={styles.container}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D" onPress={() => navigation.navigate('Home')}></Ionicons>
                </View>

                <View style={{alignSelf:"center"}}>
                    <View style={styles.profileImage}>
                        <Image source={require('../../assets/arvore.jpg')}></Image>
                    </View>      

                    <View style={styles.add}>
                        <Ionicons name="ios-add" size={60} color="#DFD8C8" style={{marginTop: 8, marginLeft: 5}}></Ionicons>
                    </View>  
                    <View> 
                        <Text style={styles.dadosPessoaisTitle}>Dados Pessoais: </Text> 
                        <Text style={styles.dadosPessoais}>Nome: {userName}</Text> 
                        <Text style={styles.dadosPessoais}>Email: {email}</Text>
                        <Text style={styles.dadosPessoais}>Data de Nascimento: {dataNasc.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')}</Text> 
                    </View>
                </View>

                

            </ScrollView>
       </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16,
    },
    profileImage:{
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        alignItems: "center"
    },
    dadosPessoais: {
        fontSize: 20,
        // top: 20,
        marginTop: 20,
        height: 50,
    },
    dadosPessoaisTitle: {
        fontSize: 25,

    }
})