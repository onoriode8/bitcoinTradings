import React, { useState, useEffect } from 'react';
import classes from './Earn.module.css';

const Earn = () => {
    const [America, setAmerica] = useState(false);
    const [Australia, setAustralia] = useState(false);
    const [Germany, setGermany] = useState(false);
    const [uk, setUk] = useState(false);
    const [canada, setCanada] = useState(false);
    const [southAfrica, setSouthAfrica] = useState(false);

    useEffect(() => {
        // for set canada
        setTimeout(() => {
            setCanada(true);
        }, 3000);
        setTimeout(() => {
            setCanada(false);
        }, 10000);
        // for set germany
        setTimeout(() => {
            setGermany(true);
        }, 15000);
        setTimeout(() => {
            setCanada(false);
        }, 26000);
        // for set America
        setTimeout(() => {
            setAmerica(true);
        }, 33000);
        setTimeout(() => {
            setCanada(false);
        }, 47000);
        // for set uk
        setTimeout(() => {
            setUk(true);
        }, 56000);
        setTimeout(() => {
            setUk(false);
        }, 68000);
        // for set australia
        setTimeout(() => {
            setAustralia(true);
        }, 73000);
        setTimeout(() => {
            setAustralia(false);
        }, 90000);
        // set for south africa
        setTimeout(() => {
            setSouthAfrica(true);
        }, 100000);
        setTimeout(() => {
            setSouthAfrica(false);
        }, 200000);
    });

    return (
        <header className={classes.earn}>
            { canada ? 
            <p className={classes.canada}>someone from 
               <strong> Canada</strong> just earn <strong>$3000</strong></p> : null }
            { Australia ? <p className={classes.australia}>someone from 
                 <strong>Australia</strong> just earn <strong>$7000</strong></p> : null }
            { southAfrica ? <p className={classes.southAfrica}>someone from 
                 <strong>South Africa</strong> just earn <strong>$5000</strong></p> : null }
            { uk ? <p className={classes.uk}>someone from <strong>United Kingdom
                 </strong> just earn <strong>$16000</strong></p> : null }
                { Germany ? <p className={classes.germany}>someone from <strong>Germany
                    </strong> just earn <strong>$10000</strong></p> : null }
                { America ? <p className={classes.america}>someone from <strong>United State Of
                     America</strong> just earn <strong>$20000</strong></p> : null }
        </header>
    );
}

export default Earn;