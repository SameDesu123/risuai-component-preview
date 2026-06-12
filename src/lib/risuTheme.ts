export type RisuThemeType = 'dark' | 'light';

export interface RisuTheme {
  name: string;
  description: string;
  type: RisuThemeType;
  values: {
    bgcolor: string;
    darkbg: string;
    surface: string;
    surface2: string;
    borderc: string;
    selected: string;
    draculared: string;
    textcolor: string;
    textcolor2: string;
    darkBorderc: string;
    darkbutton: string;
    buttonHover: string;
    buttonSelected: string;
    buttonText: string;
    accent: string;
    accentHover: string;
    accentText: string;
    inputBg: string;
    inputBorder: string;
    inputFocus: string;
    placeholder: string;
    danger: string;
    dangerHover: string;
    success: string;
    warning: string;
    info: string;
  };
}

const scaleSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const cssVarNameMap: Record<keyof RisuTheme['values'], string> = {
  bgcolor: 'bgcolor',
  darkbg: 'darkbg',
  surface: 'surface',
  surface2: 'surface2',
  borderc: 'borderc',
  selected: 'selected',
  draculared: 'draculared',
  textcolor: 'textcolor',
  textcolor2: 'textcolor2',
  darkBorderc: 'darkborderc',
  darkbutton: 'darkbutton',
  buttonHover: 'buttonhover',
  buttonSelected: 'buttonselected',
  buttonText: 'buttontext',
  accent: 'accent',
  accentHover: 'accenthover',
  accentText: 'accenttext',
  inputBg: 'inputbg',
  inputBorder: 'inputborder',
  inputFocus: 'inputfocus',
  placeholder: 'placeholder',
  danger: 'danger',
  dangerHover: 'dangerhover',
  success: 'success',
  warning: 'warning',
  info: 'info',
};

function setThemeColorScale(root: HTMLElement, name: string, base: string, hover = base) {
  root.style.setProperty(`--risu-theme-${name}`, base);
  root.style.setProperty(`--risu-theme-${name}-50`, `color-mix(in srgb, ${base} 12%, white)`);
  root.style.setProperty(`--risu-theme-${name}-100`, `color-mix(in srgb, ${base} 22%, white)`);
  root.style.setProperty(`--risu-theme-${name}-200`, `color-mix(in srgb, ${base} 36%, white)`);
  root.style.setProperty(`--risu-theme-${name}-300`, `color-mix(in srgb, ${base} 52%, white)`);
  root.style.setProperty(`--risu-theme-${name}-400`, `color-mix(in srgb, ${base} 72%, white)`);
  root.style.setProperty(`--risu-theme-${name}-500`, base);
  root.style.setProperty(`--risu-theme-${name}-600`, hover);
  root.style.setProperty(`--risu-theme-${name}-700`, `color-mix(in srgb, ${hover} 82%, black)`);
  root.style.setProperty(`--risu-theme-${name}-800`, `color-mix(in srgb, ${hover} 68%, black)`);
  root.style.setProperty(`--risu-theme-${name}-900`, `color-mix(in srgb, ${hover} 54%, black)`);
}

export function applyRisuTheme(theme: RisuTheme) {
  const root = document.documentElement;

  for (const [key, value] of Object.entries(theme.values) as [keyof RisuTheme['values'], string][]) {
    root.style.setProperty(`--risu-theme-${cssVarNameMap[key]}`, value);
  }

  setThemeColorScale(root, 'primary', theme.values.accent, theme.values.accentHover);
  setThemeColorScale(root, 'secondary', theme.values.info);
  setThemeColorScale(root, 'danger', theme.values.danger, theme.values.dangerHover);
  setThemeColorScale(root, 'success', theme.values.success);
  setThemeColorScale(root, 'neutral', theme.values.textcolor2);
  root.style.setProperty('--risu-theme-neutral-0', theme.values.accentText);

  document.documentElement.dataset.risuThemeType = theme.type;
}

export function getThemeScaleNames() {
  return scaleSteps;
}
