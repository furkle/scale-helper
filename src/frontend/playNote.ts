import { AttackSustainReleaseEnvelope } from './AttackReleaseEnvelope';
import { Note } from '../Note';

export type NotePlayerOptions = {
  audioCtx: AudioContext;
  attackReleaseEnvelope: AttackSustainReleaseEnvelope;
  data: Note;
  gainNode: GainNode;
  oscNode: OscillatorNode;
  timeToWait?: number;
}

export const playNote = (args: NotePlayerOptions) => {
  if (!args.oscNode) {
    return;
  }

  playWithArEnvelope(args);
};

export const playWithArEnvelope = ({
  audioCtx,
  attackReleaseEnvelope: {
    attackGain,
    attackTime,
    sustainTime,
    releaseGain,
    releaseTime,
  },

  data,
  gainNode,
  oscNode,
  timeToWait = 0,
}: NotePlayerOptions) => {
  oscNode.frequency.cancelScheduledValues(audioCtx.currentTime + timeToWait);
  gainNode.gain.cancelScheduledValues(audioCtx.currentTime + timeToWait);

  oscNode.frequency.setValueAtTime(data.frequency, audioCtx.currentTime + timeToWait);
  gainNode.gain.setTargetAtTime(attackGain, audioCtx.currentTime + timeToWait, attackTime * 0.5);
  gainNode.gain.setTargetAtTime(releaseGain, audioCtx.currentTime + timeToWait + (attackTime + sustainTime) * 0.5, releaseTime * 0.5);
};
