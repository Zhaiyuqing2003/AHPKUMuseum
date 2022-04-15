import * as React from "react";
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useAppContainerStyle = makeStyles({
    container : {
        position : "absolute",
        overflow : "hidden"
    }
})
// hahaha
export default function(props){
    const classes = useAppContainerStyle();

    return (<Container
                disableGutters  
                maxWidth = { false } 
                className = { classes.container }>
        { props.children }
    </Container>)
}
// ?