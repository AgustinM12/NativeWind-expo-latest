import { Text, View, TextInput, Alert } from "react-native";
import React, { useContext } from "react";
import { useInput } from "../hooks/useForm";
import { AppContext } from "../context/AppContext";
import StyledButton from "../components/ButtonStyled";

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const addIcon = (<IconEntypo name="add-to-list" size={15} color="white" />)
const cancelIcon = (<IconMaterialCommunityIcons name="cancel" size={15} color="white" />)


export default function Login() {

    const { addTasks } = useContext(AppContext)

    const { input: title, setInput: setTitle } = useInput("")
    const { input: content, setInput: setContent } = useInput("")
    const { input: message, setInput: setMessage } = useInput("")

    const handleTitle = (text) => {
        setTitle(text)
    }

    const handleContent = (text) => {
        setContent(text)
    }

    const handleSubmit = () => {
        if (title !== "" && content !== "") {
            if (addTasks({ "title": title, "content": content })) {
                setMessage("Success: Login correcto")
            } else {
                setMessage("Error: El usuario o contraseña son incorrectas")
            }
        } else {
            setMessage("Error: Completa todos los campos")
        }
    }

    return (
        <View className="min-h-screen max-h-screen max-w-screen flex items-center pt-[35%]">

            <View className="flex  bg-[#b4c3da] py-8 w-[75%] rounded-md border-2 border-white">

                <Text className="text-white text-2xl text-center pb-3 font-bold ">Agregar una tarea</Text>

                <View className="flex justify-center items-center space-y-2">

                    <Text className="text-white font-semibold">Titulo:</Text>
                    <TextInput placeholder="Titulo de la tarea" className="border-2 border-neutral-500 rounded w-[80%] pl-2 bg-neutral-100 shadow-xl" value={title} onChangeText={handleTitle} />

                    <Text className="text-white font-semibold">Contenido:</Text>
                    <TextInput placeholder="Contenido de la tarea" className="border-2 border-neutral-500 rounded w-[80%] h-28 pl-2 bg-neutral-100 shadow-xl" value={content} onChangeText={handleContent} />

                </View>

                <View className="flex flex-row justify-center items-center pt-8 space-x-3">
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Agregar"} onPress={handleSubmit} icon={addIcon} />
                    <View></View>
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Cancelar"} icon={cancelIcon} />
                </View>

                <Text className={`text-center ${message?.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</Text>

            </View>
        </View>
    );
}
