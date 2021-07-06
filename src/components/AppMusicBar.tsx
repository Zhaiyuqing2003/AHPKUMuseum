import * as React from "react"
import { useState, useRef, useMemo, useEffect } from "react"

import {
    AppBar, Toolbar, IconButton, Stack, Slider, Box, Typography, useTheme, CircularProgress, Slide
} from "@material-ui/core"
import { Theme } from "@material-ui/core/styles";

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import { makeStyles } from "@material-ui/styles";

import mediaTagsQuery from "jsmediatags"

import ModeType from "../utils/ModeType";
import useUpdateEffect from "../utils/useUpdateEffect"
import useOnceEffect from "../utils/useOnceEffect";

//@ts-ignore
import school from "../audios/school.mp3"
//@ts-ignore
import country from "../audios/country.mp3"
//@ts-ignore
import empty from "../audios/Recording.mp3"
import { createRef } from "react";
import useOnMountSetupEffect from "../utils/useOnMountSetupEffect";
import useOnWillUnmountCleanupEffect from "../utils/useOnWillUnmountCleanupEffect";

declare module '@material-ui/styles'{
    interface DefaultTheme extends Theme {}
}

const useAppMusicBarStyle = makeStyles((theme) => ({
    appBar : {
        WebkitBackdropFilter : "blur(10px)",
        backdropFilter : "blur(10px)",
        transition : "ease-in-out 0.3s opacity,ease-in-out 0.3s background-color"
    },
    iconButton : {
        padding : theme.spacing(0.75),
        margin : theme.spacing(1)
    },
    playArrowIconButton : {
        padding : theme.spacing(0.75),
        margin : theme.spacing(0, -1)
    },

}))


const useMusicSliderStyle = makeStyles((theme) => ({
    slider : {
        color : "white"
    },
    sliderThumb : {
        backgroundColor : "white",
        "&:hover" : {
            boxShadow : "0px 0px 0px 8px rgb(255 255 255 / 16%)"
        }
    },
    sliderFocusVisible : {
        boxShadow : "0px 0px 0px 8px rgb(255 255 255 / 16%) !important"
    },
    sliderActive : {
        boxShadow : "0px 0px 0px 14px rgb(255 255 255 / 16%) !important"
    },
}))

const createAudio = function(src: string){
    const audio = new Audio(src)

    return audio
}


const formatTime = (time: number) => {
    const intTime = Number(time.toFixed(0))

    const seconds = intTime % 60
    const minutes = ((intTime - seconds) / 60) % 60
    const hours = (intTime - seconds - minutes * 60) / 3600

    if (hours < 1){
        return `${minutes.toFixed(0).padStart(2, "0")}:${seconds.toFixed(0).padStart(2, "0")}`
    } else {
        return `${hours.toFixed(0).padStart(2, "0")}:${minutes.toFixed(0).padStart(2, "0")}:${seconds.toFixed(0).padStart(2, "0")}`
    }
}

const useAppMusicBarColor = (theme : Theme , modeType: ModeType) => {
    if (modeType === ModeType.LIGHT){
        return theme.palette.primary.dark.replace(")", ",0.45)")
    } else {
        return theme.palette.background.paper + "77"
    }
}

const audioList = [
    createAudio(school),
    createAudio(country)
];


export default function(){

    const [audioIndex, setAudioIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isDisplaying, setIsDisplaying] = useState(false)

    const ref = useRef();

    const theme = useTheme()
    const classes = useAppMusicBarStyle()

    const { appOptions : { modeType }} = theme
    const appMusicBarColor = useAppMusicBarColor(theme, modeType)

    const currentAudio = audioList[audioIndex]
    const hasPreviousAudio = audioIndex !== 0
    const hasNextAudio = audioIndex < audioList.length - 1 

    const toggleMusicPlayingState = () => {
        isPlaying ? pauseAudio() : playAudio()
    }
    
    const pauseAndResetAudio = () => {
        pauseAudio()
        currentAudio.currentTime = 0
    }

    const toPreviousAudio = () => {
        console.warn("change audio")

        pauseAndResetAudio()
        setIsLoading(true)
        setAudioIndex(audioIndex - 1)
    }

    const toNextAudio = () => {
        console.warn("change audio")

        pauseAndResetAudio()
        setIsLoading(true)
        setAudioIndex(audioIndex + 1)
    }

    const handleLoaded = () => {
        console.warn("loaded")
        setIsLoading(false)
    }

    const playAudio = () => {
        const promise = currentAudio.play()
        setIsPlaying(true)
        return promise
    }

    const pauseAudio = () => {
        currentAudio.pause()
        setIsPlaying(false)
    }

    const changeMusicBarDisplay = () => {
        if (window.scrollY >= 30){
            setIsDisplaying(true)
        } else {
            setIsDisplaying(false)
        }
    }

    useUpdateEffect(() => {
        console.warn("update effect")
        playAudio()
    }, [audioIndex])

    useOnMountSetupEffect(() => {
        changeMusicBarDisplay()
        document.addEventListener("scroll", changeMusicBarDisplay);
    })

    useOnceEffect(() => {
        playAudio().catch((reason) => {
            console.warn(reason)
        })
    }, [isDisplaying], ([isDisplaying]: boolean[]) => {
        return isDisplaying
    })


    return (<Slide direction="up" in={isDisplaying} mountOnEnter unmountOnExit>
        <AppBar
            position = "fixed"
            className = { classes.appBar }
            sx = {{ top: 'auto', bottom: 0 }}
            style = {{
                backgroundColor : appMusicBarColor,
            }}>
        <Toolbar>
            <IconButton 
                color = "inherit" 
                onClick = { toPreviousAudio }
                className = { classes.iconButton }
                disabled = { !hasPreviousAudio }>
                <SkipPreviousIcon />
            </IconButton>
            <IconButton
                color = "inherit" 
                className = { classes.playArrowIconButton }
                onClick = { toggleMusicPlayingState }
                disabled = { isPlaying && isLoading }>{
                isPlaying
                    ? isLoading 
                        ? (<CircularProgress size = { theme.spacing(4.375) } color = "primary"/>)
                        : (<PauseIcon fontSize = "large"/>)
                    : (<PlayArrowIcon fontSize = "large" />)
            }</IconButton>
            <IconButton 
                color = "inherit" 
                onClick = { toNextAudio }
                className = { classes.iconButton }
                disabled = { !hasNextAudio }>
                <SkipNextIcon />
            </IconButton>
            <MusicSlider 
                audio = { currentAudio }
                onLoaded = { handleLoaded }
            />
        </Toolbar>
    </AppBar></Slide>)
}

function MusicSlider({ audio, onLoaded } : MusicSliderProps){

    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const classes = useMusicSliderStyle()
    const canAutoUpdate = useRef(true)

    const formattedDuration = useMemo(() => formatTime(duration), [duration])
    const formattedCurrentTime = useMemo(() => formatTime(currentTime), [currentTime])


    useOnMountSetupEffect(() => {
        audio.ontimeupdate = () => {
            if (canAutoUpdate.current){
                setCurrentTime(audio.currentTime)
            }
        }
    })

    useOnWillUnmountCleanupEffect(() => {
        audio.ontimeupdate = null
    })

    useEffect(() => {
        if (audio.readyState > 0){
            setDuration(audio.duration)
            setCurrentTime(audio.currentTime)
        } else {
            audio.onloadedmetadata = () => {
                setDuration(audio.duration)
                setCurrentTime(audio.currentTime)
            }
        }
    }, [audio])

    useEffect(() => {
        if (audio.readyState > 1){
            onLoaded()
        } else {
            onLoaded()
        }
    }, [audio])

    const handleSliderChange = (event, currentTime) => {
        canAutoUpdate.current = false

        setCurrentTime(currentTime)
    }

    const handleSliderChangeCommitted = (event, currentTime) => {
        canAutoUpdate.current = true

        audio.currentTime = currentTime
        setCurrentTime(currentTime)
    }

    return (<Box flexGrow = { 1 } width = "auto">
        <Stack spacing = { 3 }  alignItems = "center" direction = "row" paddingX = { 2 }>
            <Slider 
                min = { 0 } 
                max = { duration } 
                value = { currentTime }
                onChange = { handleSliderChange }
                onChangeCommitted = { handleSliderChangeCommitted }
                color = "primary"
                className = { classes.slider }
                classes = {{
                    thumb : classes.sliderThumb,
                    active : classes.sliderActive,
                    focusVisible : classes.sliderFocusVisible
                }}
            />
            <Typography marginTop = {0}>
                {formattedCurrentTime}/{formattedDuration}
            </Typography>
        </Stack>
    </Box>)
}

type MusicSliderProps = {
    audio : HTMLAudioElement, 
    onLoaded : () => void 
}

