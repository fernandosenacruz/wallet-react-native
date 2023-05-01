import styled, { css } from "styled-components/native";
import { TextInput, ViewProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface IContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled?: boolean;
}

interface ITextContainerProps extends ViewProps {
  hasError: boolean;
  isFocused: boolean;
  isFilled?: boolean;
}

export const Container = styled.View `
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  width: 100%;
  height: ${RFValue(3)}rem;
  margin-bottom: ${RFValue(10)}px;
  margin-top: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.COLORS.PURPLE1};
`;

export const InputContainer = styled.View<IContainerProps> `
  width: ${RFValue(55)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(5)}px;
  border-top-left-radius: ${RFValue(5)}px;
  border-bottom-left-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css `
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE1}
  ` };

  ${({ hasError }) => hasError && css `
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.COLORS.RED};
  ` };
`;

export const GenericInputContainer = styled.TextInput `
  border: 0;
  flex: 1;
  height: ${RFValue(2.8)}rem;
  font-size: ${RFValue(14)}px;
  border-radius: ${RFValue(8)}px;
  color ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONTS.POPPINS_BOLD};
`;

export const InputText = styled(TextInput)<ITextContainerProps> `
  flex: 1;
  font-size: ${RFValue(12)}px;
  border-top-right-radius: ${RFValue(5)}px;
  border-bottom-right-radius: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.COLORS.GRAY5};
  padding: 0 ${RFValue(10)}px;

  ${({ isFocused, isFilled }) => (isFocused || isFilled) && css `
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE1}
  ` };

  ${({ hasError }) => hasError && css `
    border-bottom-width: ${RFValue(2)}px;
    border-bottom-color: ${({ theme }) => theme.COLORS.RED};
  ` };
`;
