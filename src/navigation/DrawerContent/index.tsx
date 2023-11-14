import {DrawerItem} from '@react-navigation/drawer';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {Animated, View} from 'react-native';

import type {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';

import {Routes} from '@/navigation/types';
import {DrawerContext} from '@/providers/drawer';
import {animation} from '@/utils/animations';

import styles from './styles';

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const {currentRoute} = React.useContext(DrawerContext);

  const animatedStyles = useMemo(() => {
    return {
      ...styles.drawerContainer,
      transform: [
        {
          translateY: drawerAnimation.interpolate({
            inputRange: [0, 30],
            outputRange: [0, 100],
          }),
        },
      ],
    };
  }, [drawerAnimation]);

  const {isOpened} = React.useContext(DrawerContext);

  useEffect(() => {
    if (isOpened) {
      animation(drawerAnimation, 30);
    } else {
      animation(drawerAnimation, 0);
    }
  }, [isOpened]);

  const getLabelStyles = useMemo(
    () => (route: string) => {
      return [styles.drawerLblStyle, currentRoute === route && styles.drawerLblStyleActive];
    },
    [currentRoute],
  );

  const getDrawerLabelContainerStyles = useMemo(
    () => (route: string) => {
      return [
        styles.drawerLabelContainer,
        currentRoute === route && styles.drawerLabelContainerActive,
      ];
    },
    [currentRoute],
  );

  const handleNavigate = useCallback(
    (route: string) => () => {
      navigation.navigate(route);
    },
    [],
  );

  return (
    <Animated.View style={animatedStyles}>
      {/* @ts-ignore */}
      <DrawerItem labelStyle={[styles.labelText, styles.boldText]} label="Beka" />
      <DrawerItem
        label="Start"
        labelStyle={getLabelStyles(Routes.start)}
        style={getDrawerLabelContainerStyles(Routes.start)}
        onPress={handleNavigate(Routes.start)}
      />
      <DrawerItem
        label="Your Cart"
        labelStyle={getLabelStyles(Routes.yourCart)}
        style={getDrawerLabelContainerStyles(Routes.yourCart)}
        onPress={handleNavigate(Routes.yourCart)}
      />
      <DrawerItem
        label="Favourites"
        labelStyle={getLabelStyles(Routes.favourites)}
        style={getDrawerLabelContainerStyles(Routes.favourites)}
        onPress={handleNavigate(Routes.favourites)}
      />
      <DrawerItem
        label="Your Orders"
        labelStyle={getLabelStyles(Routes.yourOrders)}
        style={getDrawerLabelContainerStyles(Routes.yourOrders)}
        onPress={handleNavigate(Routes.yourOrders)}
      />
      <View style={styles.line} />
      {/* @ts-ignore */}
      <DrawerItem label="Sign Out" labelStyle={styles.labelText} />
    </Animated.View>
  );
};

export default DrawerContent;
