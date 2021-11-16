import React, { useContext, useState } from 'react';
import { Text, Image, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Sound } from 'expo-av/build/Audio/Sound';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../../src/graphql/queries';

import styles from './styles';
import { Song } from "../../types";
import { AppContext } from '../../Appcontext';

const { songId } = useContext(AppContext);

export type SongListItemProps = {
  song: Song
}

/* const [sound, setSound] = useState<Sound | null>(null);
const [song, setSong] = useState(null);
const [isPlaying, setIsPlaying] = useState<boolean>(true); */

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;

  const { setSongId } = useContext(AppContext);

  const onPlay = () => {
    setSongId(song.id);
  }

  /*   const fetchSong = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
        setSong(data.data.getSong);
      } catch (e) {
        console.log(e);
      }
    }
  
    const downloadSong = async () => {
      if (!sound) {
        return;
      }
  
    }
   */
  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.container}>
        <View style={styles.rightContainer}>
          <Text numberOfLines={1} style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

export default SongListItem;