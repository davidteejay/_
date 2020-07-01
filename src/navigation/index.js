import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './Auth';
import Launch from './Launch';
import Main from './Main';

export default createAppContainer(
  createSwitchNavigator({
    Launch,
    Auth,
    Main,
  }, {
    initialRouteName: 'Launch',
  }),
);
