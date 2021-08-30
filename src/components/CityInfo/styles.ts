import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flag: {
    width: 64,
    height: 64,
  },
  city: {
    fontSize: 40,
    color: theme.colors.PRIMARY_COLOR,
    textAlign: 'center',
  },
  state: {
    fontSize: 18,
    color: theme.colors.SECONDARY_COLOR,
    fontWeight: '300',
  },
  country: {
    fontSize: 28,
    color: theme.colors.SECONDARY_COLOR,
    fontWeight: '500',
  },
});
