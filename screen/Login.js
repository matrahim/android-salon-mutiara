/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import React, {useState} from 'react';
import Logo from '../components/logo';
import Input from '../components/input';
function Login({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPass, setSetShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [kesalahan, setKesalahan] = useState();
  const [active, setActive] = useState(false);

  function cekLogin(e, p) {
    return axios
      .get(
        "https://api-salon-hijrah.vercel.app/user?email='" +
          e +
          "'&password='" +
          p +
          "'",
      )
      .then(response => {
        if (response.data.payload.datas.length === 0) {
          setLoading(false);
          setActive(false);
          setKesalahan(true);
          return undefined;
        } else {
          setKesalahan(false);
          setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [
                {name: 'Dashboard', params: response.data.payload.datas},
              ],
            });
          }, 3000);
        }
      })
      .catch(error => {
        setKesalahan(true);
        console.error(error);
        throw error;
      });
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Logo />
      <Text
        style={{marginTop: 20, fontFamily: 'Montserrat-Regular', fontSize: 15}}>
        Silahkan Login
      </Text>
      {kesalahan !== undefined ? (
        <Text
          style={{
            marginTop: 20,
            fontFamily: 'Montserrat-Italic',
            fontSize: 15,
            color: kesalahan ? '#FE6D47' : 'green',
            textAlign: 'center',
          }}>
          {kesalahan
            ? 'Maaf, Login Gagal'
            : 'Login berhasil,\n anda akan dialihkan ke Dashboard'}
        </Text>
      ) : (
        ''
      )}

      <Input
        nama={'Email'}
        isErorr={false}
        isPassword={false}
        setData={v => {
          setEmail(v);
          password !== undefined ? setActive(true) : '';
        }}
      />
      <Input
        nama={'Password'}
        isErorr={false}
        isPassword={true}
        showPass={showPass}
        setShowPass={v => {
          setSetShowPass(v);
        }}
        setData={v => {
          setPassword(v);
          email !== undefined ? setActive(true) : '';
        }}
      />

      <TouchableOpacity
        disabled={!active}
        onPress={() => {
          setLoading(true);
          setActive(true);
          cekLogin(email, password);
        }}>
        <View
          style={{
            width: 332,
            height: 42,
            backgroundColor: active ? '#FE6D47' : '#a5a5a5',
            marginTop: 15,
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 39,
          }}>
          {loading ? (
            <Image
              source={require('../assets/1.gif')}
              style={{width: 24, height: 24}}
            />
          ) : (
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                fontSize: 20,
                color: 'white',
              }}>
              Login
            </Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Montserrat-Regular',
            fontSize: 16,
            color: '#FE6D47',
          }}>
          Belum Punya Akun ?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Register'}],
            });
          }}>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 16,
              color: '#FE6D47',
            }}>
            Daftar Disini
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
