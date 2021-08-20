import AppNavigator from '@navigation/navigators/AppNavigator';
import res from '@res';
import React, {Suspense} from 'react';
import {setCustomText} from 'react-native-global-props';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from 'redux/store';

setCustomText({
  style: {
    fontFamily: res.fonts.regular,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={null}>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </Suspense>
      </PersistGate>
    </Provider>
  );
};

export default App;
