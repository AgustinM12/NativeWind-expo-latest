import { Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import StyledButton from "../../components/ButtonStyled";
import { useLocalSearchParams } from "expo-router";
import { Drawer } from 'expo-router/drawer';

import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const editIcon = (<IconFoundation name="page-edit" size={15} color="white" />)
const deleteIcon = (<IconMaterialCommunityIcons name="delete-forever" size={15} color="white" />)

export default function Login() {
    const { id } = useLocalSearchParams();
    const { findTask } = useContext(AppContext)
    const [task, setTask] = useState(null)

    const taskInfo = findTask(id)

    console.log(taskInfo);

    useEffect(() => {
        if (id) {
            setTask(taskInfo)
        }
    }, [id])

    return (
        <>
            <Drawer.Screen options={{
                drawerLabel: "Tareas",
                title: "Tarea N° "+ id
            }} />
            <View className="min-h-screen max-h-screen max-w-screen flex items-center pt-[35%]">

                <View className="flex  bg-[#b4c3da] py-12 w-[85%] rounded-md border-2 border-white">

                    <Text className="text-white text-2xl text-center pb-3 font-bold ">{task?.title}</Text>

                    <View className="border-2 border-gray-400 rounded-md m-5">
                        <Text className="text-center text-white font-semibold p-4">{task?.content}</Text>
                    </View>

                    <View className="flex flex-row justify-center items-center pt-6 space-x-3">
                        <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Editar"} icon={editIcon} />
                        <View></View>
                        <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Eliminar"} icon={deleteIcon} />
                    </View>

                </View>
            </View>
        </>
    );
}
