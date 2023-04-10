import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
// import { fontStyle } from '../styles/fontStyle';
// import colors from '../utils/colors';

type ButtonProps = {
  title: string;
  variant?: string;
  buttonContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  handleOnPress: any;
  disable?: boolean;
} & typeof defaultProps;

const defaultProps = {
  disable: false,
  variant: 'filled',
};

const Button = ({
  variant,
  title,
  buttonContainerStyle,
  titleStyle,
  handleOnPress,
  disable,
}: ButtonProps) => {
  return (
    <Pressable
      disabled={disable}
      onPress={() => {
        handleOnPress();
      }}
      style={[styles.buttonContainer, buttonContainerStyle]}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
Button.defaultProps = defaultProps;

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
    borderColor: colors.textPrimary,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.buttonPrimaryBackground,
  },
  title: {
    color: colors.textPrimary,
  },
});
