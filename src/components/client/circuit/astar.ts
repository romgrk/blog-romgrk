// Forked from http://github.com/bgrins/javascript-astar
// Freely distributable under the MIT License.
// Implements the astar search algorithm in javascript using a Binary Heap.
// Includes Binary Heap (with modifications) from Marijn Haverbeke.
// http://eloquentjavascript.net/appendix2.html

type Point = { x: number; y: number }

// See list of heuristics: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html
const heuristics = {
  manhattan: (a: GridNode, b: GridNode) => {
    const d1 = Math.abs(b.x - a.x)
    const d2 = Math.abs(b.y - a.y)
    return d1 + d2
  },
  diagonal: (a: GridNode, b: GridNode) => {
    const D = 1
    const D2 = Math.sqrt(2)
    const d1 = Math.abs(b.x - a.x)
    const d2 = Math.abs(b.y - a.y)
    return D * (d1 + d2) + (D2 - 2 * D) * Math.min(d1, d2)
  },
}

/**
 * Perform an A* Search on a graph given a start and end node.
 * @param graph
 * @param start
 * @param end
 * @param [options]
 * @param [options.closest] Specifies whether to return the path to the closest node if the target is unreachable.
 * @param [options.heuristic] Heuristic function (see astar.heuristics).
 */
export function search(
  graph: Graph,
  startP: Point,
  endP: Point,
  options: {
    closest?: boolean
    heuristic?: (a: GridNode, b: GridNode) => number
  } = {},
) {
  graph.cleanDirty()

  const start = graph.get(startP.x, startP.y)
  const end = graph.get(endP.x, endP.y)

  const closest = options.closest ?? true
  const heuristic = options.heuristic ?? heuristics.manhattan

  const openHeap = getHeap()
  let closestNode = start // set the start node to be the closest if required

  start.h = heuristic(start, end)

  openHeap.push(start)

  while (openHeap.size() > 0) {
    // Grab the lowest f(x) to process next.  Heap keeps this sorted for us.
    const currentNode = openHeap.pop()

    // End case -- result has been found, return the traced path.
    if (currentNode === end) {
      return pathTo(currentNode)
    }

    // Normal case -- move currentNode from open to closed, process each of its neighbors.
    currentNode.closed = true

    // Find all neighbors for the current node.
    const neighbors = graph.neighbors(currentNode)

    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i]

      if (neighbor.closed || neighbor.isWall()) {
        // Not a valid node to process, skip to next neighbor.
        continue
      }

      // The g score is the shortest distance from start to current node.
      // We need to check if the path we have arrived at this neighbor is the shortest one we have seen yet.
      const gScore = currentNode.g + neighbor.getCost(currentNode)
      const beenVisited = neighbor.visited

      if (!beenVisited || gScore < neighbor.g) {
        // Found an optimal (so far) path to this node.  Take score for node to see how good it is.
        neighbor.visited = true
        neighbor.parent = currentNode
        neighbor.h = neighbor.h || heuristic(neighbor, end)
        neighbor.g = gScore
        neighbor.f = neighbor.g + neighbor.h
        graph.markDirty(neighbor)
        if (closest) {
          // If the neighbour is closer than the current closestNode or if it's equally close but has
          // a cheaper path than the current closest node then it becomes the closest node
          if (
            neighbor.h < closestNode.h ||
            (neighbor.h === closestNode.h && neighbor.g < closestNode.g)
          ) {
            closestNode = neighbor
          }
        }

        if (!beenVisited) {
          // Pushing to heap will put it in proper place based on the 'f' value.
          openHeap.push(neighbor)
        } else {
          // Already seen the node, but since it has been rescored we need to reorder it in the heap
          openHeap.rescoreElement(neighbor)
        }
      }
    }
  }

  if (closest) {
    return pathTo(closestNode)
  }

  // No result was found - empty array signifies failure to find path.
  return []
}

export class Graph {
  nodes: GridNode[]
  grid: GridNode[][]
  options: { diagonal?: boolean }
  dirtyNodes: GridNode[]

  /**
   * A graph memory structure
   * @param weights w*h array of input weights
   * @param [options]
   * @param [options.diagonal] Specifies whether diagonal moves are allowed
   */
  constructor(
    weights: Int8Array,
    width: number,
    height: number,
    options: Graph['options'] = {},
  ) {
    this.nodes = []
    this.grid = []
    this.options = options
    this.dirtyNodes = []

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const weight = weights[y * width + x]
        const node = new GridNode(x, y, weight)
        this.grid[x] ??= []
        this.grid[x][y] = node
        this.nodes.push(node)
      }
    }
  }

  get(x: number, y: number) {
    return this.grid[Math.floor(x)][Math.floor(y)]
  }

  cleanDirty() {
    for (const node of this.dirtyNodes) {
      node.f = 0
      node.g = 0
      node.h = 0
      node.visited = false
      node.closed = false
      node.parent = null
    }
    this.dirtyNodes = []
  }

  markDirty(node: GridNode) {
    this.dirtyNodes.push(node)
  }

  neighbors(node: GridNode) {
    const result = []
    const x = node.x
    const y = node.y
    const grid = this.grid

    // West
    if (grid[x - 1] && grid[x - 1][y]) {
      result.push(grid[x - 1][y])
    }

    // East
    if (grid[x + 1] && grid[x + 1][y]) {
      result.push(grid[x + 1][y])
    }

    // South
    if (grid[x] && grid[x][y - 1]) {
      result.push(grid[x][y - 1])
    }

    // North
    if (grid[x] && grid[x][y + 1]) {
      result.push(grid[x][y + 1])
    }

    if (this.options.diagonal) {
      // Southwest
      if (grid[x - 1] && grid[x - 1][y - 1]) {
        result.push(grid[x - 1][y - 1])
      }

      // Southeast
      if (grid[x + 1] && grid[x + 1][y - 1]) {
        result.push(grid[x + 1][y - 1])
      }

      // Northwest
      if (grid[x - 1] && grid[x - 1][y + 1]) {
        result.push(grid[x - 1][y + 1])
      }

      // Northeast
      if (grid[x + 1] && grid[x + 1][y + 1]) {
        result.push(grid[x + 1][y + 1])
      }
    }

    return result
  }

  toString() {
    const graphString = []
    const nodes = this.grid // when using grid
    let rowDebug
    let row
    let y
    let l
    for (var x = 0, len = nodes.length; x < len; x++) {
      rowDebug = []
      row = nodes[x]
      for (y = 0, l = row.length; y < l; y++) {
        rowDebug.push(row[y].weight)
      }
      graphString.push(rowDebug.join(' '))
    }
    return graphString.join('\n')
  }
}

class GridNode {
  x: number
  y: number
  weight: number

  f: number
  g: number
  h: number
  visited: boolean
  closed: boolean
  parent: GridNode | null

  constructor(x: number, y: number, weight: number) {
    this.x = x
    this.y = y
    this.weight = weight
    this.f = 0
    this.g = 0
    this.h = 0
    this.visited = false
    this.closed = false
    this.parent = null
  }

  reset() {
    this.f = 0
    this.g = 0
    this.h = 0
    this.visited = false
    this.closed = false
    this.parent = null
  }

  toString() {
    return '[' + this.x + ' ' + this.y + ']'
  }

  getCost(neighbor: GridNode) {
    // Take diagonal weight into consideration.
    if (neighbor && neighbor.x !== this.x && neighbor.y !== this.y) {
      return this.weight * 1.41421
    }
    return this.weight
  }

  isWall() {
    return this.weight === -1
  }
}

class BinaryHeap<T = GridNode> {
  content: T[]
  scoreFunction: (node: T) => number

  constructor(scoreFunction: (node: T) => number) {
    this.content = []
    this.scoreFunction = scoreFunction
  }

  push(element: T) {
    // Add the new element to the end of the array.
    this.content.push(element)

    // Allow it to sink down.
    this.sinkDown(this.content.length - 1)
  }

  pop() {
    // Store the first element so we can return it later.
    const result = this.content[0]
    // Get the element at the end of the array.
    const end = this.content.pop()!
    // If there are any elements left, put the end element at the
    // start, and let it bubble up.
    if (this.content.length > 0) {
      this.content[0] = end
      this.bubbleUp(0)
    }
    return result
  }

  remove(node: T) {
    const i = this.content.indexOf(node)

    // When it is found, the process seen in 'pop' is repeated
    // to fill up the hole.
    const end = this.content.pop()!

    if (i !== this.content.length - 1) {
      this.content[i] = end

      if (this.scoreFunction(end) < this.scoreFunction(node)) {
        this.sinkDown(i)
      } else {
        this.bubbleUp(i)
      }
    }
  }

  size() {
    return this.content.length
  }

  rescoreElement(node: T) {
    this.sinkDown(this.content.indexOf(node))
  }

  sinkDown(n: number) {
    // Fetch the element that has to be sunk.
    const element = this.content[n]

    // When at 0, an element can not sink any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      const parentN = ((n + 1) >> 1) - 1
      const parent = this.content[parentN]

      // Swap the elements if the parent is greater.
      if (this.scoreFunction(element) < this.scoreFunction(parent)) {
        this.content[parentN] = element
        this.content[n] = parent
        // Update 'n' to continue at the new position.
        n = parentN
      }
      // Found a parent that is less, no need to sink any further.
      else {
        break
      }
    }
  }

  bubbleUp(n: number) {
    // Look up the target element and its score.
    const length = this.content.length
    const element = this.content[n]
    const elemScore = this.scoreFunction(element)

    while (true) {
      // Compute the indices of the child elements.
      const child2N = (n + 1) << 1
      const child1N = child2N - 1

      // This is used to store the new position of the element, if any.
      let swap = null
      let child1Score: number = -1

      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        const child1 = this.content[child1N]
        child1Score = this.scoreFunction(child1)

        // If the score is less than our element's, we need to swap.
        if (child1Score < elemScore) {
          swap = child1N
        }
      }

      // Do the same checks for the other child.
      if (child2N < length) {
        const child2 = this.content[child2N]
        const child2Score = this.scoreFunction(child2)
        if (child2Score < (swap === null ? elemScore : child1Score)) {
          swap = child2N
        }
      }

      // If the element needs to be moved, swap it, and continue.
      if (swap !== null) {
        this.content[n] = this.content[swap]
        this.content[swap] = element
        n = swap
      }
      // Otherwise, we are done.
      else {
        break
      }
    }
  }
}

function pathTo(node: GridNode) {
  const path = []
  let current = node
  while (current.parent) {
    path.push(current)
    current = current.parent
  }
  return path.reverse()
}

function getHeap() {
  return new BinaryHeap((node) => node.f)
}
