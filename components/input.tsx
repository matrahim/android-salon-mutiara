/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';

const eye = {
  open: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#A8A8A8" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #b1aaa0;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="#A8A8A8" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #494f52;"></path> <path d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #b1aaa0;"></path> <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #b1aaa0;"></path> </g></svg>',
  close:
    '<svg fill="#a8a8a8" width="124px" height="124px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" style="--darkreader-inline-fill: #494f52; --darkreader-inline-stroke: #b1aaa0;" stroke="#a8a8a8" stroke-width="0.00024000000000000003" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.052 5.837A9.715 9.715 0 0112 5c2.955 0 5.309 1.315 7.06 2.864 1.756 1.553 2.866 3.307 3.307 4.08a.11.11 0 01.016.055.122.122 0 01-.017.06 16.766 16.766 0 01-1.53 2.218.75.75 0 101.163.946 18.253 18.253 0 001.67-2.42 1.607 1.607 0 00.001-1.602c-.485-.85-1.69-2.757-3.616-4.46C18.124 5.034 15.432 3.5 12 3.5c-1.695 0-3.215.374-4.552.963a.75.75 0 00.604 1.373z"></path><path fill-rule="evenodd" d="M19.166 17.987C17.328 19.38 14.933 20.5 12 20.5c-3.432 0-6.125-1.534-8.054-3.24C2.02 15.556.814 13.648.33 12.798a1.606 1.606 0 01.001-1.6A18.305 18.305 0 013.648 7.01L1.317 5.362a.75.75 0 11.866-1.224l20.5 14.5a.75.75 0 11-.866 1.224l-2.651-1.875zM4.902 7.898c-1.73 1.541-2.828 3.273-3.268 4.044a.118.118 0 00-.017.059c0 .015.003.034.016.055.441.774 1.551 2.527 3.307 4.08C6.69 17.685 9.045 19 12 19c2.334 0 4.29-.82 5.874-1.927l-3.516-2.487a3.5 3.5 0 01-5.583-3.949L4.902 7.899z"></path></g></svg>',
};
const Input = props => {
  return (
    <View>
      {props.isPassword ? (
        <View
          style={{flexDirection: 'row', width: 332, height: 44, marginTop: 30}}>
          <TextInput
            onChangeText={v => {
              props.setData(v);
            }}
            secureTextEntry={!props.showPass}
            placeholder={props.nama}
            borderBottomColor="#A8A8A8"
            borderBottomWidth={1}
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat-Regular',
              fontSize: 20,
              width: '100%',
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              bottom: 8,
            }}
            onPress={() => props.setShowPass(!props.showPass)}>
            <SvgXml
              xml={props.showPass ? eye.open : eye.close}
              width="24"
              height="24"
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{flexDirection: 'row', width: 332, height: 44, marginTop: 30}}>
          <TextInput
            onChangeText={v => {
              props.setData(v);
            }}
            placeholder={props.nama}
            borderBottomColor="#A8A8A8"
            borderBottomWidth={1}
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat-Regular',
              fontSize: 20,
              width: '100%',
            }}
          />
        </View>
      )}
      {props.iserror ? (
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Montserrat-Regular',
            marginTop: 5,
            color: '#FE6D47',
          }}>
          {props.nama} Tidak Valid !!
        </Text>
      ) : (
        ''
      )}
    </View>
  );
};

export default Input;
