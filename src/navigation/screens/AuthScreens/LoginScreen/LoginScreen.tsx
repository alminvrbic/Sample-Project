import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dispatch} from '@reduxjs/toolkit';
import authService from '@services/authService';
import React, {RefObject, useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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

interface FormState {
  email: string;
  password: string;
  pending: boolean;
  formErrors: any | null;
}

const LoginScreen = (props: Props) => {
  const [state, setState] = useState<FormState>({
    email: '',
    password: '',
    pending: false,
    formErrors: null,
  });

  const {email, password, pending} = state;

  const refPasswordInput: RefObject<any> = React.useRef();

  const onLoginSubmit = () => {
    const {email, password} = state;

    setState({
      ...state,
      formErrors: null,
      pending: true,
    });
    props
      .authLogin({
        params: {email, password},
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
            <Text style={styles.headingText}>Welcome Back</Text>
          </View>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={(email) => setState({...state, email})}
            onSubmitEditing={() => refPasswordInput.current.focus()}
            autoFocus={true}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
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
            onSubmitEditing={() => onLoginSubmit()}
            autoCapitalize="none"
            editable={!pending}
          />
          <Button
            onPress={() => onLoginSubmit()}
            title="Login to your Account"
            disabled={state.email === '' || state.password === ''}
            pending={pending}
            style={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  typedBindActionCreators(
    {
      authLogin: authService.login,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(LoginScreen);
