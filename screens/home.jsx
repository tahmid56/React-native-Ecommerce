import { View, Text } from 'react-native';
import { defaultStyle } from '../styles/styles';
import Header from '../components/Header';

const Home = () => {
    return (
        <View style={defaultStyle}>
            {/* Header */}
            <Header />
            <View>
                <Text style={{ fontSize: 25 }}>Our</Text>
                <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
            </View>

            <Text>Home</Text>
        </View>
    );
};

export default Home;
