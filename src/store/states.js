//an example of the array of object to generate nodes and edges
export const initialElements = [
  {
    id: '1',
    type: 'input', // inputnode
    data: { label: 'Input Node' },
    position: { x: 100, y: 40 },
  },
  {
    id: '2',
    type: 'output', // inputnode
    data: { label: 'Input Node' },
    position: { x: 100, y: 100 },
  },
  {
    id: '12', //Edge
    source: '1',
    target: '2',
  },
];
