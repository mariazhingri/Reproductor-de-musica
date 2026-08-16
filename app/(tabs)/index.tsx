import SearchBar from "@/src/components/song/SearchBar";
import SongList from "@/src/components/song/SongList";
import { useState } from "react";
import { View } from "react-native";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b2a", padding: 20 }}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
      />

      <SongList />
    </View>
  );
}