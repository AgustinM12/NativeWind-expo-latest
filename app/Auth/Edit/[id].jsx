import { Text, View, TextInput, Alert } from "react-native";
import React, { useContext, useEffect } from "react";
import { useInput } from "../../hooks/useForm";
import { AppContext } from "../../context/AppContext";
import StyledButton from "../../components/ButtonStyled";
import { Drawer } from "expo-router/drawer";
import { useRouter, useLocalSearchParams } from "expo-router";

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const saveIcon = (<IconFontAwesome name="save" size={15} color="white" />)
const cancelIcon = (<IconMaterialCommunityIcons name="cancel" size={15} color="white" />)


export default function Login() {
    const router = useRouter()
    const { id } = useLocalSearchParams();
    const { editTask, findTask } = useContext(AppContext)
    const { tarea, indice } = findTask(id)

    const { input: title, setInput: setTitle } = useInput("")
    const { input: content, setInput: setContent } = useInput("")
    const { input: message, setInput: setMessage } = useInput("");

    const handleTitle = (text) => {
        setTitle(text)
    }

    const handleContent = (text) => {
        setContent(text)
    }

    const handleSubmit = () => {
        if (title !== "" || content !== "") {
            editTask(indice, { "title": title, "content": content })
            router.push("/TaskList")
        } else {
            setMessage("Error: Completa todos los campos")
        }
    }

    const showAlert = () => {
        Alert.alert(
            "Alerta",
            "¿Seguro que desea editar la tarea?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Aceptar",
                    onPress: () => handleSubmit()
                }
            ]
        );
    };

    useEffect(() => {
        if (tarea) {
            handleTitle(tarea?.title)
            handleContent(tarea?.content)
        }
    }, [tarea, id])

    return (
        <View className="min-h-screen max-h-screen max-w-screen flex items-center pt-[35%]">

            <View className="flex  bg-[#b4c3da] py-8 w-[75%] rounded-md border-2 border-white">

                <Text className="text-white text-2xl text-center pb-3 font-bold ">Editar Tarea</Text>

                <View className="flex justify-center items-center space-y-2">

                    <Text className="text-white font-semibold">Nuevo Titulo:</Text>
                    <TextInput placeholder="Titulo de la tarea" className="border-2 border-neutral-500 rounded w-[80%] pl-2 bg-neutral-100 shadow-xl" value={title} onChangeText={handleTitle} />

                    <Text className="text-white font-semibold">Nuevo Contenido:</Text>
                    <TextInput placeholder="Contenido de la tarea" className="border-2 border-neutral-500 rounded w-[80%] h-28 pl-2 bg-neutral-100 shadow-xl" multiline={true} numberOfLines={5} value={content} onChangeText={handleContent} />

                </View>

                <View className="flex flex-row-reverse justify-center items-center pt-8 space-x-3">
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Guardar"} onPress={showAlert} icon={saveIcon} />
                    <View></View>
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Cancelar"} icon={cancelIcon} onPress={()=>router.push("/TaskList")} />
                </View>

                <Text className={`text-center ${message?.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</Text>

            </View>
        </View>
    );
}
