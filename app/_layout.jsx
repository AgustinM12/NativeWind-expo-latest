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
              title: "Registro"
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
            name='TaskList'
            options={{
              drawerLabel: "Lista de Tareas",
              title: "Lista de Tareas"
            }}
          />

          <Drawer.Screen
            name='EditTask'
            options={{
              drawerLabel: "Editar Tarea",
              title: "Editar Tarea"
            }}
          />

          <Drawer.Screen
            name='AddTask'
            options={{
              drawerLabel: "Agregar Tarea",
              title: "Agregar Tarea"
            }}
          />

        </Drawer>
      </GestureHandlerRootView>
    </AppProvider>
  );
}
