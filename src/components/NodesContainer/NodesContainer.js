import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';

function NodesContainer() {
  //basic styling
  const style = {
    background: '#f6f6f6',
    width: '100%',
    height: 500,
    border: '1px dashed',
  };

  const dispatch = useDispatch();
  const elements = useSelector((state) => state); //the state selector

  /* dispatch the add new edge action between tow nodes*/
  const AddEdge = ({ source, target }) => {
    dispatch({
      type: 'ADD_EDGE',
      source,
      target,
    });
  };

  //returning the react-flow main component and render it
  return (
    <div>
      <ReactFlow style={style} elements={elements} onConnect={AddEdge}>
        <Background variant='dots' gap={12} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default NodesContainer;
