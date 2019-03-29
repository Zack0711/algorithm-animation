// Leetcode - 133. Clone Graph
const cloneGraph = graph => {
  const {
    $id,
    $ref,
    val,
  } = graph;

  if($id !== undefined){
    let neighbors = [];
    const nodeNeighbors = graph['neighbors'] || []
    for(let i = 0; i < nodeNeighbors.length; i += 1){
      const n = nodeNeighbors[i];
      neighbors.push(cloneGraph(n));
    }
    return {$id, neighbors, val};
  }else{
    return {$ref}
  }
  return cloneGraph(graph);
};

export {
  cloneGraph,
}