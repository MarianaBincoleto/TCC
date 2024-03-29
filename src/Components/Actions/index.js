import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

export default function Actions(){
    const navigation = useNavigation();
return(
    <ScrollView style={styles.container} horizontal= {true} showsHorizontalScrollIndicator={false}> 

    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Carteira')}>
        <View style={styles.areaButton}>
        <AntDesign name="creditcard" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Conta')}>
        <View style={styles.areaButton}>
        <AntDesign name="setting" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Help_page')}>
        <View style={styles.areaButton}>
        <Feather name="help-circle" size={24} color="black" />
        </View>
        <Text style={styles.labelButton}>Ajuda</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Welcome')}>
        <View style={styles.areaButton}>
        <AntDesign name="logout" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Sair</Text>
    </TouchableOpacity>

    </ScrollView>
);
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom:14,
        marginTop: 18,
        paddingEnd: 14, 
        paddingStart: 14,
    },
    actionButton:{
        alignItems: 'center',
        marginRight: 32,
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
