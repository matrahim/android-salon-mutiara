/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Logo from '../components/logo';
import Input from '../components/input';

function Register({navigation}) {
  const [email, setEmail] = useState();
  const [hp, setHp] = useState();
  const [nama, setNama] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();
  const [showPass, setShowPass] = useState(false);
  const [showPassConf, setShowPassConf] = useState(false);
  const [konfEmail, setkonfEmail] = useState(false);
  const [konfimasiPass1, setKonfimasiPass1] = useState(false);
  const [konfimasiPass2, setKonfimasiPass2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [kesalahan, setKesalahan] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    setData({nama: nama, password: password, email: email, no_hp: hp});
    cekForm(email, hp, nama, password, passwordConf);
    // cekKonPassword(password, passwordConf);
  }, [email, hp, nama, password, passwordConf]);
  const cekForm = (e, h, n, p, pc) => {
    if (
      e === undefined ||
      h === undefined ||
      n === undefined ||
      p === undefined ||
      pc === undefined
    ) {
      setActive(false);
    } else {
      setActive(true);
    }
    if (p !== undefined) {
      if (p.length < 6) {
        setKonfimasiPass1('minimal 6 karakter');
        setActive(false);
      } else {
        setKonfimasiPass1(false);
      }
    }
    if (p !== pc) {
      setKonfimasiPass2('berbeda');
      setActive(false);
    } else {
      setKonfimasiPass2(false);
    }
    if (e !== undefined) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      console.log(!emailRegex.test(e));
      if (!emailRegex.test(e)) {
        setkonfEmail(true);
        setActive(false);
      } else {
        setkonfEmail(false);
      }
    }
  };

  function registerUser(d) {
    return axios
      .post('https://api-salon-hijrah.vercel.app/user', d)
      .then(response => {
        if (response.data.payload.datas.affectedRows === 0) {
          setLoading(false);
          setActive(false);
          setKesalahan(true);
          return undefined;
        } else {
          setKesalahan(false);
          setLoading(true);
          setActive(false);
          setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }, 3000);
        }
      })
      .catch(error => {
        // setKesalahan(true);
        console.error(error);
        throw error;
      });
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Logo />
      <Text
        style={{marginTop: 20, fontFamily: 'Montserrat-Regular', fontSize: 15}}>
        Registrasi
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
            ? 'Maaf, Registrasi Gagal, Hubungi Admin !'
            : 'Registrasi berhasil,\n anda akan dialihkan ke halamn Login'}
        </Text>
      ) : (
        ''
      )}

      <Input
        nama={'Email'}
        isError={konfEmail}
        isPassword={false}
        setData={v => {
          setEmail(v === '' ? undefined : v);
        }}
      />
      <Input
        nama={'Nomor Telpon'}
        type={'num'}
        isError={false}
        isPassword={false}
        setData={v => {
          setHp(v === '' ? undefined : v);
        }}
      />
      <Input
        nama={'Nama'}
        isError={false}
        isPassword={false}
        setData={v => {
          setNama(v === '' ? undefined : v);
        }}
      />
      <Input
        nama={'Password'}
        isError={konfimasiPass1}
        isPassword={true}
        showPass={showPass}
        setShowPass={v => {
          setShowPass(v);
        }}
        setData={v => {
          setPassword(v === '' ? undefined : v);
        }}
      />
      <Input
        nama={'Konfirmasi Password'}
        isError={konfimasiPass2}
        isPassword={true}
        showPass={showPassConf}
        setShowPass={v => {
          setShowPassConf(v);
        }}
        setData={v => {
          setPasswordConf(v === '' ? undefined : v);
        }}
      />
      <TouchableOpacity
        disabled={!active}
        onPress={() => {
          setLoading(true);
          setActive(false);
          registerUser(data);
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
              Registrasi
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
