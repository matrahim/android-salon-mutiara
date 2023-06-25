/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View, Image, StyleSheet} from 'react-native';
const LayananCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
      }}>
      <Image
        source={{
          uri: 'https://www.dewimagazine.com/img/images/WEB%203.jpg',
        }}
        style={styles.layanan}
        resizeMode="cover"
      />
      <Image
        source={{
          uri: 'https://www.dewimagazine.com/img/images/WEB%203.jpg',
        }}
        style={styles.layanan}
        resizeMode="cover"
      />
      <Image
        source={{
          uri: 'https://www.dewimagazine.com/img/images/WEB%203.jpg',
        }}
        style={styles.layanan}
        resizeMode="cover"
      />
    </View>
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
