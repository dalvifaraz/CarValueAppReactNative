import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
export const defaultStyle = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.backgroundPrimary,
  },
  borderRed: {
    borderColor: 'red',
    borderWidth: 1,
  },
  borderBlack: {
    borderColor: 'black',
    borderWidth: 1,
  },
  borderGreen: {
    borderColor: 'green',
    borderWidth: 1,
  },
  borderYellow: {
    borderColor: 'yellow',
    borderWidth: 1,
  },
  borderBrown: {
    borderColor: 'brown',
    borderWidth: 1,
  },
  borderPink: {
    borderColor: 'pink',
    borderWidth: 1,
  },
});
