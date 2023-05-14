import React from 'react';
import { Avatar } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { colors } from '../styles/styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const Header = ({ back, emptyCart = false }) => {
    const route = useRoute();
    const navigate = useNavigation();
    const emptyCartHandler = () => {
        console.log('Cart is empty');
    };
    return (
        <>
            {back && (
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        left: 20,
                        top: 40,
                        zIndex: 10,
                    }}
                    onPress={() => navigate.goBack()}
                >
                    <Avatar.Icon
                        style={{ backgroundColor: colors.color4 }}
                        icon={'arrow-left'}
                        color={route.name === 'productDetails' ? colors.color2 : colors.color3}
                    />
                </TouchableOpacity>
            )}
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 20,
                    top: 40,
                    zIndex: 10,
                }}
                onPress={emptyCart ? emptyCartHandler() : () => navigate.navigate('cart')}
            >
                <Avatar.Icon
                    style={{ backgroundColor: colors.color4 }}
                    size={50}
                    icon={emptyCart ? 'delete-outline' : 'cart-outline'}
                    color={route.name === 'productDetails' ? colors.color2 : colors.color3}
                />
            </TouchableOpacity>
        </>
    );
};

export default Header;
