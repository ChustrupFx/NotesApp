import * as React from 'react';
import {
  Container,
  Title,
  NotesList,
  NoteItem,
  NoteTitle,
  NoteItemButtons,
  Button,
} from './style';

import MUI from 'react-native-vector-icons/MaterialIcons';
import FA from 'react-native-vector-icons/FontAwesome';

const data = new Array(50).fill(0);

const HomeScreen: React.FC = () => {
  return (
    <>
      <Container>
        <Title>MY NOTES</Title>

        <NotesList
          data={data}
          renderItem={() => {
            return (
              <NoteItem>
                <NoteTitle>NOTE TITLE</NoteTitle>
                <NoteItemButtons>
                  <Button>
                    <MUI size={24} color="#FFF" name="open-in-new" />
                  </Button>
                  <Button>
                    <FA size={24} color="#FFF" name="pencil-square-o" />
                  </Button>
                </NoteItemButtons>
              </NoteItem>
            );
          }}
        />
      </Container>
    </>
  );
};

export default HomeScreen;
