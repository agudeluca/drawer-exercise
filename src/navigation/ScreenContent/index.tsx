import {useDrawerStatus} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {TouchableOpacity, Image, Animated, View} from 'react-native';

import type {DrawerNavigationProp} from '@react-navigation/drawer';

import menuIcon from '@/assets/menu.png';
import {Routes, type RouteParamList} from '@/navigation/types';
import {DrawerContext} from '@/providers/drawer';
import Favourites from '@/screens/Favourites';
import Start from '@/screens/Start';
import YourCart from '@/screens/YourCart';
import YourOrders from '@/screens/YourOrders';
import {animation} from '@/utils/animations';

import styles from './styles';

const Stack = createStackNavigator();

type ScreenOptionsProps = {
  navigation: DrawerNavigationProp<RouteParamList>;
};

const ScreenContent = ({navigation}: ScreenOptionsProps) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const animatedStyles = useMemo(() => {
    return {
      ...styles.screen,
      transform: [
        {
          rotate: rotateValue.interpolate({
            inputRange: [0, 5],
            outputRange: ['0deg', '-10deg'],
          }),
        },
        {
          translateX: rotateValue.interpolate({
            inputRange: [0, 5],
            outputRange: [0, 70],
          }),
        },
        {
          translateY: rotateValue.interpolate({
            inputRange: [0, 5],
            outputRange: [0, 40],
          }),
        },
      ],
    };
  }, [rotateValue]);

  const isDrawerStatus = useDrawerStatus();
  const {isOpened, setIsOpened} = React.useContext(DrawerContext);
  const openDrawer = useCallback(() => {
    navigation.openDrawer();
    setIsOpened(true);
  }, [navigation, setIsOpened]);

  useEffect(() => {
    if (isDrawerStatus === 'closed') {
      setIsOpened(false);
    }
  }, [isDrawerStatus]);

  useEffect(() => {
    if (isOpened) {
      animation(rotateValue, 5);
    } else {
      animation(rotateValue, 0);
    }
  }, [isOpened]);

  const renderMenuIcon = useCallback(() => {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Image source={menuIcon} style={styles.menu} />
      </TouchableOpacity>
    );
  }, []);

  return (
    <Animated.View style={animatedStyles}>
      <Stack.Navigator
        initialRouteName={Routes.start}
        screenOptions={{
          headerTransparent: true,
          animationEnabled: false,
          headerTitle: 'START',
          headerTitleStyle: styles.header,
          headerTitleAlign: 'left',
          headerLeft: renderMenuIcon,
        }}
      >
        <Stack.Screen name={Routes.start} component={Start} />
        <Stack.Screen name={Routes.yourCart} component={YourCart} />
        <Stack.Screen name={Routes.favourites} component={Favourites} />
        <Stack.Screen name={Routes.yourOrders} component={YourOrders} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default ScreenContent;
