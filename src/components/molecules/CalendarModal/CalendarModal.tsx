import Button from '@components/atoms/Button';
import res from '@res';
import React, {useState} from 'react';
import {View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {default as RNModal} from 'react-native-modal';
import styles from './styles';

interface Props {
  isVisible: boolean;
  onPress: (option: Date) => void;
  onClose: () => void;
}

const CalendarModal = (props: Props) => {
  const {isVisible, onPress, onClose} = props;
  const [date, setDate] = useState(new Date());

  return (
    <RNModal
      isVisible={isVisible}
      backdropColor="#707070"
      backdropOpacity={0.5}
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}>
      <View style={styles.root}>
        <DatePicker date={date} onDateChange={setDate} mode="date" />
        <Button
          onPress={() => {
            onPress(date);
          }}
          title="Save"
          style={{marginTop: res.metrics.spacing3}}
        />
      </View>
    </RNModal>
  );
};

export default CalendarModal;
