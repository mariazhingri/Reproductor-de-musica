import { StyleSheet, TextInput } from "react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Buscar canción..."
      placeholderTextColor="#aaa"
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#2a2a3d",
    padding: 12,
    borderRadius: 12,
    color: "#fff",
    marginBottom: 20,
  },
});