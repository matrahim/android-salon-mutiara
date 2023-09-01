/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View, Text} from 'react-native';
const LayananCard = props => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{
          uri: props.img,
        }}
        style={styles.layanan}
        resizeMode="cover"
      />
      <Text
        style={{
          position: 'absolute',
          textAlign: 'center',
          fontFamily: 'Montserrat-SemiBoldItalic',
          color: 'white',
          textShadowColor: '#FE774F',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 0.9,
        }}>
        {props.layanan}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layanan: {
    width: 260,
    height: 80,
    borderWidth: 1,
    borderColor: '#FE774F',
    // backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 5,
    overflow: 'hidden',
  },
});

export default LayananCard;
