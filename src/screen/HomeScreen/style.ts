import styled from 'styled-components/native';

const blueColor = '#4F7CAC';
const orangeColor = '#FF7F11';

export const NotesList = styled.FlatList`
  width: 100%;
  flex: 1;
  padding: 0 20px;
`;

export const NoteItem = styled.TouchableOpacity`
  width: 100%;
  background-color: ${orangeColor};
  border-radius: 5px;
  color: white;
  padding: 10px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NoteTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

export const NoteItemButtons = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 10px;
`;
