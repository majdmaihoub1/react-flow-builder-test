import * as actions from './src/store/actions';

//Actions Test
//test wether the addNode returns the node types input and node name input
it('AddNode should return the node type and the node name ', () => {
  const nodeName = 'node name';
  const nodeType = 'input';
  const expectedAction = {
    type: 'ADD_NODE',
    payload: { nodeType, nodeName },
  };
  expect(actions.addNode({ nodeType, nodeName })).toEqual(expectedAction);
});
