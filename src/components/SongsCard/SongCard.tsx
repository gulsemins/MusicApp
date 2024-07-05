import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './SongCard.style';
const SongCard = ({song}: any) => {
  return (
    <View style={styles.card_container}>
      <Image style={styles.avatar} source={{uri: song.imageUrl}} />
      <View style={styles.card_body}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.info_container}>
          <View style={styles.left_info}>
            <Text style={styles.artist}>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>
          {song.isSoldOut && (
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>Tükendi</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
