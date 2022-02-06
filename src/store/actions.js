//exporting the actions names here (add action name here when adding new actions)
export const ADD_NODE = 'ADD_NODE';
export const ADD_EDGE = 'ADD_EDGE';

//action that return the new node with its name and type
export function addNode({ nodeType, nodeName }) {
  return {
    type: ADD_NODE,
    payload: { nodeType, nodeName },
  };
}

//action that return the new edge with its source and target
//return an array of all the elements and the new object which has the id ,source,
//target since the nodes and edges combined in one array of objects
export function addEdge(elements, { id, source, target }) {
  return {
    type: ADD_EDGE,
    payload: [...elements, { id, source, target }],
  };
}
