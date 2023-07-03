/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Logo from '../components/logo';

function Register({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Logo />
      <Text
        style={{marginTop: 20, fontFamily: 'Montserrat-Regular', fontSize: 15}}>
        Register
      </Text>
      <TextInput
        placeholder="Email"
        borderBottomColor="#A8A8A8"
        borderBottomWidth={1}
        style={{
          width: 332,
          height: 44,
          textAlign: 'center',
          fontFamily: 'Montserrat-Regular',
          fontSize: 20,
          marginTop: 30,
        }}
      />
      <TextInput
        placeholder="Nomor Telpon"
        borderBottomColor="#A8A8A8"
        borderBottomWidth={1}
        style={{
          width: 332,
          height: 44,
          textAlign: 'center',
          fontFamily: 'Montserrat-Regular',
          fontSize: 20,
          marginTop: 30,
        }}
      />
      <TextInput
        placeholder="Nama"
        borderBottomColor="#A8A8A8"
        borderBottomWidth={1}
        style={{
          width: 332,
          height: 44,
          textAlign: 'center',
          fontFamily: 'Montserrat-Regular',
          fontSize: 20,
          marginTop: 30,
        }}
      />
      <TextInput
        placeholder="Password"
        borderBottomColor="#A8A8A8"
        borderBottomWidth={1}
        style={{
          width: 332,
          height: 44,
          textAlign: 'center',
          fontFamily: 'Montserrat-Regular',
          fontSize: 20,
          marginTop: 30,
        }}
      />
      <TextInput
        placeholder="Konfirmasi Password"
        borderBottomColor="#A8A8A8"
        borderBottomWidth={1}
        style={{
          width: 332,
          height: 44,
          textAlign: 'center',
          fontFamily: 'Montserrat-Regular',
          fontSize: 20,
          marginTop: 30,
        }}
      />
      <View
        style={{
          width: 332,
          height: 42,
          backgroundColor: '#FE6D47',
          marginTop: 15,
          alignSelf: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 39,
        }}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 20,
            color: 'white',
          }}>
          Register
        </Text>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 16,
            color: '#FE6D47',
          }}>
          Sudah Punya Akun ?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 16,
              color: '#FE6D47',
            }}>
            Login Disini
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
