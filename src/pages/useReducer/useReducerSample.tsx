import React, { Fragment, useReducer, useState } from 'react'
import ThemeReducer, { ThemeActionTypes, ThemeState } from './ThemeReducer';
import { Box, Button } from '@mui/material';

function useReducerSample() {

    const initialThemeState: ThemeState = {foreColor:'white', bgColor:'black'};
    const [state,dispatch] = useReducer(ThemeReducer,initialThemeState);

    // const [foreColor,setForeColor] = useState('white');
    // const [bgColor,setBgColor] = useState('black');

    // dispatch ile state değiştirmek bir eylemde bulunuruz.
    // state dispatch sonrası değişen state erişmemizi sağlar.

    const colors = ["white","black","yellow","green","blue","purple","red"];

    const changeForeColor = () => {
      const random = Number(Math.round(Math.random() * colors.length));
      dispatch({type:ThemeActionTypes.THEME_FORECOLOR, 
        payload: {...state,foreColor:colors[random]}
      });
      // setForeColor(colors[random].toString());
    }

    const changeBgColor = () => {
      const random = Number(Math.round(Math.random() * colors.length));
      dispatch({type:ThemeActionTypes.THEME_BGCOLOR, 
        payload: {...state,bgColor:colors[random]}
      });
      // setBgColor(colors[random].toString());
    }



  return (
    <Fragment>
    <Box sx={{backgroundColor:state.bgColor, color:state.foreColor, minHeight:'20vh', padding:'5px'}}>
        Use Reducer Sample
        <br></br>
        <Button variant='outlined' color='primary' onClick={changeForeColor}>Random Fore Color</Button>
        {' '}
        <Button variant='contained' color='primary' onClick={changeBgColor}>Random Bg Color</Button>
    </Box>
    
    </Fragment>
  )
}

export default useReducerSample