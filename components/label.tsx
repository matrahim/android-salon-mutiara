/* eslint-disable react/react-in-jsx-scope */
import {Text, StyleSheet} from 'react-native';
function Label(props) {
  return <Text style={styles.label}>{props.name}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: 'black',
    // textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 32,
  },
});
export default Label;
