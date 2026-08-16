import { usePlayerStore } from "@/src/stores/playerStore";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  id: string;
  title: string;
  artist: string;
  duration: string;
  audio: any;
};

export default function SongItem({
  id,
  title,
  artist,
  duration,
  audio,
}: Props) {
  const playSong = usePlayerStore((state) => state.playSong);

  const song = {
    id,
    title,
    artist,
    duration,
    audio
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        backgroundColor: "#2f2f45",
        marginBottom: 10,
        borderRadius: 12,
      }}
      onPress={() => playSong(song)}
    >
      <View
        style={{
          width: 45,
          height: 45,
          backgroundColor: "#444",
          borderRadius: 8,
          marginRight: 10,
        }}
      />

      <View style={{ flex: 1 }}>
        <Text style={{ color: "#f5e6c8", fontSize: 16 }}>
          {title}
        </Text>

        <Text style={{ color: "#aaa", fontSize: 12 }}>
          {artist}
        </Text>
      </View>

      <Text style={{ color: "#ccc", fontSize: 12 }}>
        {duration}
      </Text>
    </TouchableOpacity>
  );
}