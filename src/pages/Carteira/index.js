import React from 'react'
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import PieChart from 'react-native-pie-chart'


export default function Carteira() {
    const navigation = useNavigation();
    const Porcentagem = ["5%", "10%", "15%"]
    const [userPorcentagem, setPorcentagem] = useState('');
    const [userSalario, setSalario] = useState('');
    const [userResult, setResult] = useState('');
    const widthAndHeight = 250;
    const series = [100,0];
    const [data, setData] = useState([]);
    const sliceColor = ['#006400','#32CD32'];


    function handleSalario() {
        if (userPorcentagem === '5%') {
            const result = userSalario.replace(',', '.') * 0.05
            setData([parseFloat(userSalario - result),result])
            console.log('socorro',userSalario)
        } else if (userPorcentagem === '10%') {
            const result = userSalario.replace(',', '.') * 0.10
            setData([parseFloat(userSalario - result),result])
            console.log(result)
        } else {
            const result = userSalario.replace(',', '.') * 0.15
            setData([parseFloat(userSalario - result),result])
            console.log(result)
        }
    }
    console.log(data);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.containerPorcentagem}>
            <View style={styles.titleBar}>
                <Ionicons name="ios-arrow-back" size={24} color="#52575D" onPress={() => navigation.navigate('Home')}></Ionicons>
            </View>
            <View style={styles.containerSalario}>
                <Text style={styles.inputSalario} > Selecione a porcentagem que deseja guardar: </Text>
                <View style={{ alignItems: 'center' }}>
                    <SelectDropdown
                        renderDropdownIcon={() => (<MaterialIcons name="add" size={24} color="black" />)}
                        buttonStyle={{ borderRadius: 20, backgroundColor: '#CACACA' }}
                        data={Porcentagem}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index);
                            setPorcentagem(selectedItem);
                        }}
                        value={userPorcentagem}
                    />
                </View>

                <Text style={styles.inputSalario} > Salário base: </Text>
                <TextInput style={styles.inputSalario}
                    placeholder="Salario base..."
                    value={userSalario.toString()}
                    onChangeText={setSalario}
                    keyboardType='numeric'
                />
                <TouchableOpacity style={styles.buttonSalario} onPress={() => handleSalario()}>
                    <Text style={styles.registerSalario}>Salvar</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.grafico}>
            {/* <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} /> */}
            <PieChart
            widthAndHeight={widthAndHeight}
            series={data}
            sliceColor={sliceColor}
            // coverRadius={0.45}
            coverFill={'#FFF'}
            />
            </View>

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    containerSalario: {
        marginHorizontal: 20,
        marginVertical: 5,
        gap: 10,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 70,
        marginHorizontal: 16,
    },
    inputSalario: {
        borderBottomWidth: 1,
        height: 45,
        marginBottom: 4,
        fontSize: 18,
    },
    buttonSalario: {
        marginTop: 14,
        alignSelf: 'center',
        backgroundColor: '#00CC93',
        padding: 15,
        borderRadius: 12,
    },
    registerSalario: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }, 
    grafico: {
        top: 100,
        justifyContent: 'space-between',
        marginLeft: 80,
    }
})