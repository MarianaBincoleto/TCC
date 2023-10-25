import React from 'react'
import {View, StyleSheet, Text,ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'


export default function Carteira(){
    const navigation = useNavigation();
    const Porcentagem = ["5%","10%","15%"]

    return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.titleBar}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D" onPress={() => navigation.navigate('Home')}></Ionicons>
                </View>

                <Text style={styles.containerText}>Selecione a porcentagem que deseja guardar: </Text>
                <SelectDropdown style={styles.selectPorcentagem} 
                data={Porcentagem}
                onSelect={(Porcentagem, index) => {
                console.log(Porcentagem, index)
                }}
                />
                
            </ScrollView>
       
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
        marginTop: 70,
        marginHorizontal: 16,
    },
    containerText: {
        textAlign: "center",
        fontSize: 17,
        marginTop: 30,
    },
    selectPorcentagem: {
        marginTop: 30,
        alignItems: "center",
    },

})