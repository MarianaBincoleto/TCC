import React from 'react'
import {View, StyleSheet, Text,ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Help_Page(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}> 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D" onPress={() => navigation.navigate('Home')}></Ionicons>
                </View>

                <Text style={styles.containerText}>Está precisando de ajuda? </Text>
                <Text style={styles.containerText}> Entre em contato: </Text>
                <Text style={styles.containerEmail}> mariana_bincoleto@hotmail.com</Text>
                <Text style={styles.containerEmail2}> gabriela.martins@etec.sp.gov.br</Text>
                <Text style={styles.containerText2}> WhatsApp ou ligações: </Text>
                <Text style={styles.telefone1}> (18) 99759-4735 - Mariana</Text>
                <Text style={styles.telefone2}> (14) 99789-4139 - Gabriela</Text>

            </ScrollView>
        </SafeAreaView>
       
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16,
    },
    containerText: {
        textAlign: "center",
        fontSize: 25,
        top: 20,
    },
    containerText2: {
        textAlign: "center",
        fontSize: 25,
        top: 140,
    },
    containerEmail: {
        fontSize: 20,
        top: 60,
        textAlign: 'center'
    },
    containerEmail2: {
        fontSize: 20,
        top: 100,
        textAlign: 'center'
    },
    telefone1: {
        textAlign: 'center',
        top: 180,
        fontSize: 20,
    },
    telefone2: {
        textAlign: 'center',
        top: 220,
        fontSize: 20,
    }

})