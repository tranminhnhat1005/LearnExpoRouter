import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Profile = () => {
    const router = useRouter();
    const { name, username, caption } = useSearchParams();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen
                options={{
                    headerTintColor: '#FFE030',
                    headerStyle: {
                        backgroundColor: '#1E2632',
                    },
                    title: username,
                }}
            />
            <Text style={{ fontSize: 20 }}>
                Hello I'm {name} (@{username})
            </Text>
            <Text style={{ fontSize: 12 }}>{caption}</Text>
            <Button title={'Go back'} onPress={router.back} />
        </View>
    );
};

export default Profile;
