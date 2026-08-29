// Web Audio API Ambient Romantic Acoustic Piano / Harp & Strings Engine
// Provides flawless background music without external streaming dependencies, plus MP3 fallback support

class WeddingMusicController {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private isMuted = false;
  private customAudio: HTMLAudioElement | null = null;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;

  // Romantic acoustic chord progression (Cmaj7 - Am9 - Fmaj7 - Gsus4 - Em7 - Am)
  private chords = [
    [261.63, 329.63, 392.00, 493.88], // Cmaj7 (C4, E4, G4, B4)
    [220.00, 261.63, 329.63, 392.00], // Am7   (A3, C4, E4, G4)
    [174.61, 261.63, 329.63, 349.23], // Fmaj7 (F3, C4, E4, F4)
    [196.00, 246.94, 293.66, 392.00], // Gsus4 (G3, B3, D4, G4)
    [164.81, 246.94, 329.63, 392.00], // Em7   (E3, B3, E4, G4)
    [220.00, 293.66, 349.23, 440.00], // Dm7/A (A3, D4, F4, A4)
  ];

  private currentChordIndex = 0;
  private step = 0;

  public init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
  }

  public play(customUrl?: string) {
    this.init();

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (customUrl && customUrl.trim() !== '') {
      if (!this.customAudio) {
        this.customAudio = new Audio(customUrl);
        this.customAudio.loop = true;
        this.customAudio.volume = 0.4;
      }
      this.customAudio.play().catch(() => {
        this.startAmbientSynth();
      });
      this.isPlaying = true;
      return;
    }

    this.startAmbientSynth();
    this.isPlaying = true;
  }

  private startAmbientSynth() {
    if (!this.ctx || this.timerId) return;

    const playNextNote = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const chord = this.chords[this.currentChordIndex];
      const freq = chord[this.step % chord.length];

      this.triggerSoftPianoTone(freq);

      this.step++;
      if (this.step % 8 === 0) {
        this.currentChordIndex = (this.currentChordIndex + 1) % this.chords.length;
      }

      // Timing with gentle humanized rubato
      const delay = this.step % 2 === 0 ? 550 : 650;
      this.timerId = window.setTimeout(playNextNote, delay);
    };

    playNextNote();
  }

  private triggerSoftPianoTone(frequency: number) {
    if (!this.ctx || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Soft warm acoustic timbre (sine wave mixed with harmonic overtone)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(frequency, now);

      // Natural acoustic piano envelope: soft attack, warm sustain, gentle release
      noteGain.gain.setValueAtTime(0, now);
      noteGain.gain.linearRampToValueAtTime(0.35, now + 0.08);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + 2.4);

      osc.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.5);
    } catch {
      // Ignore audio scheduling exceptions
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.customAudio) {
      this.customAudio.pause();
    }
  }

  public toggle(customUrl?: string): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(customUrl);
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const musicController = new WeddingMusicController();
