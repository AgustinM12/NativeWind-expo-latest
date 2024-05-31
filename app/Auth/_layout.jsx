import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
// import { AppProvider } from '../context/AppContext';

export default function Layout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>

        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: "Lista de tareas",
            title: "Lista de tareas",
          }}
        />

        <Drawer.Screen
          name='AddTask'
          options={{
            title: "Agregar Tarea",
          }}
        />

        <Drawer.Screen
          name='OwWiki'
          options={{
            drawerLabel: "Overwatch wiki",
            title: "Overwatch wiki",
          }}
        />

        <Drawer.Screen
          name='Task/[id]'
          options={{
            headerShown: false, drawerLabel: () => null,
            drawerItemStyle: { display: "none" }
          }}
        />


        <Drawer.Screen
          name='Edit/[id]'
          options={{
            headerShown: false, drawerLabel: () => null,
            drawerItemStyle: { display: "none" }
          }}
        />

        <Drawer.Screen
          name='Hero/[id]'
          options={{ 
            drawerLabel: () => null,
            drawerItemStyle: { display: "none" }
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}
