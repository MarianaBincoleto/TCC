import { StyleSheet, Text, View} from 'react-native';
import Header from '../../Components/Header/Index';
import Balance from '../../Components/Balance';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Mariana"/>
        <Balance/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});