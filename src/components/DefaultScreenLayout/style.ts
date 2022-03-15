import styled from 'styled-components/native';

const blueColor = '#4F7CAC';
const orangeColor = '#FF7F11';

export const Container = styled.SafeAreaView`
  background-color: ${blueColor};
  display: flex;
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 36px;
  color: ${orangeColor};
  margin-bottom: 40px;
  margin-top: 10px;
`;
