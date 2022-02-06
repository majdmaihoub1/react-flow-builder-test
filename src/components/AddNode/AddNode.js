import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';

function AddNode() {
  const [nodeType, setNodeType] = useState(''); /*to set the node type*/
  const [nodeName, setNodeName] = useState(''); /*to set the node input name*/

  const dispatch = useDispatch();

  /*dispatch an action for adding new node when calling this function*/
  const AddNode = () => {
    dispatch({ type: 'ADD_NODE', nodeType, nodeName });
  };

  return (
    <Grid container>
      {/* get the Node type value from the user input and set it in the NodeType
      state*/}
      <Grid sm={12} lg={12} xl={12} item>
        <FormControl sx={{ mt: 3, minWidth: 400 }}>
          <InputLabel>Node type</InputLabel>
          <Select
            label='Node type'
            value={nodeType}
            onChange={(e) => setNodeType(e.target.value)}
          >
            <MenuItem selected value='default'>
              default
            </MenuItem>
            <MenuItem value='input'>input</MenuItem>
            <MenuItem value='output'>output</MenuItem>
          </Select>
          <FormHelperText>Select your Node Type</FormHelperText>
        </FormControl>
      </Grid>

      {/* get the name value from the user input and set it in the nodeName
      state*/}
      <Grid sm={12} lg={12} xl={12} item>
        <FormControl sx={{ mt: 3, minWidth: 400 }}>
          <TextField
            required
            id='outlined-basic'
            label='Your Node name here'
            onChange={(event) => setNodeName(event.target.value)}
            variant='outlined'
          />
        </FormControl>
      </Grid>
      {/* call the addNode function to dispatch the action and add the new node*/}
      <Grid mt={3} sm={12} lg={12} xl={12} item>
        <Button variant='outlined' onClick={AddNode}>
          Add New Case
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddNode;
