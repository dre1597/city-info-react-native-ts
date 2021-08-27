import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    cityInfo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    flag: {
        width: 64,
        height: 64,
    },
    textPrimary: {
        fontSize: 40,
        color: theme.colors.PRIMARY_COLOR,
    },
    textSecondary: {
        fontSize: 28,
        color: theme.colors.SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 18,
    },
});
