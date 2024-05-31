import React, { useContext, useEffect } from 'react'
import { useRouter } from 'expo-router';

import { AppContext } from '../../context/AppContext'

import ButoonStyled from "../../components/ButtonStyled"
import { FlatList, View, Text } from 'react-native'

import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconEntypo from 'react-native-vector-icons/Entypo';
const editIcon = (<IconFoundation name="page-edit" size={15} color="white" />)
const reviewIcon = (<IconFontisto name="preview" size={15} color="white" />)
const addIcon = (<IconEntypo name="add-to-list" size={15} color="white" />)

export default function TaskList() {

    const { darkTheme } = useContext(AppContext)

    router = useRouter()

    const taskList = ({ item }) => (
        <View className={`flex justify-center items-center  p-2 rounded-md min-w-full border-2 ${!darkTheme ? "bg-neutral-300 border-gray-400" : "bg-slate-600 border-white"} `} key={item.id}>
            <Text className={`text-center font-semibold underline ${darkTheme && "text-white"}`}>{item.title}</Text>
            <View className="flex flex-col">
                <Text className={`text-center ${darkTheme && "text-white"}`}>{item.content}</Text>
                <View className="flex flex-row justify-center space-x-3">
                    <ButoonStyled text={"Editar"} icon={editIcon} mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} onPress={() => router.push(`Auth/Edit/${item.id}`)} />
                    <View></View>
                    <ButoonStyled text={"Ver"} icon={reviewIcon} mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} onPress={() => router.push(`Auth/Task/${item.id}`)} />
                </View>
            </View>
        </View>
    );

    const { tasks } = useContext(AppContext)

    useEffect(() => {
        console.log("Se actualizo", tasks);
    }, [tasks])

    return (
        <View className={`flex flex-1 justify-center items-center p-5 ${darkTheme ? "bg-slate-700" : "bg-red"}`}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={taskList}
                ItemSeparatorComponent={() => <View className="py-2" />}
            />
            <View className="">
                < ButoonStyled text={"Agregar Tarea"} icon={addIcon} mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} onPress={() => router.push('Auth/AddTask')} />
            </View>
        </View >

    )
}
