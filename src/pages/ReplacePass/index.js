import React from 'react';
import {useState} from 'react';
import {View,Text,StyleSheet, TextInput, Pressable} from "react-native"; 
import {useNavigation} from '@react-navigation/native';
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebaseConnection';

export default function ReplacePass() {
    const navigation = useNavigation();
    const [userEmail, setEmail] = useState('');

    function ReplacePass() {
        if (userEmail !=='' ) {
            sendPasswordResetEmail(auth,userEmail)
            .then(() => {
                alert("Foi enviado um e-mail para: " + userEmail + ". Verifique a sua caixa de e-mail.");     
                navigation.navigate('Signin');
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert("Ops! Algo deu errado " +errorMessage + ". Tente novamente. ");
                return;
            })
        } else{
            alert("Informe e-mail cadastrado")
        }
    }
return(

    <View style={styles.containerRecup}>

    <View style={styles.voltar}>
        <Ionicons name="ios-arrow-back" size={24} color="#52575D" onPress={() => navigation.navigate('Signin')}></Ionicons>
    </View>


        <Text style={styles.formTitle}>Redefinição de senha</Text>
            <TextInput style={styles.inputRecup}
            placeholder="Digite e-mail cadastrado..."
            keyboardType='email-address'
            autoCapitalize='none'
            autoComplete='email'
            value={userEmail}
            onChangeText={setEmail}
            />
        <Pressable style={styles.button} onPress={ReplacePass}>
            <Text style={styles.buttonText}>Enviar</Text>
         </Pressable>
    </View>
)
}

const styles=StyleSheet.create({
formTitle: {
    fontSize: 50,
    marginTop: 28,
    color: '#00CC93',
    fontWeight: 'bold'
},
containerRecup:{
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    // justifyContent: 'center'
},
inputRecup: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
},
button: {
    backgroundColor:'#00CC93',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 14,
    alignItems: 'center',
},
voltar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
    marginHorizontal: 16,
},
})