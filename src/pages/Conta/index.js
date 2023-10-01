import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'


export default function Conta(){
    const navigation = useNavigation();

    return(
       <View style={styles.container}> 
            <Text>Dados Pessoais</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttontext}> Voltar </Text>
            </TouchableOpacity>
       </View>
       
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ecf0f1',
        alignItems: 'center',
        fontSize: 24,
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#00CC93',
        borderRadius: 50,
        paddingVertical: 10,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})