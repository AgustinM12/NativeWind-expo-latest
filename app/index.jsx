import { Text, View } from "react-native";
import React from "react";
// App.js

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Index() {
  return (
    <View>
      <Text className="text-blue-700 text-2xl text-center">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
