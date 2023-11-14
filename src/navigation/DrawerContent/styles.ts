import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  drawerContainer: {
    marginLeft: 5,
    marginRight: 10,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'left',
    color: 'white',
  },
  drawerLabelContainer: {
    paddingLeft: 10,
    width: '100%',
  },
  drawerLabelContainerActive: {
    borderRadius: 10,
    borderStyle: 'solid',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 25,
    fontSize: 30,
  },
  labelText: {
    fontSize: 20,
    width: '100%',
    margin: 20,
    textAlign: 'center',
    color: 'white',
  },
  drawerLblStyleActive: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'left',
    color: 'red',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'silver',
    margin: 10,
    alignContent: 'center',
  },
});

export default styles;
