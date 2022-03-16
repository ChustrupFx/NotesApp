import * as React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

import DefaultScreenLayout from '../../components/DefaultScreenLayout/DefaultScreenLayout';
import {TitleInput, ContentInput, SubmitButton, ButtonText} from './style';

const CreateNoteScreen: React.FC = () => {
  return (
    <DefaultScreenLayout title="CREATE NOTE">
      <ScrollView style={{width: '100%'}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{
            alignItems: 'center',
            display: 'flex',
          }}>
          <TitleInput placeholder="Title" placeholderTextColor={'white'} />
          <ContentInput
            placeholder="Content"
            placeholderTextColor={'white'}
            multiline={true}
            numberOfLines={20}
            textAlignVertical={'top'}
          />
          <SubmitButton>
            <ButtonText>SAVE</ButtonText>
          </SubmitButton>
        </KeyboardAvoidingView>
      </ScrollView>
    </DefaultScreenLayout>
  );
};

export default CreateNoteScreen;
