import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';

function getDateOnly(date) {
  if (date === undefined) {
    return '';
  }
  return (
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  );
}
function InputTime(props) {
  const [time, setTime] = useState();
  const [timeNow] = useState(props.tgl === undefined ? new Date() : props.tgl);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTime(props.waktu);
  }, [props.waktu]);

  function getHour() {
    let dataH = new Date()
      .toLocaleTimeString('id-ID', {
        hour: 'numeric',
        hour12: false,
      })
      .toString()
      .replace(/^0/, '');
    let dataM = new Date().toLocaleTimeString('id-ID', {
      minute: 'numeric',
      hour12: false,
    });
    // dataH = 6;
    if (
      dataH >= 8 &&
      dataH < 16 &&
      // true
      getDateOnly(new Date()) === getDateOnly(props.tgl)
    ) {
      if (dataM > 0) {
        return parseInt(dataH, 10) + 1;
      } else {
        return dataH;
      }
    } else {
      return 8;
    }
  }

  var startTime = timeNow;
  startTime.setHours(getHour());
  startTime.setMinutes(0);
  var finishTime = new Date();
  finishTime.setHours(16);
  finishTime.setMinutes(0);

  function getTime(v) {
    if (v === undefined) {
      return 'Pilih Jam';
    }
    if (v instanceof Date === false) {
      return v;
    }
    // } else {
    return v.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    // }
  }

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          props.tgl === undefined ? setOpen(false) : setOpen(true)
        }>
        <View style={styles.input}>
          <Text style={styles.textInput}>{getTime(time)}</Text>
        </View>
      </TouchableOpacity>
      <DatePicker
        modal
        maximumDate={finishTime}
        minimumDate={startTime}
        mode="time"
        theme="dark"
        open={open}
        date={time === undefined ? startTime : time}
        onConfirm={data => {
          setTime(data);
          props.setWaktu(data);
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
export default InputTime;
