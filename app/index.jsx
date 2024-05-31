import { Text, View, TextInput, SafeAreaView, ImageBackground, Image  } from "react-native";
import React, { useContext } from "react";
import { useInput } from "../hooks/useForm";
import { AppContext } from "../context/AppContext";

import PasswordInput from "../components/PasswordInput";
import StyledButton from "../components/ButtonStyled";
import owBgImg from "../assets/images/ow.jpeg"
import owLogo from "../assets/images/owLogo.png"
import { useRouter } from "expo-router";

export default function Index() {

  const router = useRouter()

  const { handleUser, user, loged } = useContext(AppContext)

  const { input: userName, setInput: setUserName } = useInput("")
  const { input: userPass, setInput: setUserPass } = useInput("")
  const { input: pass2, setInput: setPass2 } = useInput("")
  const { input: message, setInput: setMessage } = useInput("")

  const handleUserName = (text) => {
    setUserName(text)
  }

  const handleUserPass = (text) => {
    setUserPass(text)
  }

  const handlePass2 = (text) => {
    setPass2(text)
  }

  const handleSubmit = () => {
    if (userName !== "" && userPass !== "" && pass2 !== "") {
      if (userPass == pass2) {
        handleUser({ "id": user.length + 1, "userName": userName, "userPass": userPass })
        router.push("/Login")
      } else {
        setMessage("Error: Las contraseñas no coinciden")
      }
    } else {
      setMessage("Error: Completa todos los campos")
    }
  }

  return (
    <>
      <View className="flex items-center space-y-60">

        <ImageBackground source={owBgImg} resizeMode="stretch" className="h-full w-screen opacity-60"></ImageBackground>

        <View className="flex flex-col flex-1 absolute bg-[#b4c3da] py-8 w-[75%] rounded-md border-2 border-white">

          <View className="flex items-center justify-start">
            <Image source={owLogo} className="w-20 h-20" />
          </View>

          <Text className="text-white text-2xl text-center pb-3 font-bold flex-1">Registrarse</Text>

          <View className="flex justify-center items-center space-y-2">

            <TextInput placeholder="Nombre de usuario" className="border-2 border-neutral-500 rounded w-[60%] pl-2 bg-neutral-100 shadow-xl" value={userName} onChangeText={handleUserName} />

            <SafeAreaView className="space-y-2 w-[60%]">

              <PasswordInput placeholder={"Contraseña"} value={userPass} setValue={handleUserPass} />
              <View></View>
              <PasswordInput placeholder={"Confirma tu contraseña"} value={pass2} setValue={handlePass2} />

            </SafeAreaView>
          </View>

          <View className="flex justify-center items-center pt-3 space-y-1">
            <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Registrarse"} onPress={handleSubmit} />
            <View></View>
            <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"¿Ya tienes una cuenta?"} onPress={() => router.push("/Login")} />
          </View>

          <Text className={`text-center ${message?.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</Text>

        </View>
      </View>
    </>
  );
}
