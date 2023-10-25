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
    }

})