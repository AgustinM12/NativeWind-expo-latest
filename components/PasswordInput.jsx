import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { useToggle } from '../hooks/useToggle';

export default function PasswordInput({ placeholder, value, setValue }) {

    const { toggle: togglePass, handleToggle: handleTogglePass } = useToggle()

    return (
        <View className="flex flex-row items-center space-x-1">
            <TextInput placeholder={placeholder} className="border-2 border-neutral-500 rounded w-full bg-neutral-100 shadow-xl pl-2" secureTextEntry={togglePass} onChangeText={setValue} value={value} />

            <TouchableOpacity
                onPress={handleTogglePass}
            >
                <View className="border-2 rounded-md bg-neutral-100 shadow-xl">
                    <Icon name={!togglePass ? "eye-slash" : "eye"} size={20} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    )
}



