import styled, {css} from 'styled-components/native';

export const inputStyle = css`
  background-color: ${({theme}) => theme.orangeColor};
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  width: 80%;
  font-weight: bold;
  color: white;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const TitleInput = styled.TextInput`
  ${inputStyle}
`;

export const ContentInput = styled.TextInput`
  ${inputStyle}
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 80%;
  background-color: ${props => props.theme.orangeColor};
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;
