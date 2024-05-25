import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { FlatList, View, Text } from 'react-native-web'
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function UserList() {
    const renderItem = ({ item }) => (
        <View className="flex justify-center items-center">
            <Text >{"Usuario " + item.id + ": { "}</Text>
            <Text >{item.userName}</Text>
            <Text >{item.userPass + " }"}</Text>
        </View>
    );

    const { list } = useContext(AppContext)

    return (
        <View className="flex justify-center items-center">
            <FlatList
                data={list}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>

    )
}
