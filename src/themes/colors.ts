export const colors = {
  primary: '#444444',
  primaryDark: '#222222',
  secondary: '#EEEEEE',
  secondartDark: '#BBBBBB',
  buttonBorder: '',
  buttonBorderDark: '',
  border: '#AAAAAA',
  borderDark: '',
  background: '#eeeeee',
  backgroundDark: '#222222',
  accent: '#0d87e0',
  text: '#555555',
  textDark: 'white',
  gray: '#707070',
  danger: '#DD2222',
  dangerDark: '#AA2222',
  white: '#FFFFFF',
  placeholder: '#999999',
} as const

export function toDark(colorKey: keyof typeof colors): string {
  const darkKey = colorKey + 'Dark'
  if (darkKey in colors) {
    return colors[darkKey as keyof typeof colors]
  }
  throw new Error(`The dark version of color "${colorKey}" is not defined.`)
}
