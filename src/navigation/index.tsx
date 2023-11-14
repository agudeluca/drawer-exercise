import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Animated} from 'react-native';

import type {SetStateAction} from 'react';

import DrawerContent from '@/navigation/DrawerContent';
import ScreenContent from '@/navigation/ScreenContent';
import {DrawerContext} from '@/providers/drawer';
import {animation} from '@/utils/animations';

import styles from './styles';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<SetStateAction<string>>();
  const {isOpened, setCurrentRoute} = React.useContext(DrawerContext);
  const rotateValue = useRef(new Animated.Value(0)).current;

  const animatedStyle = useMemo(() => {
    return {
      ...styles.container,
      transform: [
        {
          translateY: rotateValue.interpolate({
            inputRange: [0, 5],
            outputRange: [0, 70],
          }),
        },
      ],
    };
  }, [rotateValue]);

  useEffect(() => {
    if (isOpened) {
      animation(rotateValue, 5);
    }
    if (!isOpened) {
      animation(rotateValue, 0);
    }
  }, [isOpened]);

  const handleOnReady = useCallback(() => {
    routeNameRef.current = navigationRef.getCurrentRoute().name;
    setCurrentRoute(routeNameRef.current);
  }, [navigationRef]);

  const handleOnStateChange = useCallback(async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute().name;
    if (previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;
      setCurrentRoute(routeNameRef.current);
    }
  }, [navigationRef, setCurrentRoute]);

  return (
    <Animated.View style={animatedStyle}>
      <NavigationContainer
        ref={navigationRef}
        onReady={handleOnReady}
        onStateChange={handleOnStateChange}
      >
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerType: 'back',
            sceneContainerStyle: styles.scene,
            drawerStyle: styles.drawerStyles,
            overlayColor: 'transparent',
          }}
          drawerContent={props => DrawerContent(props)}
        >
          <Drawer.Screen
            name="Screens"
            options={{
              headerShown: false,
            }}
          >
            {props => <ScreenContent {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </Animated.View>
  );
};

export default Navigation;
