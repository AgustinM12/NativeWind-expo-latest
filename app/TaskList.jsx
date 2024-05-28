import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { FlatList, View, Text } from 'react-native'
import ButoonStyled from "../components/ButtonStyled"
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Link, useRouter } from 'expo-router';
const editIcon = (<IconFoundation name="page-edit" size={15} color="white" />)
const reviewIcon = (<IconFontisto name="preview" size={15} color="white" />)
const addIcon = (<IconEntypo name="add-to-list" size={15} color="white" />)

export default function TaskList() {

    router = useRouter()

    const taskList = ({ item }) => (
        <View className="flex justify-center items-center bg-neutral-300 p-2 rounded-md min-w-full border-2 border-gray-400">
            <Text className="text-center font-semibold underline">{item.title}</Text>
            <View className="flex flex-col">
                <Text className="text-center">{item.content}</Text>
                <View className="flex flex-row space-x-3">
                    <ButoonStyled text={"Editar"} icon={editIcon} mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} />
                    <View></View>
                    <ButoonStyled text={"Ver"} icon={reviewIcon} mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} />
                </View>
            </View>
        </View>
    );

    const { tasks } = useContext(AppContext)

    return (
        <View className="flex justify-center items-center p-5 space-y-3">
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={taskList}
            />
            <View>
                < ButoonStyled text={"Agregar Tarea"} icon={addIcon} mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} onPress={() => router.push('/AddTask')} />
            </View>
        </View >

    )
}