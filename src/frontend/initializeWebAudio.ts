export const initializeWebAudio = (options: AudioContextOptions = { sampleRate: 48000 }) => {
  const audioCtx = new AudioContext(options);

  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);

  const oscNode = audioCtx.createOscillator();
  oscNode.frequency.setValueAtTime(1, audioCtx.currentTime);
  oscNode.type = 'sine';

  oscNode.connect(gainNode);

  oscNode.start();

  gainNode.connect(audioCtx.destination);

  return {
    audioCtx,
    gainNode,
    oscNode,
  };
};
