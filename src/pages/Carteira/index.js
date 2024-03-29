import React from 'react'
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'
import PieChart from 'react-native-pie-chart'


export default function Carteira() {
    const navigation = useNavigation();
    const percents = [5, 10, 15];
    const Porcentagem = percents.map(percent => `${percent}%`) // ['5%', '10%', '15%']
    const [userPorcentagem, setUserPorcentagem] = useState('');
    const [userSalario, setSalario] = useState('');
    const widthAndHeight = 250;
    const [data, setData] = useState([1, 1]);
    const sliceColor = ['#006400', '#32CD32'];

    function handleSalario() {
        if (userPorcentagem === '5%') {
            const userSalarioParsed = parseFloat(userSalario);
            const result = userSalarioParsed * 0.05;
            const total = parseFloat(userSalarioParsed - result);
            setData([total, result]);
        } else if (userPorcentagem === '10%') {
            const userSalarioParsed = parseFloat(userSalario);
            const result = userSalarioParsed * 0.10;
            const total = parseFloat(userSalarioParsed - result);
            setData([total, result]);
        } else {
            const userSalarioParsed = parseFloat(userSalario);
            const result = userSalarioParsed * 0.15;
            const total = parseFloat(userSalarioParsed - result);
            setData([total, result]);
        }
    }
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
                            setUserPorcentagem(selectedItem);
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
                <TouchableOpacity style={styles.buttonSalario} onPress={() => { handleSalario(); setSalario('') }}>
                    <Text style={styles.registerSalario}>Salvar</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.grafico}>
                {/* <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} /> */}
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={data || []}
                    sliceColor={sliceColor}
                    // coverRadius={0.45}
                    coverFill={'#FFF'}
                />
                {/* Legenda da Porcentagem */}
                <Text style={styles.porcentagemLegend}>{userPorcentagem}</Text>

                {/* Legenda do Valor que Ficou */}
                <Text style={styles.valorFicouLegend}>Valor disponível: R${data[0].toFixed(2)}</Text>
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
    },
    porcentagemLegend: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#52575D',
    },
    valorFicouLegend: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#52575D',
    },
})