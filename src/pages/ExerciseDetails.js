import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/FetchData';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDetails = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const { id } = useParams();

useEffect(() => {
  const fetchExercisesData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
    const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'
    
    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    
    const exerciseVideoData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}exercise`, youtubeOptions)

    const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)

    const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)

    setExerciseVideos(exerciseVideoData.contents)

    setExerciseDetail(exerciseDetailData)

    setTargetMuscleExercises(targetMuscleExerciseData)

    setEquipmentExercises(equipmentExerciseData)
  }
  fetchExercisesData();
}, [id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises= {equipmentExercises}  />
    </Box>
  )
}

export default ExerciseDetails