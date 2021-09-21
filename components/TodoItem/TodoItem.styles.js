import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../utils/common';

export default StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: APP_COLORS.appWhite,
        marginVertical: 10,
        padding: 24,
        borderRadius: 20,
        paddingLeft: 0,
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
    }
})