import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from './Auth';
import Launch from './Launch';

export default createAppContainer(
  createSwitchNavigator({
    Launch,
    Auth,
  }, {
    initialRouteName: 'Launch',
  }),
);
