import { StyleSheet } from 'react-native';

import { APP_COLORS } from '../../utils/common';

export default StyleSheet.create({
    container: {
        marginBottom: 16
    },
    headerText: {
        fontSize: 35,
        color: APP_COLORS.vodafoneGrey
    },
    logoHighlight: {
        fontWeight: '900',
        color: APP_COLORS.vodafoneRed
    }
});