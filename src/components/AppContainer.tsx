import * as React from "react";
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useAppContainerStyle = makeStyles({
    container : {
        position : "absolute"
    }
})

export default function(props){
    const { children, ...others } = props;
    const classes = useAppContainerStyle();

    return (<Container { ...others } className = { classes.container }>
        { props.children }
    </Container>)
}