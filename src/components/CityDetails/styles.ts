import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: theme.colors.BORDER_COLOR,
    margin: 20,
  },
  box: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBox: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 15,
    color: theme.colors.SECONDARY_COLOR,
    fontWeight: '700',
  },
});
