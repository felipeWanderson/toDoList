import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerList: {
    marginTop: 32,
    paddingBottom: 20,
    borderBottomColor: "#808080",
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  statusTask: {
    flexDirection: 'row',
    gap: 8,
  },
  newTaskText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#4EA8DE",
  },
  doneTaskText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "#8284FA",
  },
  statusNumber: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusNumberText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
  },
  
});