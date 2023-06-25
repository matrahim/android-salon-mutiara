/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, Image, TouchableOpacity} from 'react-native';
import {isEqual} from 'lodash';

function HairSpecialistCard(props) {
  const hairStyleList = {
    name: props.name,
    url: props.url,
    id: props.id_hairstylist,
  };
  //   console.log();
  const active = isEqual(props.hairStyleList, hairStyleList);
  //   console.log(props.disable);
  //   const disable = props.disable;
  //   console.log(props.disableAll + '==' + disable);
  return (
    <TouchableOpacity
      disabled={props.disableAll}
      onPress={() => {
        props.getData(hairStyleList);
      }}
      style={{
        width: 90,
        height: 90,
        borderWidth: 1,
        borderColor: active ? '#FE774F' : '#e5e5e5',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.disableAll ? '#f2f2f2' : 'white',
      }}>
      <Image
        source={{
          uri: hairStyleList.url,
        }}
        style={{
          width: 47,
          height: 47,
          borderRadius: 50,
        }}
        resizeMode="cover"
      />
      <Text
        style={{fontFamily: 'Montserrat-Medium', fontSize: 14, marginTop: 10}}>
        {hairStyleList.name}
      </Text>
    </TouchableOpacity>
  );
}

export default HairSpecialistCard;
