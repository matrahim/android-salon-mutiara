/* eslint-disable react/react-in-jsx-scope */
import {Text, StyleSheet} from 'react-native';
function Logo() {
  return (
    <>
      <Text style={styles.logo1}>SALON</Text>
      <Text style={styles.logo2}>Hijrah</Text>
    </>
  );
}
const styles = StyleSheet.create({
  logo1: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    color: '#FE774F',
    textAlign: 'center',
  },
  logo2: {
    fontFamily: 'LeckerliOne-Regular',
    fontSize: 32,
    color: '#FE774F',
    textAlign: 'center',
    marginTop: -10,
  },
});

export default Logo;
