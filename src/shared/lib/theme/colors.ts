export interface ColorsT {
  primary: {
    black: string;
    white: string;
    aqua: string;
    rose: string;
    gray: string;
    lemon: string;
    frost: string;
    light_gray: string;
  };
  background: {
    primary: string;
    secondary: string;
    element: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  accent: {
    red: string;
    blue: string;
    green: string;
    primary: string;
  };
}

export const lightColors: ColorsT = {
  primary: {
    black: '#1A1A1A',
    white: '#FFFFFF',
    aqua: '#00B4D8',
    rose: '#FFC8DD',
    gray: '#6B7280',
    lemon: '#E2FE52',
    frost: '#D3F8E2',
    light_gray: '#A0A0A0',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F3F3F3',
    element: '#EFEFEF',
  },
  text: {
    primary: '#1A1A1A',
    secondary: '#8C919E',
    disabled: '#A0A0A0',
  },
  accent: {
    primary: '#755EFF',
    red: '#EF4444',
    blue: '#3B82F6',
    green: '#10B981',
  },
};

export const darkColors: ColorsT = {
  primary: {
    black: '#FFFFFF',
    white: '#1A1A1A',
    aqua: '#00B4D8',
    rose: '#FFC8DD',
    gray: '#6B7280',
    lemon: '#E2FE52',
    frost: '#D3F8E2',
  },
  background: {
    primary: '#1A1A1A',
    secondary: '#2D2D2D',
    element: '#EFEFEF',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#D1D5DB',
    disabled: '#A0A0A0',
  },
  accent: {
    primary: '#755EFF',
    red: '#EF4444',
    blue: '#3B82F6',
    green: '#10B981',
  },
};

export const colors = lightColors;
