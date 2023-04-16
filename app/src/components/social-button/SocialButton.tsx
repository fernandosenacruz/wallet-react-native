import React from 'react';
import PropTypes from 'prop-types';
import { GoogleButton, FacebookButton, Icon, GoogleText, FacebookText } from './styles';

interface Props {
  logo: string
  text: string
}

const SocialButton: React.FC<Props> = ({ logo, text, ...rest }) => {
  const isGoogle: boolean = text === 'Google';

  if (isGoogle) {
    return (
      <GoogleButton {...rest}>
        <Icon source={{ uri: logo }} resizeMethod="resize"/>
        <GoogleText>{text}</GoogleText>
      </GoogleButton>
    );
  } else {
    return (
      <FacebookButton {...rest}>
        <Icon source={{ uri: logo }} resizeMethod="resize"/>
        <FacebookText>{text}</FacebookText>
      </FacebookButton>
    );
  }
};

SocialButton.propTypes = {
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default SocialButton;