import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const GoogleButton = styled(RectButton) `
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: ${RFValue(7)}rem;
  height: ${RFValue(3.5)}rem;
  border-radius: ${RFValue(5)}px;
  box-shadow: 1px 3px 3px rgba(192, 192, 192, 0.2);
  background-color: ${({ theme }) => theme.COLORS.GRAY6 };
`;

export const FacebookButton = styled(RectButton) `
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: ${RFValue(7)}rem;
  height: ${RFValue(3.5)}rem;
  border-radius: ${RFValue(5)}px;
  box-shadow: 1px 3px 3px rgba(192, 192, 192, 0.2);
  background-color: ${({ theme }) => theme.COLORS.BLUE4 };
`;

export const Icon = styled.Image `
  width: ${RFValue(2.8)}rem;
  height: ${RFValue(2.8)}rem;
`;

export const FacebookText = styled.Text `
  color: ${({ theme }) => theme.COLORS.WHITE_100 };
  font-size: small;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGTH };
`;

export const GoogleText = styled.Text `
  color: ${({ theme }) => theme.COLORS.BLACK };
  font-size: small;
  font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGTH };
`;