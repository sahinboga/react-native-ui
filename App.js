import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImButton from './src/components/ImButton';
import ImInput from './src/components/ImInput';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImButton color='black' btnsize='medium' border='radius5' text='Kaydet'/>
      <View style={styles.pad}></View>
      <ImInput placeholder='Buraya bir şey yaz'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pad:{
    paddingBottom:10
  }
});
