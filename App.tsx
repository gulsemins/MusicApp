import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import music_data from './music-data.json';
import SongCard from './src/components/SongsCard/SongCard';
import SearchBar from './src/components/SearchBar';

function App() {
  const [list, setList] = useState(music_data);
  const renderSong = ({item}: any) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = (text: any) => {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searcedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <View style={styles.container}>
      <View style={styles.cards_container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  cards_container: {},
  seperator: {
    borderWidth: 1,
    borderColor: '#eaebea',
  },
});
export default App;
