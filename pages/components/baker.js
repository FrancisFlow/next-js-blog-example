import { useState } from "react";


const Baker = () => {
    const [isTrue, setIsTrue]=useState(true)

    const setFalse = () =>{
        setIsTrue(false);
    }
    return ( 
        <>
        <button onClick={setFalse}>
            set to false
        </button>
        {isTrue && <div>Hey, I'm true.</div>}
        </>

        
     );
}
 
export default Baker;