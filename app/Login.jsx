import { Text, View, TextInput, SafeAreaView, ImageBackground, Image, Alert, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useInput } from "../hooks/useForm";
import { AppContext } from "../context/AppContext";

import PasswordInput from "../components/PasswordInput";
import StyledButton from "../components/ButtonStyled";
import owBgImg from "../assets/images/ow.jpeg"
import owLogo from "../assets/images/owLogo.png"
import { useRouter } from "expo-router";


export default function Login() {

    const router = useRouter()

    const { findUser } = useContext(AppContext)

    const { input: userName, setInput: setUserName } = useInput("")
    const { input: userPass, setInput: setUserPass } = useInput("")
    const { input: message, setInput: setMessage } = useInput("")

    const handleUserName = (text) => {
        setUserName(text)
    }

    const handleUserPass = (text) => {
        setUserPass(text)
    }

    const showAlert = () => {
        Alert.alert(
            "Success",
            `¡Loggin Correcto, bienvenido ${userName}!`
        );
        
        router.push("Auth");
    };


    const handleSubmit = () => {
        if (userName !== "" && userPass !== "") {
            if (findUser(userName, userPass)) {
                showAlert()
            } else {
                setMessage("Error: El usuario o contraseña son incorrectas")
            }
        } else {
            setMessage("Error: Completa todos los campos")
        }
    }

    return (
        <View className="flex items-center space-y-60">
            <ImageBackground source={owBgImg} resizeMode="stretch" className="w-[100%] h-full opacity-60"></ImageBackground>

            <View className="flex flex-col flex-1 absolute bg-[#b4c3da] py-8 w-[75%] rounded-md border-2 border-white">

                <View className="flex items-center justify-start">
                    <Image source={owLogo} className="w-20 h-20" />
                </View>

                <Text className="text-white text-2xl text-center pb-3 font-bold flex-1">Login</Text>

                <View className="flex justify-center items-center space-y-2">

                    <TextInput placeholder="Nombre de usuario" className="border-2 border-neutral-500 rounded w-[60%] pl-2 bg-neutral-100 shadow-xl" value={userName} onChangeText={handleUserName} />

                    <SafeAreaView className="space-y-2 w-[60%]">

                        <PasswordInput placeholder={"Contraseña"} value={userPass} setValue={handleUserPass} />
                    </SafeAreaView>
                </View>

                <View className="flex justify-center items-center pt-3 space-y-1">
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Iniciar Sesión"} onPress={handleSubmit} />
                    <View></View>
                    <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"¿Aún no tienes una cuenta?"} onPress={() => router.push("/")} />
                </View>

                <Text className={`text-center ${message?.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</Text>

            </View>
        </View>
    );
}
