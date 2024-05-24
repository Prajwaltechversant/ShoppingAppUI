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


const Root = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <GestureHandlerRootView>
                <App/>
            </GestureHandlerRootView>
        </PersistGate>
    </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
