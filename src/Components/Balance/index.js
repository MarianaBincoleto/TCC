import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Balance() {
    return (
        <View style={styles.container}>
            <View style={styles.Item}>
                <Text style={styles.itemTitle}>Saldo</Text>
            <View>
                <Text style={styles.currencySymbol}> R$</Text>
                <Text style={styles.Balance}> 15.000,00</Text>
            </View>
            </View>

            <View style={styles.Item}>
                <Text style={styles.itemTitle}>Gastos</Text>
            <View>
                <Text style={styles.currencySymbol}> R$</Text>
                <Text style={styles.Balance}> 390,00</Text>
            </View>
            </View>

        </View>

    );
}
 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
    }
 })