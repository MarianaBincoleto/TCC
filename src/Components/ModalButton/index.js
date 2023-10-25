import React from 'react';
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, TextInput,ScrollView} from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'


export default function ModalButton({show, close }){ 
const { height } = Dimensions.get('window');
const [uservalor, setValor] = useState('');
const [userParcela, setParcela] = useState('');
const Movimentacao = ["Ganhos","Despesa"]
const Categoria = ["Alimentação", "Saúde", "Transporte", "Educação","Outra","Entradas"]


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

    <ScrollView> 
    <Text style={styles.titleDados}>Categoria: </Text>
    <SelectDropdown 
	    data={Categoria}
	    onSelect={(Categoria, index) => {
		  console.log(Categoria, index)
	  }}
    />

    <Text style={styles.titleDados}>Tipo de movimentação: </Text>
    <SelectDropdown
	    data={Movimentacao}
	    onSelect={(Movimentacao, index) => {
		  console.log(Movimentacao, index)
	  }}
    />

      <Text style={styles.titleDados}>Valor: </Text>
      <TextInput style={styles.inputDados} 
        placeholder="Digite um valor..."
        value={uservalor}
        onChangeText={setValor}
      />

      <Text style={styles.titleDados}>Quantidade de parcelas: </Text>
      <TextInput style={styles.inputDados} 
        placeholder="Digite quantidade de parcelas..."
        value={userParcela}
        onChangeText={setParcela}
      />
      </ScrollView>

      <TouchableOpacity style={styles.btn} onPress={close}>
        <Text style={{ color: '#fff' }}>Close</Text>
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
})

