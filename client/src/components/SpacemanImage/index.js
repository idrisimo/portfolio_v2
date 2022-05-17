import React from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import spacemanImage from '../../assets/images/astronaut.png'
export const SpacemanImage = () => {

    return (

        // <ParallaxProvider>

        //     <Parallax rotateZ={[0,180]}>

        //         <img id='spaceman' src={spacemanImage} style={{ width: '100px' }} />
        //     </Parallax>

        // </ParallaxProvider>
        <>
        <img id='spaceman' src={spacemanImage} style={{ width: '100px' }} />
        </>

    )
}
