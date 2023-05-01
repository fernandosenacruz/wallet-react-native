import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View `
  width: 100vw;
  height: 100vh;
  padding: ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.COLORS.BLACK };
`;

export const ContantHeader = styled.View `
  align-items: center;
  justify-content: center;
  padding: ${RFValue(20)}px;
`;

export const ContentBody = styled.View ``;

export const ContentFooter = styled.View ``;

export const ViewButtom = styled.View `
  flex-direction: row;
  justify-content: space-around;
  padding: ${RFValue(5)}px;
  width: 90%;
`;

export const Title = styled.Text `
  text-align: center;
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.COLORS.PURPLE2 };
  font-family: ${({ theme }) => theme.FONTS.POPPINS_MEDIUM };
`;

export const Description = styled.Text `
  margin-top: ${RFValue(60)}px;
  font-size: ${RFValue(10)}px;
  text-shadow: 1px 2px 2.5px rgba(255, 255, 255, 0.4);
  color: ${({ theme }) => theme.COLORS.GRAY };
  font-family: ${({ theme }) => theme.FONTS.POPPINS_LIGTH };
`;