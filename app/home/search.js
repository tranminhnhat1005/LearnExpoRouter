import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const users = [
    {
        username: 'John Cena',
        name: 'Cena',
        caption: 'Never give up baby!',
    },
    {
        username: 'Mèo hoang đẹp',
        name: 'Sen',
        caption: 'Mỹ Diệu, Mỹ Linh, Nâu, Mập, Vằn chào mọi người!!!',
    },
    {
        username: 'Ngáo ộp',
        name: 'Hút kỳ',
        caption: 'Ngoạm cái giờ -.-',
    },
];

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Mạng xã hội thú cưng MeoGau</Text>
                <Text style={styles.subtitle}>Ứng dụng đang phát triển.</Text>
                {users.map((user) => (
                    <Link key={user.username} href={`/${user.username}`} style={styles.link}>
                        Trang cá nhân của {user.name}
                    </Link>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        maxWidth: 960,
        marginHorizontal: 'auto',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 20,
        color: '#38434D',
        marginBottom: 20,
    },
    link: {
        fontSize: 26,
        fontWeight: '700',
        marginVertical: 10,
    },
});

export default Search;
