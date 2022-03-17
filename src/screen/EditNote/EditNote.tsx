import * as React from 'react';
import DefaultScreenLayout from '../../components/DefaultScreenLayout/DefaultScreenLayout';
import AsyncStorage from '@react-native-community/async-storage';

import {ScrollView, Alert, KeyboardAvoidingView, Platform} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TitleInput, ContentInput, SubmitButton, ButtonText} from './style';

const EditNote: React.FC<
  NativeStackScreenProps<RootStackParamList, 'EditNote'>
> = ({navigation, route}) => {
  const [title, setTitle] = React.useState(route.params.title);
  const [content, setContent] = React.useState(route.params.content);

  return (
    <DefaultScreenLayout title={title}>
      <ScrollView style={{width: '100%'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{
            alignItems: 'center',
            display: 'flex',
          }}>
          <TitleInput
            placeholder="Title"
            placeholderTextColor={'white'}
            value={title}
            onChangeText={setTitle}
          />
          <ContentInput
            placeholder="Content"
            placeholderTextColor={'white'}
            multiline={true}
            numberOfLines={20}
            textAlignVertical={'top'}
            value={content}
            onChangeText={setContent}
          />
          <SubmitButton onPress={onSubmit}>
            <ButtonText>SAVE</ButtonText>
          </SubmitButton>
        </KeyboardAvoidingView>
      </ScrollView>
    </DefaultScreenLayout>
  );

  async function onSubmit() {
    if (!title || !content) {
      Alert.alert('Please fill in all fields before proceeding');
      return;
    }

    try {
      const allNotesJSONString: string | null = await AsyncStorage.getItem(
        'notes',
      );
      const allNotesParsed = allNotesJSONString
        ? JSON.parse(allNotesJSONString)
        : {};

      allNotesParsed[route.params.timestamp] = {
        title,
        content,
        timestamp: route.params.timestamp,
      };

      await AsyncStorage.setItem('notes', JSON.stringify(allNotesParsed));

      navigation.navigate('Home');
    } catch (e) {
      Alert.alert('Error saving data.');
    }
  }
};

export default EditNote;
