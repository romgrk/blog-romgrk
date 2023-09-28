import { Point } from 'romgrk-2d-geometry'

const path = typeof document !== 'undefined' ?
  document.createElementNS('http://www.w3.org/2000/svg', 'path') : null as unknown as SVGPathElement

export function getLength(p: string) {
  path.setAttribute('d', p)
  return path.getTotalLength()
}

export function getPointAt(p: string, ratio: number) {
  path.setAttribute('d', p)
  const target = path.getTotalLength() * ratio
  const point = path.getPointAtLength(target)
  return new Point(point.x, point.y)
}

export function getLine(a: Point, b: Point) {
  return `M${Math.round(a.x)},${Math.round(a.y)} l${Math.round(b.x - a.x)},${Math.round(b.y - a.y)}`
}
