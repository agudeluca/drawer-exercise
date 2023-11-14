import {Animated, Easing} from 'react-native';

import { animationDuration } from '@/constants';

const animation = (ref, toValue: number) => {
  Animated.timing(ref, {
    toValue,
    duration: animationDuration,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();
};

export {animation};
