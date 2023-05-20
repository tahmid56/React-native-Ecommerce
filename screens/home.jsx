import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Avatar, Button } from 'react-native-paper';
import { useState } from 'react';
import SearchModal from '../components/SearchModal';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';

const categories = [
    { name: 'Hello', _id: '2134' },
    { name: 'Hello1', _id: '134' },
    { name: 'Hello2', _id: '34' },
    { name: 'Hello3', _id: '534' },
    { name: 'Hello4', _id: '234' },
];

const products = [
    {
        price: 1500,
        stock: 10,
        name: 'iPhone',
        _id: '123',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            },
        ],
    },
    {
        price: 1500,
        stock: 10,
        name: 'iPhone',
        _id: '1234',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            },
        ],
    },
];

const Home = () => {
    const [category, setCategory] = useState('');
    const [activeSearch, setActiveSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigation();
    const categoryButtonHandler = (id) => {
        setCategory(id);
    };

    const addToCartHandler = (id) => {
        console.log('Add to cart', id);
    };
    return (
        <>
            {activeSearch && (
                <SearchModal
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setActiveSearch={setActiveSearch}
                    products={products}
                />
            )}
            <View style={defaultStyle}>
                {/* Header */}
                <Header />

                {/* Heading Row */}
                <View
                    style={{
                        paddingTop: 70,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 25 }}>Our</Text>
                        <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
                    </View>

                    {/* Search Bar */}
                    <View>
                        <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
                            <Avatar.Icon
                                size={50}
                                icon={'magnify'}
                                color={'gray'}
                                style={{ backgroundColor: colors.color2, elevation: 12 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/*  */}
                <View style={{ flexDirection: 'row', height: 80 }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ alignItems: 'center' }}
                    >
                        {categories.map((item, index) => (
                            <Button
                                key={item._id}
                                style={{
                                    backgroundColor: category === item._id ? colors.color1 : colors.color5,
                                    borderRadius: 100,
                                    margin: 5,
                                }}
                                onPress={() => categoryButtonHandler(item._id)}
                            >
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: category === item._id ? colors.color2 : 'gray',
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </Button>
                        ))}
                    </ScrollView>
                </View>

                {/* Products */}
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {products.map((item, index) => (
                            <ProductCard
                                stock={item.stock}
                                name={item.name}
                                price={item.price}
                                image={item.images[0]?.url}
                                addToCartHandler={addToCartHandler}
                                id={item._id}
                                key={item._id}
                                index={index}
                                navigate={navigate}
                            />
                        ))}
                    </ScrollView>
                </View>
            </View>
            <Footer activeRoute={"home"}/>
        </>
    );
};

export default Home;
