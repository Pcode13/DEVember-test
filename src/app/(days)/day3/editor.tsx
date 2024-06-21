//import liraries
import React, {useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Markdown from 'react-native-markdown-display';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';

// create a component

const template = `# 🎉 Fun with Markdown!

Hello **World**!
`;
const Editor = () => {
    const [content, setContent] = useState(template);
    const [tab, setTab] = useState('edit');
    return (
        <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setTab('edit')}
          style={[
            styles.tab,
            { borderColor: tab === 'edit' ? 'mediumorchid' : 'gray' },
          ]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('preview')}
          style={[
            styles.tab,
            { borderColor: tab === 'preview' ? 'mediumorchid' : 'gray' },
          ]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === 'edit' ? (
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={50}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        padding: 10,
      },
      input: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        paddingTop: 20,
        borderRadius: 10,
        fontSize: 16,
      },
    
      tabsContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,
      },
      tab: {
        flex: 1,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
      },
      tabText: {
        fontFamily: 'InterBold',
      },
});

//make this component available to the app
export default Editor;
