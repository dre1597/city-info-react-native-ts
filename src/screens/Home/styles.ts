import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    textAlign: 'center',
    color: theme.colors.PRIMARY_COLOR,
    fontSize: 20,
  },
  error: {
    textAlign: 'center',
    color: theme.colors.ERROR_COLOR,
    fontSize: 20,
  },
});
