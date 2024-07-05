import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card_container: {
    flex: 1,
    gap: 10,
    margin: 10,
    flexDirection: 'row',
  },
  info_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left_info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: 'hidden',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'black',
  },
  artist: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  year: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    color: 'gray',
  },
  card_body: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  soldout_container: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'red',

    marginLeft: 30,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
    padding: 2,
    fontSize: 12,
  },
});
