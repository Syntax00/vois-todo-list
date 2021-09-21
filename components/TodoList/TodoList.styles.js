import { StyleSheet } from 'react-native';

import { APP_COLORS } from '../../utils/common';

export default StyleSheet.create({
    container: {
        marginVertical: 20
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        backgroundColor: APP_COLORS.appWhite,
        width: '80%',
        padding: 30,
        borderRadius: 25
    },
    modalHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 15
    },
    todoTextInput: {
        padding: 15,
        backgroundColor: '#f1f1f1',
        marginVertical: 6,
        borderRadius: 30
    },
    confirmAddTodoBtn: {
        padding: 15,
        justifyContent: 'center',
        marginTop: 15,
        alignItems: 'center',
        backgroundColor: APP_COLORS.vodafoneGrey,
        borderRadius: 30
    },
    btnText: {
        color: APP_COLORS.appWhite,
        fontSize: 15,
        fontWeight: '500'
    },
    closeBtn: {
        padding: 15,
        justifyContent: 'center',
        marginTop: 6,
        alignItems: 'center',
        backgroundColor: APP_COLORS.vodafoneRed,
        borderRadius: 30
    },
    emptyMessage: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyMessageText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666'
    }
});