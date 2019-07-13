export enum BulmaColor {
  Primary = 'Primary',
  Link = 'Link',
  Info = 'Info',
  Success = 'Success',
  Warning = 'Warning',
  Danger = 'Danger',
}

export enum BulmaSize {
  Small = 'Small',
  Normal = 'Normal',
  Medium = 'Medium',
  Large = 'Large',
}

export function makeSizeProps(size: BulmaSize = BulmaSize.Normal) {
  return {
    [BulmaSize.Small]: 'is-small',
    [BulmaSize.Normal]: '',
    [BulmaSize.Medium]: 'is-medium',
    [BulmaSize.Large]: 'is-large',
  }[size]
}

export function makeColorProps(color?: BulmaColor, prefix: string = 'is') {
  if (!color) return ''
  return {
    [BulmaColor.Primary]: `${prefix}-primary`,
    [BulmaColor.Link]: `${prefix}-link`,
    [BulmaColor.Info]: `${prefix}-info`,
    [BulmaColor.Success]: `${prefix}-success`,
    [BulmaColor.Warning]: `${prefix}-warning`,
    [BulmaColor.Danger]: `${prefix}-danger`,
  }[color]
}
