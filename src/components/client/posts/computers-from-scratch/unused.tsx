import * as astar from '../../circuit/astar'

export function DemoAstar() {
  const weights = [
    [3,  2, 1, 1, 1, 1, 1, 1],
    [4,  3, 2, 1, 1, 1, 1, 1],
    [5,  4, 3, 2, 1, 1, 1, 1],
    [-1, 5, 4, 3, 2, 1, 1, 1],
    [-1, 5, 4, 3, 2, 1, 1, 1],
  ]
  const width = weights[0].length
  const height = weights.length
  const data = new Int8Array(width * height)
  weights.forEach((ws, y) => {
    ws.forEach((w, x) => {
      data[y * width + x] = w
    })
  })

  const graph = new astar.Graph(data, weights[0].length, weights.length)
  const result = astar.search(graph, { x: 0, y: 0 }, { x: 4, y: 4 })
  return (
    <div className=''>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {weights.map((ws, y) =>
          <div style={{ display: 'flex', border: '1px solid #666' }}>
            {ws.map((w, x) =>
              <div style={{
                display: 'flex', flex: '1', border: '1px solid #666',
                backgroundColor: result.some(n => n.x === x && n.y === y) ? 'rgba(255, 255, 0, 0.2)' : undefined
              }}>
                {w === -1 ? 'x' : <span>&nbsp;</span>}
              </div>
            )}
          </div>
        )}
      </div>
      <div className=''>
        {JSON.stringify(result.map(n => ({ x: n.x, y: n.y })))}
      </div>
    </div>
  )
}
