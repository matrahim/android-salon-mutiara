/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';
import RiwayatCard from '../components/riwayatCard';
import HairSpecialistCard from '../components/hairSpecialistCard';

import axios from 'axios';
import LayananCard from '../components/layananCard';
import Tombol from '../components/button';
import Label from '../components/label';
import InputDate from '../components/inputDate';
import InputTime from '../components/inputTime';

function getDataHairStyle() {
  return axios
    .get('https://api-salon-hijrah.vercel.app/hairstyle')
    .then(response => {
      return response.data.payload.datas;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}
function getDataBooking(id) {
  return axios
    .get('https://api-salon-hijrah.vercel.app/findBooking?id=' + id)
    .then(response => {
      return response.data.payload.datas;
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

const postBooking = async (t, w, h, u) => {
  try {
    const data = {
      id_user: u,
      tanggal: getDateFormat(t),
      waktu: w.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }),
      id_hairstylist: h.id,
    };

    const response = await axios.post(
      'https://api-salon-hijrah.vercel.app/booking',
      data,
    );
    return response.data.payload.datas.affectedRows > 0;
  } catch (error) {
    console.error(error);
  }
};

function getDateFormat(date) {
  if (date === undefined || date === 'Pilih Tanggal') {
    return 'Pilih Tanggal';
  }
  return (
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  );
}
function App({navigation}) {
  // const [data, setData] = useState(null);
  const [user, setUser] = useState();
  const [tanggal, setTanggal] = useState();
  const [waktu, setWaktu] = useState();
  const [hairStyleList, setHairStyleList] = useState();
  const [mapHairstyle, setMapHairstyle] = useState();
  const [disableHairStyle, setDisableHairStyle] = useState([]);
  const [disableAll, setDisableAll] = useState(true);
  const [riwayat, setRiwayat] = useState([]);
  const [isLoadingRiwayat, setIsLoadingRiwayat] = useState(true);
  const route = useRoute();
  const data = route.params[0]; // Mendapatkan data yang dikirim
  useEffect(() => {
    setUser(data.id_user);
    const fetchData = async () => {
      try {
        const responseData = await getDataHairStyle();

        setMapHairstyle(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchDataBooking = async () => {
      try {
        const responseData = await getDataBooking(user);

        setRiwayat(responseData);
        setIsLoadingRiwayat(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    fetchDataBooking();
  }, [data.id_user, user]);
  function clearAll() {
    setTanggal(undefined);
    setWaktu(undefined);
    cekHairStyle(tanggal, waktu);
  }
  function cekHairStyleDisable(t, w) {
    if (t !== undefined && w !== undefined) {
      setDisableAll(false);
    }
  }
  function cekHairStyle(t, w) {
    setDisableHairStyle([]);
    if (w !== undefined) {
      w = w.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });
      w = w.split(':');
      w = w[0] + ':' + '00';
    }
    return axios
      .get(
        "https://api-salon-hijrah.vercel.app/findBookingBy?tanggal='" +
          getDateFormat(t) +
          "'&waktu='" +
          w +
          "'",
      )
      .then(response => {
        const res = response.data.payload.datas;
        if (res.length !== 0) {
          res.map(item =>
            setDisableHairStyle(prevState => [
              ...prevState,
              item.id_hairstylist,
            ]),
          );
        }
      })
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
  async function refreshRiwayat(u) {
    // Lakukan logika untuk merefresh riwayat, misalnya melakukan pemanggilan API
    // Setelah berhasil mendapatkan riwayat terbaru, update state riwayat
    getDataBooking(u);
    const responseData = await getDataBooking(u);

    setRiwayat(responseData);
    setIsLoadingRiwayat(false);
  }
  return (
    <ScrollView style={{marginVertical: 10}}>
      <Text
        style={{
          fontFamily: 'Montserrat-Italic',
          fontSize: 14,
          color: '#FE774F',
          textAlign: 'center',
        }}>
        Selamat Datang {data.nama.toUpperCase()}
      </Text>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Login'}],
            });
          }}
          style={{
            padding: 3,
            borderRadius: 10,
            backgroundColor: '#FE774F',
            shadowColor: '#000',
            width: 100,
            height: 30,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Montserrat-Bold',
              fontSize: 12,
              color: 'white',
            }}>
            Log-Out
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Label name={'Layanan Kami'}></Label>
        <ScrollView horizontal>
          <LayananCard></LayananCard>
        </ScrollView>
      </View>
      <View>
        <Label name={'Pilih Tanggal'}></Label>
        <InputDate
          tgl={tanggal}
          setTanggal={v => {
            setWaktu(undefined);
            setTanggal(v);
            cekHairStyle(v, waktu);
            cekHairStyleDisable(v, waktu);
          }}></InputDate>
      </View>
      <View>
        <Label name={'Pilih Jam'}></Label>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}></View>
        <InputTime
          tgl={tanggal}
          waktu={waktu}
          setWaktu={v => {
            setWaktu(v);
            cekHairStyle(tanggal, v);
            cekHairStyleDisable(tanggal, v);
          }}></InputTime>
      </View>
      <View>
        <Label name={'Pilih Hair Specialist'}></Label>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {mapHairstyle &&
            mapHairstyle.map(item => {
              if (disableHairStyle.includes(item.id_hairstylist)) {
                return null;
              }

              return (
                // =============== PERULANGAN DATA HAIRSPESIALIST
                <HairSpecialistCard
                  disable={disableHairStyle.includes(item.id_hairstylist)}
                  key={item.id_hairstylist}
                  id_hairstylist={item.id_hairstylist}
                  disableAll={disableAll}
                  hairStyleList={hairStyleList}
                  getData={v => {
                    setHairStyleList(v);
                  }}
                  name={item.nama}
                  url={item.url}></HairSpecialistCard>
                // ===============
              );
            })}
        </View>
      </View>

      <Tombol
        waktu={waktu}
        tanggal={tanggal}
        hairstyle={hairStyleList}
        postBooking={() => {
          setIsLoadingRiwayat(true);

          if (postBooking(tanggal, waktu, hairStyleList, user)) {
            clearAll();
            refreshRiwayat(user);
          } else {
            console.log('error');
          }
        }}></Tombol>
      <View>
        <Label name={'Riwayat Booking'}></Label>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            {isLoadingRiwayat ? (
              <Text>Loading...</Text>
            ) : (
              riwayat &&
              riwayat.map(item => {
                return (
                  <RiwayatCard
                    key={item.id_booking}
                    url={item.url}
                    nama={item.nama}
                    tanggal={item.tanggal}
                    waktu={item.waktu}></RiwayatCard>
                );
              })
            )}
          </View>
        </ScrollView>
      </View>

      {/* {data && <Text>Data dari API: {data[1].hair_spesialis}</Text>} */}
    </ScrollView>
  );
}

export default App;