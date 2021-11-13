import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { API, graphqlOperation } from 'aws-amplify';

import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader';
import PlayerWidget from '../components/PlayerWidget';

import { getAlbum } from '../src/graphql/queries'


const AlbumScreen = () => {

  const route = useRoute();
  const albumId = route.params.id;

  const [album, setAlbum] = useState(null);


  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }));
        setAlbum(data.data.getAlbum);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAlbumDetails();
  }, []);

  if (!album) {
    return <ActivityIndicator size="large" color={'white'} style={{ flex: 1 }} />
  }

  return (
    <LinearGradient colors={['#8400ff', '#2d067c', '#020024']} style={{ flex: 1 }}>
      <ScrollView style={{
        marginBottom: 80
      }}>
        <FlatList
          data={album.songs.items}
          renderItem={({ item }) => <SongListItem song={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <AlbumHeader album={album} />}  
        />
      </ScrollView>
    </LinearGradient>
  )
}

export default AlbumScreen;