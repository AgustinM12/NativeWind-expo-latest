import { View, FlatList } from 'react-native';
import { Button, Card, Text, ActivityIndicator } from 'react-native-paper';
import { useFetchOw } from '../../hooks/useFetchOw';
import { ImagesComponent } from '../../components/Images';
import { scale, verticalScale } from 'react-native-size-matters';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function OwWiki() {
    const { darkTheme } = useContext(AppContext)

    const router = useRouter()

    const { data, loading } = useFetchOw(false)

    /* //* colores: */
    /* 72aee2 */
    /* ef4444 */

    const OwCard = ({ item }) => (
        <Card key={item.key} mode='outlined' className={`w-[300] my-3 ${darkTheme ? "bg-blue-500 border-white border-2" : "bg-blue-200"}`}>
            <Card.Title title={`Hero Name: ${item.name}`} subtitle={`Role: ${item.role}`}
                left={() => <ImagesComponent name={item.key} />} titleStyle={{ fontWeight: "bold", }} />

            <Card.Content>
                <Text style={{ fontWeight: 'bold' }}>Picture:</Text>
            </Card.Content>

            <Card.Cover source={{ uri: item.portrait }}
                style={{ height: verticalScale(256), width: scale(256), flex: 1, justifyContent: "center", alignSelf: "center", borderWidth: 2, borderColor: "black" }} />

            <Card.Actions>
                <Button
                    onPress={() => router.push(`Auth/Hero/${item.key}`)}
                    labelStyle={{ color: "white", textShadowRadius: 5, textShadowColor: "black" }}
                    style={{ backgroundColor: "#ffa200", borderColor: "black" }}>
                    View Info
                </Button>

            </Card.Actions>

        </Card >
    )

    if (loading) {
        return (
            <View className={`flex flex-1 justify-center items-center ${darkTheme ? "bg-slate-700" : "bg-neutral-200"}`}>
                <ActivityIndicator animating={true} size="large" color='#ffa200' />
            </View>
        );
    }

    return (
        <>
            {
                data.length > 0 ?
                    (
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <OwCard item={item} />}
                                keyExtractor={item => item.key}
                                className={`pl-[10%] ${darkTheme ? "bg-slate-700" : "bg-blue-100"} `}
                                ItemSeparatorComponent={() => <View className="py-1" />}
                            />
                    ) :
                    (<Text>
                        No hay personajes disponibles
                    </Text>)
            }
        </>
    );
}