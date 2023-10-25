import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}> 
        <View style={styles.containerlogo}>
            {/* <Image source={require('../../assets/oie_transparent.png')}
            style={{widht: '100%'}}
            resizeMode="contain"/> */}
        </View>
        <Animatable.View delay={600}animation="fadeInUp"style={styles.containerform}>
            <Text style={styles.title}> Controle de suas contas na palma das suas mãos! </Text>
            <Text style={styles.text}> Faça o login para começar</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.buttontext}> Logar </Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
    );
}

const styles= StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#00CC93',
    },
    containerlogo: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#00CC93',
        justifyContent: 'center',
    },
    containerform: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    }, 
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#A1A1A1',
        fontSize: 18,
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
    buttontext: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
})