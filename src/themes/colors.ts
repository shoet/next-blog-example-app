export const colors = {
  primary: '#444444',
  primaryDark: '',
  secondary: '#EEEEEE',
  secondartDark: '',
  buttonBorder: '',
  buttonBorderDark: '',
  border: '#AAAAAA',
  borderDark: '',
  background: '#eeeeee',
  backgroundDark: '#222222',
  accent: '#0d87e0',
  text: 'black',
  textDark: 'white',
  gray: '#707070',
} as const

export function toDark(colorKey: keyof typeof colors): string {
  const darkKey = colorKey + 'Dark'
  if (darkKey in colors) {
    return colors[darkKey as keyof typeof colors]
  }
  throw new Error(`The dark version of color "${colorKey}" is not defined.`)
}
