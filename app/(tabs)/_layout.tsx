import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/src/constants/theme';
import { useColorScheme } from '@/src/hooks/use-color-scheme';

import TabBar from '@/src/components/navegation/TabBar';
import MiniPlayer from "@/src/components/player/MiniPlayer";
import { usePlayerStore } from "@/src/stores/playerStore";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const currentSong = usePlayerStore(
    (state) => state.currentSong
  );

  const isPlaying = usePlayerStore(
    (state) => state.isPlaying
  );

  const togglePlayPause = usePlayerStore(
    (state) => state.togglePlayPause
  );

  return (
    <Tabs
      tabBar={(props) => (
        <>
          {currentSong && (
            <MiniPlayer
              title={currentSong.title}
              artist={currentSong.artist}
              isPlaying={isPlaying}
              onPlayPause={togglePlayPause}
            />
          )}

          <TabBar {...props} />
        </>
      )}
      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: 'Biblioteca',
        }}
      />
    </Tabs>
  );
}