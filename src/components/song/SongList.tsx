import { FlatList } from "react-native";
import SongItem from "./SongItem";

const songs = [
  { id: "1", title: "Dream Breeze", artist: "Luna Wave", duration: "3:45", audio: require("@/assets/audio/test.mp3") },
  { id: "2", title: "Neon Rain", artist: "Cyber Soul", duration: "4:10" },
  { id: "3", title: "Forest Walk", artist: "Nature Vibes", duration: "2:58" },
];

export default function SongList() {
  return (
    <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
            <SongItem
            id={item.id}
            title={item.title}
            artist={item.artist}
            duration={item.duration}
            audio={item.audio}
        />
      )}
    />
  );
}