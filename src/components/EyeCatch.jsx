import { Fragment } from "react";
import video from '../assets/video.mp4'

const EyeCatch = () => {
    return ( 
        <>
        <div id="videoDiv">
            <video src={video} autoPlay loop id="video"></video>
            <div id="textOverlay">
                <p>Become a Global Leader<br />
                    With Net Smile and AI
                </p>
            </div>
        </div>
        </>
     );
}
 
export default EyeCatch;