import { LightColors, DarkColors } from './Colors'

export const getTheme = (theme) => {
  return { theme: theme, colors: theme === 'dark' ? DarkColors : LightColors }
}
