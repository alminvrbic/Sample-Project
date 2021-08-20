import Button from '@components/atoms/Button';
import {CommonActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Dispatch} from '@reduxjs/toolkit';
import authService from '@services/authService';
import typedBindActionCreators from '@utils/typed-bind-action-creators';
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

interface Props extends ReturnType<typeof mapDispatchToProps> {
  navigation: StackNavigationProp<any>;
}

class LogoutScreen extends React.Component<Props> {
  resetNavigationStack() {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Public'}],
      }),
    );
  }

  logout = () => {
    this.props.logout().then(() => this.resetNavigationStack());
  };

  render() {
    return (
      <View style={styles.root}>
        <Button onPress={() => this.logout()} title={'Logout'} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  typedBindActionCreators(
    {
      logout: authService.logout,
    },
    dispatch,
  );

export default connect(null, mapDispatchToProps)(LogoutScreen);
