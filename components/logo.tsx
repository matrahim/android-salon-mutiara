/* eslint-disable react/react-in-jsx-scope */
import {Text, StyleSheet, View} from 'react-native';
function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo1}>SALON</Text>
      <Text style={styles.logo2}>Hijrah</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Mengatur tata letak menjadi kolom
    justifyContent: 'center', // Mengatur posisi teks secara vertikal (tengah)
    alignItems: 'center', // Mengatur posisi teks secara horizontal (tengah)
    // height: , // Tinggi yang Anda inginkan
  },
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
