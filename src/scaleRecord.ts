import { NoteNames } from './NoteNames';
import { ScalePatterns } from './ScalePatterns';

export const naturalMajorScales: Record<NoteNames, NoteNames[]> = {
  [NoteNames.C]: [
    NoteNames.C,
    NoteNames.D,
    NoteNames.E,
    NoteNames.F,
    NoteNames.G,
    NoteNames.A,
    NoteNames.B,
  ],
  
  [NoteNames.CSharp]: [
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.F,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.ASharp,
    NoteNames.C,
  ],

  [NoteNames.DFlat]: [
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.GFlat,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.C,
  ],

  [NoteNames.D]: [
    NoteNames.D,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.G,
    NoteNames.A,
    NoteNames.B,
    NoteNames.CSharp,
  ],

  [NoteNames.DSharp]: [ /* Theoretical */ ],

  [NoteNames.EFlat]: [
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.G,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.D,
  ],

  [NoteNames.E]: [
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.A,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.DSharp,
  ],

  [NoteNames.F]: [
    NoteNames.F,
    NoteNames.G,
    NoteNames.A,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.D,
    NoteNames.E,
  ],

  [NoteNames.FSharp]: [
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.ASharp,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.F,
  ],

  [NoteNames.GFlat]: [
    NoteNames.GFlat,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.CFlat,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.F,
  ],

  [NoteNames.G]: [
    NoteNames.G,
    NoteNames.A,
    NoteNames.B,
    NoteNames.C,
    NoteNames.D,
    NoteNames.E,
    NoteNames.FSharp,
  ],

  [NoteNames.GSharp]: [ /* Theoretical */ ],

  [NoteNames.AFlat]: [
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.G,
  ],

  [NoteNames.A]: [
    NoteNames.A,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.D,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.GSharp,
  ],

  [NoteNames.ASharp]: [ /* Theoretical */ ],

  [NoteNames.BFlat]: [
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.D,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.G,
    NoteNames.A,
  ],

  [NoteNames.B]: [
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.ASharp,
  ],

  [NoteNames.CFlat]: [
    NoteNames.CFlat,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.E,
    NoteNames.GFlat,
    NoteNames.AFlat,
    NoteNames.BFlat,
  ],
};

export const harmonicMajorScales: Record<NoteNames, NoteNames[]> = {
  [NoteNames.C]: [
    NoteNames.C,
    NoteNames.D,
    NoteNames.E,
    NoteNames.F,
    NoteNames.G,
    NoteNames.AFlat,
    NoteNames.B,
  ],
  
  [NoteNames.CSharp]: [
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.F,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.A,
    NoteNames.C,
  ],

  [NoteNames.DFlat]: [
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.GFlat,
    NoteNames.G,
    NoteNames.C,
  ],

  [NoteNames.D]: [
    NoteNames.D,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.G,
    NoteNames.A,
    NoteNames.BFlat,
    NoteNames.CSharp,
  ],

  [NoteNames.DSharp]: [ /* Theoretical */ ],

  [NoteNames.EFlat]: [
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.G,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.CFlat,
    NoteNames.D,
  ],

  [NoteNames.E]: [
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.A,
    NoteNames.B,
    NoteNames.C,
    NoteNames.DSharp,
  ],

  [NoteNames.F]: [
    NoteNames.F,
    NoteNames.G,
    NoteNames.A,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.DFlat,
    NoteNames.E,
  ],

  [NoteNames.FSharp]: [
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.ASharp,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.D,
    NoteNames.F,
  ],

  [NoteNames.GFlat]: [
    NoteNames.GFlat,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.CFlat,
    NoteNames.DFlat,
    NoteNames.D,
    NoteNames.F,
  ],

  [NoteNames.G]: [
    NoteNames.G,
    NoteNames.A,
    NoteNames.B,
    NoteNames.C,
    NoteNames.D,
    NoteNames.GFlat,
    NoteNames.FSharp,
  ],

  [NoteNames.GSharp]: [ /* Theoretical */ ],

  [NoteNames.AFlat]: [
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.E,
    NoteNames.G,
  ],

  [NoteNames.A]: [
    NoteNames.A,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.D,
    NoteNames.E,
    NoteNames.F,
    NoteNames.GSharp,
  ],

  [NoteNames.ASharp]: [ /* Theoretical */ ],

  [NoteNames.BFlat]: [
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.D,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.GFlat,
    NoteNames.A,
  ],

  [NoteNames.B]: [
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.G,
    NoteNames.ASharp,
  ],

  [NoteNames.CFlat]: [
    NoteNames.CFlat,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.E,
    NoteNames.GFlat,
    NoteNames.G,
    NoteNames.BFlat,
  ],
};

export const naturalMinorScales: Record<NoteNames, NoteNames[]> = {
  [NoteNames.C]: [
    NoteNames.C,
    NoteNames.D,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.G,
    NoteNames.AFlat,
    NoteNames.BFlat,
  ],

  [NoteNames.CSharp]: [
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.A,
    NoteNames.B,
  ],

  [NoteNames.DFlat]: [ /* Theoretical */ ],

  [NoteNames.D]: [
    NoteNames.D,
    NoteNames.E,
    NoteNames.F,
    NoteNames.G,
    NoteNames.A,
    NoteNames.BFlat,
    NoteNames.C,
  ],

  [NoteNames.DSharp]: [
    NoteNames.DSharp,
    NoteNames.F,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.ASharp,
    NoteNames.B,
    NoteNames.CSharp,
  ],

  [NoteNames.EFlat]: [
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.GFlat,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.CFlat,
    NoteNames.DFlat,
  ],

  [NoteNames.E]: [
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.G,
    NoteNames.A,
    NoteNames.B,
    NoteNames.C,
    NoteNames.D,
  ],

  [NoteNames.F]: [
    NoteNames.F,
    NoteNames.G,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.DFlat,
    NoteNames.EFlat,
  ],

  [NoteNames.FSharp]: [
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.A,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.D,
    NoteNames.E,
  ],

  [NoteNames.GFlat]: [ /* Theoretical */ ],

  [NoteNames.G]: [
    NoteNames.G,
    NoteNames.A,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.D,
    NoteNames.EFlat,
    NoteNames.F,
  ],

  [NoteNames.GSharp]: [
    NoteNames.GSharp,
    NoteNames.ASharp,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.E,
    NoteNames.FSharp,
  ],

  [NoteNames.AFlat]: [
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.CFlat,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.E,
    NoteNames.GFlat,
  ],

  [NoteNames.A]: [
    NoteNames.A,
    NoteNames.B,
    NoteNames.C,
    NoteNames.D,
    NoteNames.E,
    NoteNames.F,
    NoteNames.G,
  ],

  [NoteNames.ASharp]: [
    NoteNames.ASharp,
    NoteNames.C,
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.F,
    NoteNames.FSharp,
    NoteNames.GSharp,
  ],

  [NoteNames.BFlat]: [
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.GFlat,
    NoteNames.AFlat,
  ],

  [NoteNames.B]: [
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.D,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.G,
    NoteNames.A,
  ],

  [NoteNames.CFlat]: [ /* Theoretical */ ],
};

export const harmonicMinorScales: Record<NoteNames, NoteNames[]> = {
  [NoteNames.C]: [
    NoteNames.C,
    NoteNames.D,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.G,
    NoteNames.AFlat,
    NoteNames.B,
  ],

  [NoteNames.CSharp]: [
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.A,
    NoteNames.C,
  ],

  [NoteNames.DFlat]: [ /* Theoretical */ ],

  [NoteNames.D]: [
    NoteNames.D,
    NoteNames.E,
    NoteNames.F,
    NoteNames.G,
    NoteNames.A,
    NoteNames.BFlat,
    NoteNames.CSharp,
  ],

  [NoteNames.DSharp]: [
    NoteNames.DSharp,
    NoteNames.F,
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.ASharp,
    NoteNames.B,
    NoteNames.D,
  ],

  [NoteNames.EFlat]: [
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.GFlat,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.CFlat,
    NoteNames.D,
  ],

  [NoteNames.E]: [
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.G,
    NoteNames.A,
    NoteNames.B,
    NoteNames.C,
    NoteNames.DSharp,
  ],

  [NoteNames.F]: [
    NoteNames.F,
    NoteNames.G,
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.DFlat,
    NoteNames.E,
  ],

  [NoteNames.FSharp]: [
    NoteNames.FSharp,
    NoteNames.GSharp,
    NoteNames.A,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.D,
    NoteNames.F,
  ],

  [NoteNames.GFlat]: [ /* Theoretical */ ],

  [NoteNames.G]: [
    NoteNames.G,
    NoteNames.A,
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.D,
    NoteNames.EFlat,
    NoteNames.FSharp,
  ],

  [NoteNames.GSharp]: [
    NoteNames.GSharp,
    NoteNames.ASharp,
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.E,
    NoteNames.G,
  ],

  [NoteNames.AFlat]: [
    NoteNames.AFlat,
    NoteNames.BFlat,
    NoteNames.CFlat,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.E,
    NoteNames.G,
  ],

  [NoteNames.A]: [
    NoteNames.A,
    NoteNames.B,
    NoteNames.C,
    NoteNames.D,
    NoteNames.E,
    NoteNames.F,
    NoteNames.GSharp,
  ],

  [NoteNames.ASharp]: [
    NoteNames.ASharp,
    NoteNames.C,
    NoteNames.CSharp,
    NoteNames.DSharp,
    NoteNames.F,
    NoteNames.FSharp,
    NoteNames.A,
  ],

  [NoteNames.BFlat]: [
    NoteNames.BFlat,
    NoteNames.C,
    NoteNames.DFlat,
    NoteNames.EFlat,
    NoteNames.F,
    NoteNames.GFlat,
    NoteNames.A,
  ],

  [NoteNames.B]: [
    NoteNames.B,
    NoteNames.CSharp,
    NoteNames.D,
    NoteNames.E,
    NoteNames.FSharp,
    NoteNames.G,
    NoteNames.ASharp,
  ],

  [NoteNames.CFlat]: [ /* Theoretical */ ],
};

export const scaleRecord: Record<ScalePatterns, Record<NoteNames, NoteNames[]>> = {
  [ScalePatterns.NaturalMajor]: naturalMajorScales,
  [ScalePatterns.HarmonicMajor]: harmonicMajorScales,
  [ScalePatterns.NaturalMinor]: naturalMinorScales,
  [ScalePatterns.HarmonicMinor]: harmonicMinorScales,
};
