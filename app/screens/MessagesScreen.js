import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import {
  ListItem,
  ListItemSeparatorComponent,
  ListItemDeleteAction,
} from '../components/lists';

const initialMessages = [
  {
    id: 1,
    title: 'Jason Nelemans',
    description: 'Yo yo, is this still on?',
    image: require('../assets/JasonPF.jpg'),
  },
  {
    id: 2,
    title: 'Jason Nelemans',
    description: 'Hello! Was wondering if this is still available?',
    image: require('../assets/JasonPF.jpg'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparatorComponent}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/JasonPF.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
