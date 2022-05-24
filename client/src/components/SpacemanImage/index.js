import React from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import spacemanImage from '../../assets/images/astronaut.png'
export const SpacemanImage = () => {

    return (

        <>
        <img id='spaceman' src={spacemanImage} style={{ width: '100px' }} />
        </>

    )
}
