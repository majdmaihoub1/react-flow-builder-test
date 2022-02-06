 ### Description : 
This repo intended to demonstrate the build of a basic React visual flowchart builder app
Using Redux as a state management library and Reactflow library as the flow builder and the material UI as a UI library.
 ## Demo
 [view live deom](https://majdmaihoub1.github.io/react-flow-builder-test/)

## How to run :
1-Open the project in your favorite IDE
2-Open terminal 
3-Run npm start

## Tests:
1. The used library to run the tests is Jest a JavaScript Testing Framework with a focus on simplicity
2. The conducted test is on addNode action to validate the payload
3. Type npm run test to run the tests

**P.s: we can conduct more tests like :
- addEdge action test to validate the source and target payload.
- Snapshot Testing for the ReactFlow component.

## Project features:
- Users can add a new node.
- The user can set the node name.
- Users can choose the node type to customize the inputs and outputs of its nodes in the flow (input only, output only, default input, and output).
- Users can drag and drop the elements in the canvas to structure it as they desire.

## What did I use to make it happen?

I’ve used ReactFlow library as a dependency as I’ve found out that it provides a lot of features that can reduce time consumed and it provide a lot of helper functions and has a fast rendering feature means that only nodes that have changed are re-rendered and only those that are in the viewport are displayed.

I’ve used redux as state management to store the elements(nodes and edges) as global in the app since almost all the components will need to deal with it so we can avoid props drilling issues and such. 

The most time-consuming task was using the Redux store to control ReactFlow elements since it uses its helper functions (callbacks functions) to achieve most of its common actions.
(approx 3.5 hours)


 ## How can we make it better :
- Adding the rest functionalities such as updating a node by using an active node helper to select the node and update it
- Deleting a node (using ElementsToRemove helper)
- Change the shapes of the nodes to be more fit to the use cases by using customNodes(adding more inputs or output to a node)
- Managing the state in a different structure(split reducers and combining them in one file and create a selectors file so when we have an active node state or any other global states we can use them in a much scalable way.

## The time consumed for this task :
Approx 6 hours and 30 minutes
- Learning more about ReactFlow: **1 hour
- Building the store : 1 hour
- Connecting the store and control ReactFlow in a simple way : 3.5 hours
- Test and documentation : 1 hour



**Thank you for your time







