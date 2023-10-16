import { StyleSheet, Text, View, FlatList,TouchableOpacity } from 'react-native';
import Header from '../../Components/Header/Index';
import Balance from '../../Components/Balance';
import Moviments from '../../Components/Moviments';
import Actions from '../../Components/Actions';
import { useState } from 'react';
import ModalButton from '../../Components/ModalButton';
import { Ionicons } from '@expo/vector-icons'; 

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '300,90',
    date: '17/09/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Boleto conta agua',
    value: '100,00',
    date: '18/09/2023',
    type: 0 //despesas
  },
  {
    id: 3,
    label: 'PIX',
    value: '500,00',
    date: '17/09/2023',
    type: 1 //entrada
  },
]


export default function Home() {
  const [modal, setModal] = useState(false)

  return (
    <View style={styles.container}>
      <Header name="Mariana" />
      <Balance saldo="9.250,90" gastos="-250,00" />

      <Actions />
      <Text style={styles.title}> Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />

       <View style={styles.buttonADD}> 
       <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
        <Ionicons name="add-circle" size={80} color="#00CC93" />
        </TouchableOpacity>
       </View>

        <ModalButton
          show={modal}
          close={() => setModal(false)}
        />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,

  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  buttonADD: {
    alignItems: "center",
  }
});