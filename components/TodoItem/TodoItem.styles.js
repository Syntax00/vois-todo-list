import { StyleSheet } from 'react-native';

import { APP_COLORS } from '../../utils/common';

export default StyleSheet.create({
    item: {
        backgroundColor: APP_COLORS.appWhite,
        marginVertical: 10,
        borderRadius: 20,
        paddingLeft: 0,
        paddingBottom: 0,
        overflow: 'hidden'
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
        paddingBottom: 0,
        paddingLeft: 0
    },
    itemLogo: {
        flexBasis: '23%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    itemLogoContent: {
        width: 60,
        height: 60,
        backgroundColor: APP_COLORS.lightGrey,
        borderRadius: 50,
        justifyContent: 'center'
    },
    itemLogoText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: APP_COLORS.vodafoneRed
    },
    itemInformation: {
        flexBasis: '77%',
        paddingRight: 20,
        paddingLeft: 10
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 6
    },
    description: {
        color: APP_COLORS.vodafoneGrey
    },
    controllersContainer: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 17,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f7f7f7'
    }
})