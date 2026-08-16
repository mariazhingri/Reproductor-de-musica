import { loadAudio } from "@/src/services/audioService";
import { create } from "zustand";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string;
    audio: any;

};

type PlayerState = {
  currentSong: Song | null;
  isPlaying: boolean;

  playSong: (song: Song) => void;
  togglePlayPause: () => void;
  clearPlayer: () => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  isPlaying: false,

//   playSong: (song) =>
//     set({
//       currentSong: song,
//       isPlaying: true,
//     }),

  playSong: (song) => {
    const player = loadAudio(song.audio);
    player.play();

    set({
      currentSong: song,
      isPlaying: true,
    });
  },

  togglePlayPause: () =>
    set((state) => ({
      isPlaying: !state.isPlaying,
    })),

  clearPlayer: () =>
    set({
      currentSong: null,
      isPlaying: false,
    }),
}));