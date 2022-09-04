export const media = {
  large: 1128,
  medium: 744,
  small: 450
}

type MediaProp = 'large' | 'medium' | 'small'

export const greaterThan = (size: MediaProp | number) => {
  if (typeof size === 'number') {
    return `@media (min-width: ${size}px)`
  }
  return `@media (min-width: ${media[size]}px)`
}
