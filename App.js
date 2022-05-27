import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImButton from './src/components/ImButton';
import ImInput from './src/components/ImInput';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImButton color='primary'  text='Kaydet'/>
      <View style={styles.pad}></View>
      <ImButton color='black' btnsize='small' border='radius5' text='Kaydet'/>
      <View style={styles.pad}></View>
      <ImButton color='secondary' btnsize='medium' border='radius7' text='Kaydet'/>
      <View style={styles.pad}></View>
      <ImButton color='danger' btnsize='large' border='radius10' text='Kaydet'/>
      <View style={styles.pad}></View>
      <ImInput placeholder='Buraya bir şey yaz' type='email'/>
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
