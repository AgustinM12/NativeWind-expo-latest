import React from 'react';
import { Text, Pressable } from 'react-native';
import { View } from 'react-native-web';

export default function StyledButton({ text, onPress }) {
    return (
        <Pressable
            className={({ pressed }) =>
                pressed ? 'bg-orange-600 transition-all duration-500' : 'bg-orange-400 transition-all duration-500'
            }
            onPress={onPress}
        >
            {({ pressed }) => (
                <Text className={`text-white text-center font-semibold p-1 rounded-md transition-all duration-300 shadow-xl ${pressed ? 'bg-orange-600' : 'bg-orange-400'}`}>
                    {text}
                </Text>
            )}
        </Pressable>
    );
}
