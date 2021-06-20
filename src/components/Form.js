import React from 'react';
import { makeStyles, useStyles } from '@material-ui/core/styles';

/*
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))
*/

export default function Form(props) {

    //const classes = useStyles();
    const { children, ...other } = props;
    //className={classes.root}
    return (
        <form  autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}