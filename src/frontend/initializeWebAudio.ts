export const initializeWebAudio = (options: AudioContextOptions = {}) => {
  const audioCtx = new AudioContext(options);

  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

  const oscNode = audioCtx.createOscillator();
  oscNode.frequency.setValueAtTime(0, audioCtx.currentTime);

  oscNode.connect(gainNode);

  oscNode.start();

  gainNode.connect(audioCtx.destination);

  return {
    audioCtx,
    gainNode,
    oscNode,
  };
};
