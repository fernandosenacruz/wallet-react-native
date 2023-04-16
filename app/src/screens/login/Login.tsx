import React from 'react';
import { SafeAreaView, Text } from 'react-native';
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

const Login: React.FC = () => {
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

        </ContentBody>

        <ContentFooter>

        </ContentFooter>
        <Text>Login</Text>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
