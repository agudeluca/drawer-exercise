import React from 'react';

import Navigation from '@/navigation';
import {DrawerProvider} from '@/providers/drawer';

export default () => {
  return (
    <DrawerProvider>
      <Navigation />
    </DrawerProvider>
  );
};
