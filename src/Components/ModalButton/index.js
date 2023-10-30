import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, TextInput,ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import Toast from 'react-native-toast-message';


export default function ModalButton({show, close, chave }){ 
const { height } = Dimensions.get('window');
const [uservalor, setValor] = useState(0);
const [userParcela, setParcela] = useState(0);
const Movimentacao = ["Ganhos","Despesa"]
const Categoria = ["Alimentação", "Saúde", "Transporte", "Educação","Outra","Entradas"]
const [userCategoria, setCategoria] = useState('');
const [userMovimentacao, setMovimentacao] = useState('');
const [userVencimento, setVencimento] = useState('');


  async function handleNew(){
    const id = uuid.v4();

    const NewData = {
      id,
      Categoria: userCategoria,
      Movimentacao: userMovimentacao,
      Valor: uservalor, 
      Parcela: userParcela,    
      Vencimento: userVencimento.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'), 
    }
    const response = await AsyncStorage.getItem(`@financialProjection:${chave}`);
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, NewData];

    await AsyncStorage.setItem(`@financialProjection:${chave}`, JSON.stringify(data));
    
    // Toast.show({
    // type: "success",
    // text1: "Cadastrado com sucesso"
    // })
    setCategoria('');
    setMovimentacao('');
    setParcela('');
    setValor('');
    setVencimento('');
    close();
    // console.log(NewData);
  }

  function handleClose(){
    setCategoria('')
    setMovimentacao('')
    setParcela('')
    setValor('')
    setVencimento('')
    close()
  }
  
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  });

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: false }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: false }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: false  }),
      Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: false })
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >

      <TouchableOpacity style={styles.bntClose}onPress={handleClose}>
          <Ionicons name="close" size={35} color="black" />
      </TouchableOpacity>

    <ScrollView> 
    <Text style={styles.titleDados}>Categoria: </Text>
    <SelectDropdown 
      renderDropdownIcon={() => (<MaterialIcons name="add" size={24} color="black" />) }
      buttonStyle={{borderRadius: 20}}
	    data={Categoria}
      onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setCategoria(selectedItem);
	  }}
    value={userCategoria} 
    />

    <Text style={styles.titleDados}>Tipo de movimentação: </Text>
    <SelectDropdown 
      renderDropdownIcon={() => (<MaterialIcons name="add" size={24} color="black" />) }
      buttonStyle={{borderRadius: 20}}
	    data={Movimentacao}
	    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setMovimentacao(selectedItem);
	  }}
    value={userMovimentacao}
    />

      <Text style={styles.titleDados}>Valor: </Text>
      <TextInput style={styles.inputDados} 
        placeholder="Digite um valor..."
        value={uservalor.toString()}
        onChangeText={setValor}
        keyboardType = 'numeric'
      />

      <Text style={styles.titleDados}>Data de vencimento: </Text>
      <TextInput style={styles.inputDados} 
        placeholder="Digite a data de vencimento..."
        value={userVencimento.toString().replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')}
        onChangeText={setVencimento}
        keyboardType='numeric'
        maxLength={10}
      />

      <Text style={styles.titleDados}>Quantidade de parcelas: </Text>
      <TextInput style={styles.inputDados} 
        placeholder="Digite quantidade de parcelas..."
        value={userParcela.toString()}
        onChangeText={setParcela}
        keyboardType = 'numeric'
        maxLength={3}
      />
      </ScrollView>

      <TouchableOpacity style={styles.btn} onPress={handleNew}>
        <Text style={{ color: '#fff' }}>Salvar</Text>
      </TouchableOpacity>


      </Animated.View>
    </Animated.View>

  )
}



const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute'
  },
  modal: {
    bottom: 0,
    paddingBottom: 100,
    position: 'absolute',
    height: '80%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5
  },
  text: {
    marginTop: 50,
    textAlign: 'center'
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#00CC93',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: "absolute",
    bottom: 10,
    marginLeft: 25,
  },
  titleDados: {
    fontSize: 20,
    marginTop: 28,
  },
  inputDados: {
    borderBottomWidth: 1,
    height: 50,
    marginBottom: 12,
    fontSize: 16,
    marginTop: 5,
  },
  bntClose: {
    position: 'absolute',
    right: 10,
    top: 20,
  }
})

