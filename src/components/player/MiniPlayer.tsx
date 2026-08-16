import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type MiniPlayerProps = {
  title: string;
  artist: string;
  isPlaying: boolean;
  onPress?: () => void;
  onPlayPause?: () => void;
};

export default function MiniPlayer({
  title,
  artist,
  isPlaying,
  onPress,
  onPlayPause,
}: MiniPlayerProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Carátula */}
      <View style={styles.cover}>
        <Text style={styles.musicIcon}>♫</Text>
      </View>

      {/* Información de la canción */}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        <Text style={styles.artist} numberOfLines={1}>
          {artist}
        </Text>
      </View>

      {/* Play / Pause */}
      <TouchableOpacity
        style={styles.playButton}
        onPress={(e) => {
          e.stopPropagation();
          onPlayPause?.();
        }}
      >
        <Text style={styles.playIcon}>
          {isPlaying ? "Ⅱ" : "▶"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "#2a2a3d",
    borderTopWidth: 1,
    borderTopColor: "#3a3a50",
  },

  cover: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  musicIcon: {
    color: "#f5e6c8",
    fontSize: 24,
  },

  info: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 3,
  },

  artist: {
    color: "#aaa",
    fontSize: 12,
  },

  playButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
  },

  playIcon: {
    color: "#fff",
    fontSize: 20,
  },
});