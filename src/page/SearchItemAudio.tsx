import { Button } from "@mui/base"
import { Box, IconButton, LinearProgress, Paper, Skeleton, Typography } from "@mui/material"
import React, { Component, useRef, useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Item } from "../utils/types";

export const SearchItemAudio = (props: { item: Item }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = React.useState(10);

    const myRef = useRef<any>();

    // const audio = new Audio(props.item.link);
    const play = () => {
        // console.log(audio)
        myRef.current.play();
        setIsPlaying(true)
    }
    const pause = () => {
        myRef.current.pause();
        setIsPlaying(false)
    }
    return <>
        <Box sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            alignItems: "center"
        }}>
            <Box>
                <Typography variant="h4">{props.item.headline}</Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2">{props.item.time}</Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                m: 4
            }}>
                <Skeleton variant="rectangular" width={300} height={250} />
            </Box>
            <audio  
                controls
                controlsList="nodownload noplaybackrate"
                ref={myRef}
                src={props.item.link}
            />
            {/* <Box>
                <IconButton sx={{
                    borderRadius: 50,
                    backgroundColor: 'lightgray',
                }} onClick={
                    isPlaying ? pause : play}>
                    {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
            </Box>
            <Box>
                <LinearProgress value={myRef.current?.currentTime} />
            </Box> */}

        </Box>
    </>
}

export default SearchItemAudio