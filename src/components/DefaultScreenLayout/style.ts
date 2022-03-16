import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.blueColor};
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 36px;
  color: ${props => props.theme.orangeColor};
  margin-bottom: 40px;
  margin-top: 10px;
`;
