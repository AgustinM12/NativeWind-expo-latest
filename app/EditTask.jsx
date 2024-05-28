import { Text, View, TextInput, Image } from "react-native";
import React, { useContext } from "react";
import { useInput } from "../hooks/useForm";
import { AppContext } from "../context/AppContext";
import StyledButton from "../components/ButtonStyled";

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const saveIcon = (<IconFontAwesome name="save" size={15} color="white" />)
const cancelIcon = (<IconMaterialCommunityIcons name="cancel" size={15} color="white" />)


export default function Login() {

    const { handleList, findUser } = useContext(AppContext)

    const { input: userName, setInput: setUserName } = useInput("")
    const { input: userPass, setInput: setUserPass } = useInput("")
    const { input: message, setInput: setMessage } = useInput("")

    const handleUserName = (text) => {
        setUserName(text)
    }

    const handleUserPass = (text) => {
        setUserPass(text)
    }

    const handleSubmit = () => {
        if (userName !== "" && userPass !== "") {
            if (findUser(userName, userPass)) {
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

                <Text className="text-white text-2xl text-center pb-3 font-bold ">Editar Tarea</Text>

                <View className="flex justify-center items-center space-y-2">

                    <Text className="text-white font-semibold">Nuevo Titulo:</Text>
                    <TextInput placeholder="Titulo de la tarea" className="border-2 border-neutral-500 rounded w-[80%] pl-2 bg-neutral-100 shadow-xl" value={userName} onChangeText={handleUserName} />

                    <Text className="text-white font-semibold">Nuevo Contenido:</Text>
                    <TextInput placeholder="Contenido de la tarea" className="border-2 border-neutral-500 rounded w-[80%] h-28 pl-2 bg-neutral-100 shadow-xl" multiline={true} numberOfLines={5} value={userName} onChangeText={handleUserName} />

                </View>

                <View className="flex flex-row justify-center items-center pt-8 space-x-3">
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Guardar"} onPress={handleSubmit} icon={saveIcon} />
                    <View></View>
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Cancelar"} icon={cancelIcon} />
                </View>

                <Text className={`text-center ${message?.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</Text>

            </View>
        </View>
    );
}
