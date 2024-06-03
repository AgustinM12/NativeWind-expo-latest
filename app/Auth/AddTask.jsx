import { Text, View, TextInput, Alert } from "react-native";
import React, { useContext } from "react";
import { useInput } from "../../hooks/useForm";
import { AppContext } from "../../context/AppContext";
import StyledButton from "../../components/ButtonStyled";
import { router } from "expo-router";

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Login() {

    const addIcon = (<IconEntypo name="add-to-list" size={15} color="white" />);
    const cancelIcon = (<IconMaterialCommunityIcons name="cancel" size={15} color="white" />);

    const { tasks, addTasks, darkTheme, loged } = useContext(AppContext);

    const { input: title, setInput: setTitle } = useInput("");
    const { input: content, setInput: setContent } = useInput("");
    const { input: message, setInput: setMessage } = useInput("");

    const handleTitle = (text) => {
        setTitle(text);
    };

    const handleContent = (text) => {
        setContent(text);
    };

    const showAlert = () => {
        Alert.alert(
            "Success",
            "Tarea añadida con exito",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Aceptar",
                    onPress: () => console.log("OK Pressed")
                }
            ]
        );
    };

    const handleSubmit = () => {
        if (title.length > 0 && content.length > 0) {
            const taskId = tasks.length + 1;
            const success = addTasks({ id: taskId, title, content, date: new Date(), author: loged?.user });

            if (success) {
                showAlert();
                router.push("Auth")
                handleTitle("")
                handleContent("")
                setMessage("")
            } else {
                setMessage("Error: Fallo al agregar tarea");
            }
        } else {
            setMessage("Error: Completa todos los campos");
        }
    };

    const handleCancel = () => {
        handleTitle("")
        handleContent("")
        setMessage("")
        router.push("Auth")
    };

    return (
        <View className={`flex flex-1 items-center justify-center ${darkTheme ? "bg-slate-700" : "bg-neutral-200"}`}>
            <View className={`flex py-8 w-[75%] rounded-md border-2 ${darkTheme ? "border-white bg-slate-500" : "bg-[#b4c3da] border-slate-400"} `}>
                <Text className="text-white text-2xl text-center pb-3 font-bold">Agregar una tarea</Text>
                <View className="flex justify-center items-center space-y-2">
                    <Text className="text-white font-semibold">Titulo:</Text>
                    <TextInput
                        placeholder="Titulo de la tarea"
                        className="border-2 border-neutral-500 rounded w-[80%] pl-2 bg-neutral-100 shadow-xl"
                        value={title}
                        onChangeText={handleTitle}
                    />
                    <Text className="text-white font-semibold">Contenido:</Text>
                    <TextInput
                        placeholder="Contenido de la tarea"
                        className="border-2 border-neutral-500 rounded w-[80%] pl-2 h-28 bg-neutral-100 shadow-xl"
                        value={content}
                        onChangeText={handleContent}
                    />
                </View>
                <View className="flex flex-row-reverse justify-center items-center pt-8 space-x-3">
                    <StyledButton
                        mainColor={"bg-orange-400"}
                        secondColor={"bg-orange-600"}
                        text={"Agregar"}
                        onPress={handleSubmit}
                        icon={addIcon}
                    />
                    <View></View>
                    <StyledButton
                        mainColor={"bg-orange-400"}
                        secondColor={"bg-orange-600"}
                        text={"Cancelar"}
                        icon={cancelIcon}
                        onPress={handleCancel}
                    />
                </View>
                <Text className={`text-center ${message?.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</Text>
            </View>
        </View>
    );
}
