import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Button, Text, View } from 'react-native';

const MessageRoom = () => {
    const router = useRouter();
    const { id } = useSearchParams();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen
                options={{
                    headerTintColor: '#FFE030',
                    headerStyle: {
                        backgroundColor: '#1E2632',
                    },
                    title: id,
                }}
            />
            <Text style={{ fontSize: 20 }}>Cena messages</Text>
            <Button title={'Go back'} onPress={router.back} />
        </View>
    );
};

export default MessageRoom;
