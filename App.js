import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  speak =() => {
    var thingsToSay = this.state.text;
    Speech.speak(thingsToSay);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#f4c20d'}
          centerComponent={{
            text: 'Text To Speech',
            style: { color: '#3cba54', fontSize: 20 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'http://i.imgur.com/l5S4LZ2.png',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={this.speak}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderRadius:10,
    borderLeftColor:'#f4c20d',
    borderRightColor:'#3cba54',
    borderTopColor:'#db3236',
    borderBottomColor:'#4885ed',
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,

  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    borderWidth:4,
    borderRadius:30,
    borderLeftColor:'#f4c20d',
    borderRightColor:'#3cba54',
    borderTopColor:'#db3236',
    borderBottomColor:'#4885ed',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf:'center',
  }
});