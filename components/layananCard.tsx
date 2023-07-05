/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet} from 'react-native';
const LayananCard = props => {
  return (
    <Image
      source={{
        uri: props.img,
      }}
      style={styles.layanan}
      resizeMode="cover"
    />
  );
};

const styles = StyleSheet.create({
  layanan: {
    width: 274,
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
