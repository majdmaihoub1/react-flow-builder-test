import { ADD_NODE, ADD_EDGE } from './actions';
import { initialElements } from './states';
export const reducer = (state = initialElements, action) => {
  switch (action.type) {
    //add node returns the new state after the new node object to the state array
    case ADD_NODE:
      state = [
        ...state,
        {
          id: Math.random().toString(), //convert the id to string since its required to return a string
          position: { x: 100, y: 50 }, //initial position  for the new node (could be dynamic)
          data: { label: action.nodeName },
          type: action.nodeType,
        },
      ];
      return state;

    //add edges returns the new state after adding the new edge object to the state array
    case ADD_EDGE:
      return [
        ...state,
        {
          id: Math.random().toString(),
          source: action.source, //source node
          target: action.target, //targeted node
        },
      ];

    default:
      return state;
  }
};
