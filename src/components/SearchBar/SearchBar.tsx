import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SeacrchBar.styles';

const SearchBar = (props: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        style={styles.text_input}
        onChangeText={props.onSearch}
      />
    </View>
  );
};

export default SearchBar;
