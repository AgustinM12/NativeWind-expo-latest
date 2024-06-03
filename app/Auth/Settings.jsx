import React, { useContext } from 'react'
import { View } from 'react-native'
import { AppContext } from '../../context/AppContext'
import StyledButton from '../../components/ButtonStyled'
import { router } from 'expo-router'

const Settings = () => {

    const { darkTheme, handleTheme, logout, loged } = useContext(AppContext)

    const handleLogout = () => {
        logout()
        router.push("/Login")
        console.log(loged);
    }

    return (
        <View className={`flex flex-1 justify-center, items-center space-y-2 py-5 ${darkTheme ? "bg-slate-700" : "bg-neutral-200"}`}>
            <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={`Cambiar tema: ${darkTheme ? "claro" : "oscuro"}`} onPress={handleTheme} />
            <View></View>
            <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={"Logout"} onPress={handleLogout} />
        </View>
    )
}

export default Settings
