import { Alert, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import StyledButton from "../../../components/ButtonStyled";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Drawer } from 'expo-router/drawer';

import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const editIcon = (<IconFoundation name="page-edit" size={15} color="white" />)
const deleteIcon = (<IconMaterialCommunityIcons name="delete-forever" size={15} color="white" />)

export default function Login() {
    const router = useRouter()
    const { id } = useLocalSearchParams();
    const { findTask, deleteTask, darkTheme } = useContext(AppContext)
    const [task, setTask] = useState(null)

    const { tarea, indice } = findTask(id)

    console.log("index ", tarea, indice);

    useEffect(() => {
        if (id && tarea) {
            setTask(tarea)
        }
    }, [id])

    const handleDelete = () => {
        deleteTask(indice)
        router.push("Auth")
    }

    const showAlert = () => {
        Alert.alert(
            "Alerta",
            "¿Esta seguro que quiere eliminar esta tarea?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Aceptar",
                    onPress: () => handleDelete()
                }
            ]
        );
    };

    return (
        <>
            <Drawer.Screen options={{
                drawerLabel: "Tareas",
                title: "Tarea N° " + id
            }} />
            <View className={`flex flex-1 items-center pt-[35%] ${darkTheme ? "bg-slate-700" : "bg-neutral-200"}`}>

                <View className={`flex py-12 w-[85%] rounded-md border-2 ${darkTheme ? "border-white bg-slate-500" : "border-slate-400 bg-[#b4c3da]"}`}>

                    <Text className="text-white text-2xl text-center pb-3 font-bold ">{task?.title}</Text>

                    <View className="border-2 border-gray-400 rounded-md m-5">
                        <Text className="text-center text-white font-semibold p-4">{task?.content}</Text>
                    </View>

                    <View>
                        <Text className="text-center text-white font-semibold p-4">Fecha de creacion: {JSON.stringify(task?.date)?.slice(1,-1)}</Text>
                        <Text className="text-center text-white font-semibold p-4">Autor: {task?.author}</Text>
                    </View>


                    <View className="flex flex-row justify-center items-center pt-6 space-x-3">
                        <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Editar"} icon={editIcon} onPress={() => router.push(`Auth/Edit/${task.id}`)} />
                        <View></View>
                        <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Eliminar"} icon={deleteIcon} onPress={showAlert} />
                    </View>

                </View>
            </View>
        </>
    );
}
