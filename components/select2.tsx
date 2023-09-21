import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';

function getDataLayanan() {
  return axios
    .get('https://api-salon-hijrah.vercel.app/layanan')
    .then(response => {
      return response.data.payload.datas;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

const Select2 = props => {
  const [value, setValue] = useState();
  const [isFocus, setIsFocus] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDataLayanan = await getDataLayanan();
        const res = responseDataLayanan.map(item => ({
          label: `${item.id_layanan}`,
          value: `${item.layanan}`,
        }));
        setDatas(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    props.setData(value);
    // console.log(props.nilai);
    props.nilai == null ? setValue(null) : null;
  }, [props, value]);

  return (
    <View>
      <Dropdown
        style={styles.input}
        selectedTextStyle={styles.textInput}
        data={datas}
        // search
        maxHeight={300}
        labelField="value"
        valueField="label"
        placeholder={!isFocus ? 'Pilih Layanan' : '...'}
        // searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.label);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

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
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default Select2;
