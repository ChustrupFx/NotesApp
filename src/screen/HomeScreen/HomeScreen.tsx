import * as React from 'react';
import {Alert} from 'react-native';
import {NotesList, NoteItem, NoteTitle, NoteItemButtons, Button} from './style';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import FA from 'react-native-vector-icons/FontAwesome';
import DefaultScreenLayout from '../../components/DefaultScreenLayout/DefaultScreenLayout';
import AsyncStorage from '@react-native-community/async-storage';

interface Note {
  title: string;
  content: string;
  timestamp: number;
}

const HomeScreen: React.FC<NativeStackScreenProps<any>> = ({navigation}) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        const allNotes = await AsyncStorage.getItem('notes');

        if (!allNotes) return;

        const allNotesParsed = JSON.parse(allNotes);

        // const sortedNotes = sortData(allNotesParsed);
        const sortedNotes = sortData(allNotesParsed);

        setData(sortedNotes);
      } catch (e) {
        Alert.alert('Error retrieving notes.');
      }
    })();
  }, []);

  return (
    <DefaultScreenLayout title="MY NOTES">
      <NotesList
        data={data}
        keyExtractor={({timestamp}) => timestamp}
        renderItem={({item}: {}) => {
          return (
            <NoteItem>
              <NoteTitle>{item.title}</NoteTitle>
              <NoteItemButtons>
                <Button>
                  <FA size={24} color="#FFF" name="pencil-square-o" />
                </Button>
                <Button>
                  <FA size={24} color="#FFF" name="trash-o" />
                </Button>
              </NoteItemButtons>
            </NoteItem>
          );
        }}
      />
    </DefaultScreenLayout>
  );

  function sortData(notes: any) {
    return Object.values(notes).sort((a: any, b: any) => {
      if (a.timestamp > b.timestamp) return -1;
      if (a.timestamp < b.timestamp) return 1;
      return 0;
    });
  }
};

export default HomeScreen;
