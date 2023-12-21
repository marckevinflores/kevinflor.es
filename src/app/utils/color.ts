
export function getTintedColor(color: string, intensity: number, mixColor: string = 'white') {
    return `color-mix(in srgb, ${color}, ${mixColor} ${intensity * 100}%)`
}
