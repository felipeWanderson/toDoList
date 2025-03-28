import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#808080",
    flexDirection: 'row',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    fontSize: 12,
  },
  text: {
    fontSize: 14,
    color: '#F2F2F2',
    textAlign: 'left'
  },
  textDone: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'left',
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid'
  }
});