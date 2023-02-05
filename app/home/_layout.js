import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#1E2632',
            }}
        >
            <Tabs.Screen
                name={'feed'}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name={'home'} size={24} color={color} />,
                    title: 'Feed',
                }}
            />
            <Tabs.Screen
                name={'search'}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name={'search'} size={22} color={color} />,
                    title: 'Search',
                }}
            />
            <Tabs.Screen
                name={'messages'}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name={'envelope'} size={22} color={color} />,
                    title: 'Messages',
                    headerShown: false,
                }}
            />
        </Tabs>
    );
};
