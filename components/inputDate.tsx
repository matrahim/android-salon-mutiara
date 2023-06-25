/* eslint-disable radix */
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

function getDateFormat(date) {
  if (date === undefined || date === 'Pilih Tanggal') {
    return 'Pilih Tanggal';
  }
  return (
    getHari(date) +
    ', ' +
    date.getDate() +
    ' ' +
    getBulan(date.getMonth() + 1) +
    ' ' +
    date.getFullYear()
  );
}
function getFormatMinimal(date) {
  if (date === undefined || date === 'Pilih Tanggal') {
    //  new Date();

    return moment().format('YYYY-MM-DD');
  }

  date = new Date(date);

  return new Date(
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
  );
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
function getHour(v) {
  return v
    .toLocaleTimeString('id-ID', {
      hour: 'numeric',
      hour12: false,
    })
    .toString()
    .replace(/^0/, '');
}
function getMinumum() {
  // var besok = new Date() + 1;
  let minimum;
  let today = new Date();
  const todayMoment = moment();
  const besok = new Date(todayMoment.clone().add(1, 'days').toISOString());
  if (parseInt(getHour(today)) >= 16) {
    minimum = besok;
  } else {
    minimum = today;
  }
  return minimum;
}
function InputDate(props) {
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDate(props.tgl);
  }, [props.tgl]);

  return (
    <>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <View style={styles.input}>
          <Text style={styles.textInput}>{getDateFormat(date)}</Text>
        </View>
      </TouchableOpacity>
      {/* <Button title="Open" style={styles.input} /> */}
      <DatePicker
        modal
        minimumDate={getFormatMinimal(getMinumum())}
        // maximumDate={}
        mode="date"
        theme="dark"
        open={open}
        date={date === undefined ? getMinumum() : date}
        onConfirm={data => {
          setDate(data);
          props.setTanggal(data);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

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
});
export default InputDate;
