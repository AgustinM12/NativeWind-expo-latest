import { View, Image, FlatList, Alert } from "react-native";
import { useFetchOw } from "../../../hooks/useFetchOw";
import { Divider, Text, List, ActivityIndicator } from "react-native-paper";
import { scale, verticalScale } from 'react-native-size-matters';
import { ImagesComponent } from "../../../components/Images";
import YoutubePlayer from "react-native-youtube-iframe";
import { useState, useCallback, useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { AppContext } from "../../../context/AppContext";

export default function CharaInfoPage() {

    const { darkTheme } = useContext(AppContext)

    const { id } = useLocalSearchParams();

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const { data, loading } = useFetchOw(id);

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator animating={true} size="large" color='#ffa200' />
            </View>
        );
    }

    const hero = "Hero: " + id[0].toUpperCase() + id.slice(1)

    return (
        <>
            <Drawer.Screen options={{
                title: hero
            }} />
            <FlatList
                data={[
                    { key: 'name', value: data.name },
                    { key: 'role', value: data.role },
                    { key: 'description', value: data.description },
                    { key: 'location', value: data.location },
                    { key: 'birthday', value: data.birthday },
                    { key: 'age', value: data.age },
                    { key: 'portrait', value: data.portrait },
                    { key: 'summary', value: data?.story?.summary },
                    { key: 'abilities', value: data.abilities },
                    { key: 'chapters', value: data?.story?.chapters },
                    { key: 'mediaLink', value: data?.story?.media?.link }
                ]}
                renderItem={({ item }) => {
                    switch (item.key) {
                        case 'abilities':
                            return (
                                <>
                                    <Text key="abilitiesHeader" className={`underline text-center ${darkTheme ? "text-white bg-slate-500" : "text-black"}`}>Abilities:</Text>
                                    <Divider key="abilitiesDivider" />
                                    <FlatList
                                        data={item.value}
                                        renderItem={({ item }) => (
                                            <List.Accordion className={`${darkTheme && "bg-slate-600"}`} titleStyle={darkTheme && { color: "white" }} title={item.name} id={item.name} left={() => <ImagesComponent url={item.icon} />}>
                                                <Text className={`px-10 ${darkTheme && "bg-gray-500 text-white"}`} >{item.description}</Text>
                                            </List.Accordion>
                                        )}
                                        keyExtractor={(item) => item.name}
                                    />
                                </>
                            );
                        case 'chapters':
                            return (
                                <>
                                    <Text key="historyHeader" className={`underline text-center ${darkTheme ? "text-white bg-slate-500" : "text-black"}`}>Stories:</Text>
                                    <Divider key="historyDivider" />
                                    <FlatList
                                        data={item.value}
                                        renderItem={({ item }) => (
                                            <List.Accordion title={item.title} id={item.title} className={darkTheme && "bg-slate-600"} titleStyle={darkTheme && { color: "white" }}>
                                                <Text className={`px-10 ${darkTheme ? "text-white bg-gray-500" : "text-black"}`}>{item.content}</Text>
                                                <View children={`${darkTheme && "bg-slate-500"}`} style={{ width: scale(350), height: verticalScale(350), flex: 1, justifyContent: "center", alignSelf: "center" }}>
                                                    <Image
                                                        source={{ uri: item.picture }}
                                                        style={{ aspectRatio: 1, resizeMode: "stretch", borderColor: "#ffa200", borderWidth: 2, borderRadius: 25, margin: 15, }}
                                                    />
                                                </View>
                                            </List.Accordion>
                                        )}
                                        className={darkTheme && "bg-slate-500"}
                                        keyExtractor={(item) => item.title}
                                    />
                                </>
                            );
                        case 'portrait':
                            return (
                                <View className={`${darkTheme && "bg-slate-500"}`}>
                                    <Text className={`text-center underline ${darkTheme ? "text-white" : "text-black"}`}>{item.key[0].toUpperCase() + item.key.slice(1)}:</Text>
                                    <Image
                                        source={{ uri: item.value }}
                                        style={{ aspectRatio: 1, resizeMode: "stretch", borderColor: "#ffa200", borderWidth: 2, borderRadius: 25, marginVertical: 15, marginLeft: 'auto', marginRight: 'auto', backgroundColor:"white" }}
                                    />
                                </View>
                            )
                        case 'mediaLink':
                            return (
                                <View className={`p-5 ${darkTheme ? "bg-slate-500" : "text-black"}`}>
                                    <Text className={`${darkTheme ? "text-white bg-slate-500" : "text-black"} text-center underline pb-3`} >Introduction Cinematic:</Text>
                                    <YoutubePlayer
                                        height={300}
                                        play={playing}
                                        videoId={item.value.slice(17)}
                                        onChangeState={onStateChange}
                                    />
                                </View>
                            )
                        default:
                            return (
                                <>
                                    <Text className={`${darkTheme ? "text-white bg-slate-500" : "text-black"}`} key={item.key}>{item.key[0].toUpperCase() + item.key.slice(1)}: {item.value}</Text>
                                    <Divider />
                                </>
                            );
                    }
                }}
            />
        </>
    );
};