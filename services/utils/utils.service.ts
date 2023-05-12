import tailwindConfig from '~/tailwind.config'
export class UtilsService {
  getColor(colorName: string): string {
    const colors: any = tailwindConfig.theme.colors
    const splitColor = colorName.split('-')
    const colorKey = splitColor[0]
    const colorVolume = splitColor[1]
    if (!colorVolume) {
      if (typeof colors[colorKey] === 'string') {
        return colors[colorKey]
      }
      return colors[colorKey]?.DEFAULT ?? 'currentColor'
    }
    return colors[colorKey][colorVolume] ?? 'currentColor'
  }
}
