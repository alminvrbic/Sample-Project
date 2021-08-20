import CalendarModal from '@components/molecules/CalendarModal';
import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dispatch} from '@reduxjs/toolkit';
import authService from '@services/authService';
import moment from 'moment';
import React, {RefObject, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import Button from '../../../../components/atoms/Button';
import TextInput from '../../../../components/atoms/Input';
import Text from '../../../../components/atoms/Text';
import typedBindActionCreators from '../../../../utils/typed-bind-action-creators';
import styles from './styles';

interface Props extends ReturnType<typeof mapDispatchToProps> {
  navigation: StackNavigationProp<any>;
}

interface State {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  pending: boolean;
  isVisibleCalendarModal: boolean;
  formErrors: any | null;
}

const RegisterScreen = (props: Props) => {
  const [state, setState] = useState<State>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    pending: false,
    isVisibleCalendarModal: false,
    formErrors: null,
  });

  const refLastNameInput: RefObject<any> = React.useRef();

  const refPasswordInput: RefObject<any> = React.useRef();

  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
    pending,
    isVisibleCalendarModal,
  } = state;

  const onRegisterSubmit = () => {
    const {firstName, lastName, dateOfBirth, email, password} = state;

    setState({
      ...state,
      formErrors: null,
      pending: true,
    });

    props
      .authRegister({
        params: {
          // @ts-ignore
          first_name: firstName,
          // @ts-ignore
          last_name: lastName,
          // @ts-ignore
          date_of_birth: dateOfBirth,
          email,
          password,
        },
      })
      .then(
        () => {
          setState({...state, pending: false});
          props.navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Private'}],
            }),
          );
        },
        (error) => {
          setState({...state, formErrors: error, pending: false});
        },
      );
  };

  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.headingWrapper}>
            <Text style={styles.headingText}>Create an Account</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              label="First Name"
              value={firstName}
              onChangeText={(firstName) => setState({...state, firstName})}
              onSubmitEditing={() => refLastNameInput.current.focus()}
              autoFocus={true}
              returnKeyType="next"
              autoCapitalize="characters"
              editable={!pending}
              style={[styles.textInput, {flex: 1, marginRight: 10}]}
            />
            <TextInput
              label="Last Name"
              inputRef={refLastNameInput}
              value={lastName}
              onChangeText={(lastName) => setState({...state, lastName})}
              returnKeyType="next"
              autoCapitalize="characters"
              editable={!pending}
              style={[styles.textInput, {flex: 1}]}
            />
          </View>
          <TouchableOpacity
            onPress={() => setState({...state, isVisibleCalendarModal: true})}>
            <TextInput
              label="Date of Birth"
              value={dateOfBirth}
              style={styles.textInput}
              type="date"
            />
          </TouchableOpacity>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={(email) => setState({...state, email})}
            onSubmitEditing={() => refPasswordInput.current.focus()}
            returnKeyType="next"
            keyboardType="email-address"
            editable={!pending}
            style={styles.textInput}
          />
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setState({...state, password})}
            returnKeyType="done"
            inputRef={refPasswordInput}
            onSubmitEditing={() => onRegisterSubmit()}
            autoCapitalize="none"
            editable={!pending}
          />
          <Button
            onPress={() => onRegisterSubmit()}
            title="Create Account"
            disabled={state.email === '' || state.password === ''}
            pending={pending}
            style={styles.button}
          />
        </View>
        <CalendarModal
          isVisible={isVisibleCalendarModal}
          onPress={(selectedDate) => {
            setState({
              ...state,
              dateOfBirth: moment(selectedDate)
                .format('MMMM DD, YYYY')
                .toString(),
              isVisibleCalendarModal: false,
            });
          }}
          onClose={() => setState({...state, isVisibleCalendarModal: false})}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  typedBindActionCreators(
    {
      authRegister: authService.register,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(RegisterScreen);
