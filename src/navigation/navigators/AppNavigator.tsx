import NavigationHeader from '@components/molecules/NavigationHeader';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import {connect} from 'react-redux';
import {AppState} from 'redux/rootReducer';
import MainTabNavigator, {MainTabNavigatorParamList} from './MainTabNavigator';
import PublicNavigator from './PublicNavigator';

type Props = ReturnType<typeof mapStateToProps>;

export type AppNavigatorParamList = {
  Main: MainTabNavigatorParamList;
};

export const defaultStackScreenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {backgroundColor: '#fff'},
  header: (props) => <NavigationHeader {...props} />,
  ...TransitionPresets.SlideFromRightIOS,
};

function AppStack({isLoggedIn}: {isLoggedIn: boolean}) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={defaultStackScreenOptions}>
      {!isLoggedIn && (
        <Stack.Screen name="Public" component={PublicNavigator} />
      )}
      {isLoggedIn && (
        <Stack.Screen
          name="Private"
          component={MainTabNavigator}
          options={{headerShown: true}}
        />
      )}
    </Stack.Navigator>
  );
}

const AppNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <AppStack isLoggedIn={props.isLoggedIn} />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: Boolean(state.auth.token),
});

export default connect(mapStateToProps)(AppNavigator);
