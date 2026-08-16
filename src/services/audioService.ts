import { createAudioPlayer } from 'expo-audio';

let player: ReturnType<typeof createAudioPlayer> | null = null;

export function loadAudio(source: any) {
  if (player) {
    player.remove();
  }

  player = createAudioPlayer(source);

  return player;
}

export function playAudio() {
  player?.play();
}

export function pauseAudio() {
  player?.pause();
}

export function stopAudio() {
  player?.pause();
  player?.seekTo(0);
}

export function getPlayer() {
  return player;
}