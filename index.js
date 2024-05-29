/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Entry from './src/screens/entry';
import database from './src/dB';
import { AppProvider, UserProvider } from '@realm/react';

const Root = () => (
    // <AppProvider  id='application-0-jcccrxo'>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView>
                    <App />
                </GestureHandlerRootView>
            </PersistGate>
        </Provider> 
    // </AppProvider>

);

AppRegistry.registerComponent(appName, () => Root);
