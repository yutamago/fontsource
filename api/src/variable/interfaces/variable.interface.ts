export interface Metadata {
  default: number;
  min: number;
  max: number;
  step: number;
}

// https://fonts.google.com/variablefonts#axis-definitions
export type Axes =
  | 'ital'
  | 'wdth'
  | 'wght'
  | 'opsz'
  | 'slnt'
  | 'CASL'
  | 'CRSV'
  | 'XPRN'
  | 'FILL'
  | 'GRAD'
  | 'MONO'
  | 'SOFT'
  | 'WONK';

export type VariableResponse = {
  [key in Axes]: Metadata;
} & {
  downloads: {
    wghtOnly: string;
    full?: string;
  };
};

export type VariableResponseAll = {
  [key in Axes]: Metadata;
};
