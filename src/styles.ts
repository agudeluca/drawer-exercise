import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {
    position: 'absolute',
    height: '100%',
    zIndex: -10,
    right: 0,
    width: '50%',
    margin: 25,
  },
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});

export default styles;
