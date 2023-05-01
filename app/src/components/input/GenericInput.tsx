import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Container, GenericInputContainer } from './styles'
import { useTheme } from 'styled-components/native';
import { TextInputProps } from 'react-native';

Ionicons.loadFont();
 
interface InputProps {
  rightIcon?: boolean;
  leftIcon?: boolean;
  iconLeftName?: string;
  iconRightName?: string;
  iconSize?: number;
  iconColor?: string;
}

const GenericInput: React.FC<InputProps & TextInputProps> = ({ 
  rightIcon, 
  leftIcon, 
  iconColor, 
  iconLeftName, 
  iconRightName,
  iconSize,
  ...rest 
}) => {
  const { COLORS } = useTheme();

  return (
    <Container>
      {leftIcon && (
        <Ionicons
          name={iconLeftName}
          size={iconSize}
          color={iconColor || COLORS.BLACK}   
          style={{ padding: 5 }}   
        />
      )}
      <GenericInputContainer 
        {...rest}
      />
      {rightIcon && (
        <Ionicons
          name={iconRightName}
          size={iconSize}
          color={iconColor || COLORS.BLACK}    
        style={{ padding: 5 }}   
      />
      )}
    </Container>
  )
}

export default GenericInput