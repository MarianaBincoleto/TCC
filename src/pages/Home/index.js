import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header/Index';
import Balance from '../../Components/Balance';
import Moviments from '../../Components/Moviments';
import Actions from '../../Components/Actions';
import { useCallback, useEffect, useState } from 'react';
import ModalButton from '../../Components/ModalButton';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


// const list = [
//   {
//     id: 1,
//     label: 'Boleto conta luz',
//     value: '300,90',
//     date: '17/09/2023',
//     type: 0 //despesas
//   },
//   {
//     id: 2,
//     label: 'Boleto conta agua',
//     value: '100,00',
//     date: '18/09/2023',
//     type: 0 //despesas
//   },
//   {
//     id: 3,
//     label: 'PIX',
//     value: '500,00',
//     date: '17/09/2023',
//     type: 1 //entrada
//   },
// ]


export default function Home() {
  const [modal, setModal] = useState(false);
  const [list, setlist] = useState([]);
  const [saldo, setSaldo] = useState();
  const [gasto, setGasto] = useState();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  async function handleFetchList() {
    // const response = await AsyncStorage.getItem('@financialProjection:adomesticApp');
    const userEmail = await AsyncStorage.getItem('user');
    const user = await AsyncStorage.getItem(userEmail);
    setEmail(userEmail);

    const response = await AsyncStorage.getItem(`@financialProjection:${userEmail}`);
    
    if (user) {
      const userData = JSON.parse(user)
      setUserName(userData.nome);
      console.log(userData.nome);
    }

    if (response) {
      const responseObject = JSON.parse(response)
      setlist(responseObject)      
    }
  }

  async function handleDelete(itemId) {
    // Filtrar a lista para remover o item com o ID correspondente
    const updatedList = list.filter((item) => item.id !== itemId);

    await AsyncStorage.setItem(`@financialProjection:${email}`, JSON.stringify(updatedList));
    handleFetchList();
  };

  useFocusEffect(useCallback(() => {
    handleFetchList();
  }, [modal]))

  useEffect(() => {
    if (list) {
      const listaGanhos = list.filter((item) => item.Movimentacao === 'Ganhos');
      const listaDespesas = list.filter((item) => item.Movimentacao === 'Despesa');

      const totalGanhos = listaGanhos.reduce((total, item) => {
        const valor = parseFloat(item.Valor.replace(',', '.'));
        return total + valor;
      }, 0);

      const totalDespesas = listaDespesas.reduce((total, item) => {
        const valor = parseFloat(item.Valor.replace(',', '.'));
        return total + valor;
      }, 0);

      const saldoPositivo = totalGanhos - totalDespesas;
      console.log(saldoPositivo.toFixed(2));
      setSaldo(saldoPositivo.toFixed(2).replace('.', ','));
      setGasto(totalDespesas.toFixed(2).replace('.', ','));
    }
  }, [list])

  return (
    <View style={styles.container}>
      <Header name={userName} />
      <Balance saldo={saldo} gastos={gasto} />

      <Actions />
      <Text style={styles.title}> Últimas Movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Moviments data={item} onDelete={handleDelete} />}
      />

      <View style={styles.buttonADD}>
        <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
          <Ionicons name="add-circle" size={80} color="#00CC93" />
        </TouchableOpacity>
      </View>

      <ModalButton
        show={modal}
        chave={email}
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