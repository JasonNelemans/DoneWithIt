import React from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

function AccountScreen(props) {
  return (
    <Screen>
      <ListItem
        title='Jason Nelemans'
        subTitle='email@jasonnelemans.com'
        image={require('../assets/JasonPF.jpg')}
      />
    </Screen>
  );
}

export default AccountScreen;
