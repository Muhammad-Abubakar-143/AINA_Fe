

import React,{useState, useEffect, use} from 'react';



const Testing = () =>{
    const [state, setState] = useState(0);


    const adding =() =>{
    
        setState = setState +1;
    }

    useEffect(
        ()=>{

            const testingVeriable = 9;
            



        }, [arrayof1000, arrayof5000, arrayof10000]
    )


    return(
        <>
        <div>
            <h1>0</h1>
            <button onClick={adding}>Click me</button>
        </div>

        <div>vknwnvlkkanv</div>
        </>
    )
}