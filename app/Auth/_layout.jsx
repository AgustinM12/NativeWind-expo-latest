import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';

export default function Layout() {

  const { darkTheme } = useContext(AppContext)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>

        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: "Lista de tareas",
            title: "Lista de tareas",
            drawerStyle: {
              backgroundColor: darkTheme ? '#334155' : "white"  // Color de fondo del Drawer
            },
            drawerActiveTintColor: darkTheme ? '#f97316' : "orange", // Color del texto de los elementos activos
            drawerInactiveTintColor: darkTheme ? "#f5f5f5" : null, // Color del texto de los elementos inactivos
            headerStyle: {
              backgroundColor: darkTheme ? '#0f172a' : "white"
            },
            headerTintColor: darkTheme ? 'white' : "black"
          }}
        />

        <Drawer.Screen
          name='AddTask'
          options={{
            title: "Agregar Tarea",
            drawerStyle: {
              backgroundColor: darkTheme ? '#334155' : "white"  // Color de fondo del Drawer
            },
            drawerActiveTintColor: darkTheme ? '#f97316' : "orange", // Color del texto de los elementos activos
            drawerInactiveTintColor: darkTheme ? "#f5f5f5" : null, // Color del texto de los elementos inactivos
            headerStyle: {
              backgroundColor: darkTheme ? '#0f172a' : "white"
            },
            headerTintColor: darkTheme ? 'white' : "black"
          }}
        />

        <Drawer.Screen
          name='OwWiki'
          options={{
            drawerLabel: "Overwatch wiki",
            title: "Overwatch wiki",
            drawerStyle: {
              backgroundColor: darkTheme ? '#334155' : "white"  // Color de fondo del Drawer
            },
            drawerActiveTintColor: darkTheme ? '#f97316' : "orange", // Color del texto de los elementos activos
            drawerInactiveTintColor: darkTheme ? "#f5f5f5" : null, // Color del texto de los elementos inactivos
            headerStyle: {
              backgroundColor: darkTheme ? '#0f172a' : "white"
            },
            headerTintColor: darkTheme ? 'white' : "black"
          }}
        />

        <Drawer.Screen
          name='Settings'
          options={{
            drawerLabel: "Ajustes",
            title: "Ajustes",
            drawerStyle: {
              backgroundColor: darkTheme ? '#334155' : "white"  // Color de fondo del Drawer
            },
            drawerActiveTintColor: darkTheme ? '#f97316' : "orange", // Color del texto de los elementos activos
            drawerInactiveTintColor: darkTheme ? "#f5f5f5" : null, // Color del texto de los elementos inactivos
            headerStyle: {
              backgroundColor: darkTheme ? '#0f172a' : "white"
            },
            headerTintColor: darkTheme ? 'white' : "black"
          }}
        />

        <Drawer.Screen
          name='Task/[id]'
          options={{
            drawerItemStyle: { display: "none" },
            drawerStyle: {
              backgroundColor: darkTheme ? '#334155' : "white"  // Color de fondo del Drawer
            },
            drawerActiveTintColor: darkTheme ? '#f97316' : "orange", // Color del texto de los elementos activos
            drawerInactiveTintColor: darkTheme ? "#f5f5f5" : null, // Color del texto de los elementos inactivos
            headerStyle: {
              backgroundColor: darkTheme ? '#0f172a' : "white"
            },
            headerTintColor: darkTheme ? 'white' : "black"
          }}
        />


        <Drawer.Screen
          name='Edit/[id]'
          options={{
            title: "Editar tarea",
            drawerItemStyle: { display: "none" },
            drawerStyle: {
              backgroundColor: darkTheme ? '#334155' : "white"  // Color de fondo del Drawer
            },
            drawerActiveTintColor: darkTheme ? '#f97316' : "orange", // Color del texto de los elementos activos
            drawerInactiveTintColor: darkTheme ? "#f5f5f5" : null, // Color del texto de los elementos inactivos
            headerStyle: {
              backgroundColor: darkTheme ? '#0f172a' : "white"
            },
            headerTintColor: darkTheme ? 'white' : "black"
          }}
        />

        <Drawer.Screen
          name='Hero/[id]'
          options={{
            drawerLabel: () => null,
            drawerItemStyle: { display: "none" },
            drawerStyle: {
              backgroundColor: darkTheme ? '#334155' : "white"  // Color de fondo del Drawer
            },
            drawerActiveTintColor: darkTheme ? '#f97316' : "orange", // Color del texto de los elementos activos
            drawerInactiveTintColor: darkTheme ? "#f5f5f5" : null, // Color del texto de los elementos inactivos
            headerStyle: {
              backgroundColor: darkTheme ? '#0f172a' : "white"
            },
            headerTintColor: darkTheme ? 'white' : "black"
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}
