import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { AppContext } from '../../context/AppContext'
import StyledButton from '../../components/ButtonStyled'

const Settings = () => {

    const { darkTheme, handleTheme } = useContext(AppContext)

    return (
        <View className={`flex flex-1 justify-center, items-center py-5 ${darkTheme ? "bg-slate-700" : "bg-neutral-200"}`}>
            <StyledButton mainColor={"bg-orange-400"} secondColor={"bg-orange-600"} text={`Cambiar tema: ${darkTheme ? "claro" : "oscuro"}`} onPress={handleTheme} />
        </View>
    )
}

export default Settings
