/* eslint-disable react/react-in-jsx-scope */
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
function Input1() {
  return (
    <TouchableOpacity>
      <View style={styles.input}>
        <Text style={styles.textInput}>Senin, 8 Juni 2023</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 332,
    height: 44,
    borderWidth: 1,
    borderColor: '#FE774F',
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: 'black',
  },
});
export default Input1;
