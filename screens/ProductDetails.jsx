import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;
const iconOptions = {
    size: 20,
    style: {
        borderRadius: 5,
        backgroundColor: colors.color5,
        height: 25,
        width: 25,
    },
};

const ProductDetails = ({ route: { params } }) => {
    const isCarousel = useRef(null);
    const [quantity, setQuantity] = useState(1);
    const name = 'MacBook Pro';
    const price = 1500;
    const stock = 3;
    const description =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit iusto sequi vitae voluptas saepe ratione tenetur vel magni reiciendis, architecto, voluptatibus maiores aspernatur! Quasi iure assumenda rem eligendi totam alias!';
    const images = [
        {
            id: 'asdasd',
            url: 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=716&q=80',
        },
        {
            id: 'asdas',
            url: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80',
        },
    ];

    const incrementQty = () => {
        if (stock <= quantity) return;
        setQuantity((prev) => prev + 1);
    };

    const decrementQty = () => {
        if (quantity <= 1) return;
        setQuantity((prev) => prev - 1);
    };

    const addToCartHandler = () => {
        if (stock === 0)
            return Toast.show({
                type: 'error',
                text1: 'Out of stock',
            });
        Toast.show({
            type: 'success',
            text1: 'Product Added To Cart',
        });
    };
    return (
        <View
            style={{
                ...defaultStyle,
                padding: 0,
                backgroundColor: colors.color1,
            }}
        >
            <Header back={true} />
            {/* Carousel */}
            <Carousel
                layout="stack"
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem}
            />
            <View
                style={{
                    backgroundColor: colors.color2,
                    padding: 35,
                    flex: 1,
                    marginTop: -380,
                    borderTopLeftRadius: 55,
                    borderTopRightRadius: 55,
                }}
            >
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 25,
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '900',
                    }}
                >
                    {price}
                </Text>
                <Text
                    style={{
                        letterSpacing: 1,
                        lineHeight: 20,
                        marginVertical: 15,
                    }}
                    numberOfLines={8}
                >
                    {description}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                    }}
                >
                    <Text
                        style={{
                            color: colors.color3,
                            fontWeight: '100',
                        }}
                    >
                        Quantity
                    </Text>
                    <View
                        style={{
                            width: 80,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <TouchableOpacity onPress={decrementQty}>
                            <Avatar.Icon icon={'minus'} {...iconOptions} />
                        </TouchableOpacity>

                        <Text style={styles.quantity}>{quantity}</Text>

                        <TouchableOpacity onPress={incrementQty}>
                            <Avatar.Icon icon={'plus'} {...iconOptions} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={addToCartHandler}>
                    <Button icon={'cart'} style={styles.btn} textColor={colors.color2}>
                        Add To Cart
                    </Button>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const CarouselCardItem = ({ item, index }) => (
    <View style={styles.container} key={index}>
        <Image source={{ uri: item.url }} style={styles.image} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40,
        height: 380,
    },
    image: {
        width: ITEM_WIDTH,
        resizeMode: 'contain',
        height: 250,
    },
    quantity: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5,
    },
    btn: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,
        marginVertical: 35,
    },
});

export default ProductDetails;
