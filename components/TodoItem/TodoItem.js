import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './TodoItem.styles';

const getTitleAbbrev = (title = "") => {
    const _title = title.split(' ');
    if (!_title.length) return "";

    return _title.length > 1 ? `${_title[0][0]}${_title[1][0]}` : _title[0][0];
}

const TodoItem = ({ title, description }) => {
    return (
        <TouchableOpacity style={styles.item}>
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
        </TouchableOpacity>
    )
};

export default TodoItem;