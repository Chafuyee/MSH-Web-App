import * as React from 'react';
import IndividualPost from './post';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PostGrid({narrow, post_array}) {
    let arrayDataItems;

    if (narrow) {
        arrayDataItems = post_array.map((post_id) =>    <Grid item key={post_id} xs={12}> <IndividualPost post_id={post_id} /> </Grid>);
    } else {
        arrayDataItems = post_array.map((post_id) =>    <Grid item key={post_id} xs={6}> <IndividualPost  post_id={post_id} /> </Grid>);
    }

    return (
        
        <Grid container spacing={2}>{arrayDataItems}</Grid>
        
      );
}