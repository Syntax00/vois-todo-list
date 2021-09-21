import { StyleSheet } from 'react-native';

import { APP_COLORS } from '../../utils/common';

export default StyleSheet.create({
    container: {
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    addTodoBtn: {
        backgroundColor: APP_COLORS.appWhite,
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 100
    },
    addTodoBtnTxt: {
        color: APP_COLORS.vodafoneGrey,
        fontWeight: '500'
    },
    headerText: {
        fontSize: 28,
        color: APP_COLORS.vodafoneGrey
    },
    logoHighlight: {
        fontWeight: '900',
        color: APP_COLORS.vodafoneRed
    },
});