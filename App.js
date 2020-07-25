import React from 'react';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'furniture', value: 1 },
  { label: 'jasdasd', value: 2 },
  { label: 'furgggre', value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon='apps' placeholder='Category' />
      <AppTextInput icon='email' placeholder='Email' />
    </Screen>
  );
}
