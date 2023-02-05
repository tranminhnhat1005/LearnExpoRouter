import { AntDesign } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';

export default () => {
    const router = useRouter();
    return (
        <Stack
            screenOptions={{
                headerTintColor: '#1E2632',
                headerStyle: {
                    backgroundColor: '#FFE030',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => (
                    <AntDesign
                        name={'infocirlceo'}
                        color={'#1E2632'}
                        size={22}
                        onPress={() => router.push('./modal')}
                    />
                ),
            }}
        >
            <Stack.Screen name={'index'} options={{ title: 'Home' }} />
            <Stack.Screen
                name={'modal'}
                options={{
                    presentation: 'modal',
                    headerTintColor: '#1E2632',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
            <Stack.Screen name={'home'} options={{ headerShown: false }} />
        </Stack>
    );
};
