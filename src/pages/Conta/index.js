import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Conta(){
    const navigation = useNavigation();

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
})