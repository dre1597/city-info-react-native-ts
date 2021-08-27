import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    cityDetails: {
        margin: 15,
        borderWidth: 1,
        borderColor: theme.colors.BORDER_COLOR,
        borderRadius: 10,
    },
    cityDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cityDetailsBox: {
        flex: 1,
        padding: 20,
    },
    cityDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: theme.colors.SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },
});
