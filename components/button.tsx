/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View, TouchableOpacity} from 'react-native';

function Button(props) {
  const active =
    props.tanggal !== undefined &&
    props.waktu !== undefined &&
    props.hairstyle !== undefined;
  return (
    <TouchableOpacity
      disabled={!active}
      onPress={() => {
        props.postBooking();
      }}>
      <View
        style={{
          width: 332,
          height: 42,
          backgroundColor: active ? '#FE6D47' : '#c5c5c5',
          marginTop: 15,
          alignSelf: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 20,
            color: 'white',
          }}>
          Booking
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
