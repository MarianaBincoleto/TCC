import React from 'react'
import { useState, useEffect } from 'react';
import {View, StyleSheet, Text,ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'


export default function Carteira(){
    const navigation = useNavigation();
    const Porcentagem = ["5%","10%","15%"]
    const [userPorcentagem, setPorcentagem] = useState('');

    return(
            <ScrollView showsVerticalScrollIndicator={false} style={styles.containerPorcentagem}>
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D" onPress={() => navigation.navigate('Home')}></Ionicons>
                </View>

                <Text style={styles.containerText}>Selecione a porcentagem que deseja guardar: </Text>
                <SelectDropdown 
                renderDropdownIcon={() => (<MaterialIcons name="add" size={24} color="black" />) }
                buttonStyle={{borderRadius: 20,backgroundColor:'#CACACA'}}
                data={Porcentagem}
                onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setPorcentagem(selectedItem);
                }}
                value={userPorcentagem} 
                />
                
            </ScrollView>
       
    );
}
const styles = StyleSheet.create({
    containerPorcentagem:{
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 70,
        marginHorizontal: 16,
    },
    containerText: {
        textAlign: "center",
        fontSize: 17,
        marginTop: 30,
    },

})