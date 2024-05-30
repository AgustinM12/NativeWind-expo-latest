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
              drawerLabel: "Registro",
              title: "Registro",
              headerShown: false
            }}
          />

          <Drawer.Screen
            name='Login'
            options={{
              drawerLabel: "Login",
              title: "Login",
              headerShown: false
            }}
          />

          <Drawer.Screen
            name='TaskList'
            options={{
              drawerLabel: "Lista de Tareas",
              title: "Lista de Tareas"
            }}
          />


          <Drawer.Screen
            name='AddTask'
            options={{
              title: "Agregar Tarea",
              drawerLabel: () => null,
              drawerItemStyle: { display: "none" }
            }}
          />

          <Drawer.Screen
            name='Task/[id]'
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: "none" }
            }}
          />

          <Drawer.Screen
            name='Edit/[id]'
            options={{
              drawerLabel: () => null,
              drawerItemStyle: { display: "none" }
            }}
          />

        </Drawer>
      </GestureHandlerRootView>
    </AppProvider>
  );
}
