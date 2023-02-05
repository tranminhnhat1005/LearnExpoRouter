import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Messages = () => {
    return (
        <View>
            <Link href={'/home/messages/cena'}>Chat with Cena</Link>
        </View>
    );
};

export default Messages;
