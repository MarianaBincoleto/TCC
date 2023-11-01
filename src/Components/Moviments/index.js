import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Moviments({ data, onDelete }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{data.Vencimento}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.Categoria} </Text>

                {showValue ? (
                    <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                        <Text
                            style={data.Movimentacao === 'Ganhos' ? styles.value : styles.expenses}>
                            {data.Movimentacao === 'Ganhos' ? `R$ ${data.Valor}` : `R$ -${data.Valor}`}
                        </Text>
                        <TouchableOpacity onPress={() => onDelete(data.id)}>
                            <MaterialIcons name="delete" size={24} color="#e74c3c" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.skeleton}>
                    </View>
                )}
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date:{
        color:'#DADADA',
        fontWeight: 'bold',
    },
    label:{
        fontWeight:'bold',
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses:{
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    },
    skeleton:{
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius:8,
    }
})