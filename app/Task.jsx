import { Text, View, TextInput, Image } from "react-native";
import React, { useContext } from "react";
import { useInput } from "../hooks/useForm";
import { AppContext } from "../context/AppContext";
import StyledButton from "../components/ButtonStyled";

import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const editIcon = (<IconFoundation name="page-edit" size={15} color="white" />)
const deleteIcon = (<IconMaterialCommunityIcons name="delete-forever" size={15} color="white" />)

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

    const titulo = "Lorem, ipsum dolor."
    const contenido = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ad debitis explicabo sint! Similique amet, pariatur dolores impedit sequi dolorum!"

    return (
        <View className="min-h-screen max-h-screen max-w-screen flex items-center pt-[35%]">

            <View className="flex  bg-[#b4c3da] py-12 w-[85%] rounded-md border-2 border-white">

                <Text className="text-white text-2xl text-center pb-3 font-bold ">{titulo}</Text>

                <View className="border-2 border-gray-400 rounded-md m-5">
                    <Text className="text-center text-white font-semibold p-4">{contenido}</Text>
                </View>

                <View className="flex flex-row justify-center items-center pt-6 space-x-3">
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Editar"} onPress={handleSubmit} icon={editIcon} />
                    <View></View>
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Eliminar"} icon={deleteIcon} />
                </View>

                <Text className={`text-center ${message?.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</Text>

            </View>
        </View>
    );
}
