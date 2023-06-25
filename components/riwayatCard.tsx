/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image} from 'react-native';
function getDateFormat(d) {
  const date = d.split('T');
  const dateOnly = date[0];

  // Menggunakan metode substring() untuk mengambil tanggal dari hasil pemisahan
  const tanggal = dateOnly.substring(8);
  const bulan = dateOnly.substring(5, 7);
  const tahun = dateOnly.substring(0, 4);

  return getHari(d) + ', ' + tanggal + ' ' + getBulan(bulan) + ' ' + tahun;
}
function getHari(hari) {
  const dateObject = new Date(hari);
  const dayOfWeek = dateObject.getDay();

  const daysOfWeek = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  const dayName = daysOfWeek[dayOfWeek];
  return dayName;
}
function getBulan(bulan) {
  const month = [
    'Minggu',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const monthName = month[bulan - 1];
  return monthName;
}
function cekAktif(t, w) {
  const datetimeStr = t;

  const time = w.split(':');

  const dateObj = new Date(datetimeStr);
  dateObj.setHours(time[0]);
  dateObj.setMinutes(time[1]);
  dateObj.setSeconds(time[2]);

  const tglCek = new Date(dateObj);
  const tglSekarang = new Date();

  return tglSekarang <= tglCek;
}
function RiwayatCard(props) {
  return (
    <View
      style={{
        width: 332,
        height: 80,
        borderWidth: 1,
        borderColor: cekAktif(props.tanggal, props.waktu)
          ? '#FE774F'
          : '#e5e5e5',
        borderRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginBottom: 5,

        backgroundColor: cekAktif(props.tanggal, props.waktu)
          ? 'white'
          : '#f2f2f2',
      }}>
      <View
        style={{
          width: '70%',
          height: '100%',

          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 12}}>
          {getDateFormat(props.tanggal)}
        </Text>
        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            fontSize: 10,
            marginTop: 5,
          }}>
          {props.waktu}
        </Text>
      </View>
      <View
        style={{
          width: '30%',
          height: '100%',

          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri: props.url,
            }}
            style={{width: 35, height: 35, borderRadius: 50}}
            resizeMode="cover"
          />
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 10,
              marginTop: 5,
            }}>
            {props.nama}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default RiwayatCard;
