import React from 'react';
import { SafeAreaView } from 'react-native';
import SocialButton from '../../components/social-button/SocialButton';

import google from '../../assets/img/icon-google.png';
import facebook from '../../assets/img/icon-facebook.png';

import { 
  Container,
  ContantHeader,
  ContentBody,
  ContentFooter,
  Title,
  Description,
  ViewButtom,
 } from './styles';
import { GenericInput } from '../../components/input';
import { useTheme } from 'styled-components/native';
import Button from '../../components/button/Button';

const Login: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <SafeAreaView>
      <Container>
        <ContantHeader>
          <Title>Seja bem vindo(a) {'\n'}à Carteira App</Title>

          <Description>Entrar</Description>
          
          <ViewButtom>
            <SocialButton logo={google} text='Google'/>
            <SocialButton logo={facebook} text='Facebook'/>
          </ViewButtom>
        </ContantHeader>

        <ContentBody>
          <GenericInput 
            leftIcon 
            iconLeftName='mail-outline'
            iconSize={25}
            iconColor={COLORS.BLACK}
            placeholder='E-mail'
            placeholderTextColor={COLORS.GRAY5}
          />
          <GenericInput
            leftIcon 
            iconLeftName='lock-closed-outline'
            rightIcon
            iconRightName='eye-outline'
            iconSize={25}
            iconColor={COLORS.BLACK}
            placeholder='Senha'
            placeholderTextColor={COLORS.GRAY5}
          />

          <Button title='Entrar' onPress={() => {}}/>
        </ContentBody>

        <ContentFooter>

        </ContentFooter>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
