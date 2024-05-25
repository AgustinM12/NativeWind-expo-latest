import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { AppProvider } from '../context/AppContext';

export default function Layout() {

  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name='index'
            options={{
              drawerLabel: "Register",
              title: "Register"
            }}
          />

          <Drawer.Screen
            name='Login'
            options={{
              drawerLabel: "Login",
              title: "Login"
            }}
          />

          <Drawer.Screen
            name='List'
            options={{
              drawerLabel: "UserList",
              title: "UserList"
            }}
          />

        </Drawer>
      </GestureHandlerRootView>
    </AppProvider>
  );
}
