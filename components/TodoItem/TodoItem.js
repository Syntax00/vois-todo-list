import React from 'react';
import { View, Text, Animated } from 'react-native';

import styles from './TodoItem.styles';

const getTitleAbbrev = (title = "") => {
    const _title = title.split(' ');
    if (!_title.length) return "";

    return _title.length > 1 ? `${_title[0][0]}${_title[1][0]}` : _title[0][0];
}

const TodoItem = ({ title, description, index }) => {
    const [animated] = React.useState(new Animated.Value(0));

    React.useEffect(() => {
        Animated.timing(animated, {
            toValue: 1,
            duration: 600,
            delay: (index + 1) * 300,
            useNativeDriver: true
        }).start();
    }, [animated])

    return (
        <Animated.View style={[styles.item, {
            opacity: animated,
            transform: [{
                translateX: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, 1]
                })
            }]
        }]}>
            <View style={styles.itemLogo}>
                <View style={styles.itemLogoContent}>
                    <Text style={styles.itemLogoText}>
                        {getTitleAbbrev(title).toUpperCase()}
                    </Text>
                </View>
            </View>

            <View style={styles.itemInformation}>
                <Text style={styles.title}>{title}</Text>
                <Text
                    style={styles.description}
                    numberOfLines={3}
                    ellipsizeMode='tail'
                >
                    {description}
                </Text>
            </View>
        </Animated.View >
    )
};

export default TodoItem;