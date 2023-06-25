/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
function JamCard(props, setJam) {
  const [data, setData] = useState(true);

  const handleChange = () => {
    // setData(data);
    setJam(data);
  };

  return (
    <TouchableOpacity onPress={handleChange}>
      <View
        style={{
          width: 100,
          height: 40,
          borderWidth: 1,
          borderColor: props.pilih ? '#FE774F' : 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <Text>{props.jam}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default JamCard;
