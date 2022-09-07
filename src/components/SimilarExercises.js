import React from 'react';
import {Box, Stack, Typography} from'@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({equipmentExercises, targetMuscleExercises}) => {
  return (
    <Box sx={{sx:{lg:'100px', xs:'0'}}}>
      <Typography variant='h3' mb={2}>
        Exercises that targets the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mb={2}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises