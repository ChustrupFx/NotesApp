import * as React from 'react';
import {NotesList, NoteItem, NoteTitle, NoteItemButtons, Button} from './style';

import MUI from 'react-native-vector-icons/MaterialIcons';
import FA from 'react-native-vector-icons/FontAwesome';
import DefaultScreenLayout from '../../components/DefaultScreenLayout/DefaultScreenLayout';

const data = new Array(50).fill(0);

const HomeScreen: React.FC = () => {
  return (
    <>
      <DefaultScreenLayout title="MY NOTES">
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
      </DefaultScreenLayout>
    </>
  );
};

export default HomeScreen;
