import { Text } from 'react-native'
import React from 'react'

import { Container } from './styles'

interface IButtonPropos {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: IButtonPropos) => {
  return (
    <Container onPress={onPress}>
      <Text>{ title }</Text>
    </Container>
  )
}

export default Button;