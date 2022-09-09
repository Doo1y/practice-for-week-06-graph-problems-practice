function getNeighbors(row, col, graph) {
  let neighbors = new Array();
  // Check top
  if (col > 0 && graph[row][col - 1]) {
    neighbors.push([row, col - 1]);
  }

  if (col < graph[0].length - 1 && graph[row][col + 1]) {
    neighbors.push([row, col + 1]);
  }

  if (row > 0 && graph[row - 1][col]) {
    neighbors.push([row - 1, col]);
  }

  if (row < graph.length - 1 && graph[row + 1][col]) {
    neighbors.push([row + 1, col]);
  }
  return neighbors
}


function islandSize(row, col, graph) {
  // Initialize size to 0
  let size = 0

    // Create a visited set to store visited nodes
    , visited = new Set([[row, col].toString()])

    // Create a stack, put the starting node in the stack
    , stack = [[row, col]];

  // While the stack is not empty,
  while (stack.length) {

    // Pop the first node
    let currNode = stack.pop();

    // DO THE THING (increment size by 1)
    if (graph[currNode[0]][currNode[1]] === graph[row][col]) size++;


    let neighbors = getNeighbors(currNode[0], currNode[1], graph);
    neighbors.forEach(indexPair => {
      if (!visited.has(indexPair.toString())) {

        // Then push all the UNVISITED neighbors on top of the stack
        stack.push(indexPair);

        // and mark them as visited
        visited.add(indexPair.toString());
      }
    });
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
  } 

  // return size
  return size;
}

matrix = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
]
console.log(getNeighbors(0, 0, matrix));
console.log(islandSize(0, 0, matrix));

module.exports = [getNeighbors, islandSize];