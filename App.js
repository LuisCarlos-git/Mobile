import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Olá Luis Carlos</Text>
      <Text style={styles.text}>Tudo bem com você??</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color: '#fff',
    fontSize: 30,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default App;
