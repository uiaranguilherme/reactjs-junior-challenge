import {useState, useEffect} from 'react';
import Lottie from 'react-lottie';
import Error from '../../Assets/error.json';
import Sucess from '../../Assets/success.json';

import { Message, MessageArea } from './styles.js';

const options = {
        loop: true,
        autoplay: true, 
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
}

export function AlertEvent({isVisible, message, type}){

    const [ animation, setAnimation ] = useState(null)

    useEffect(()=>{
        setTimeout(() => {
            isVisible = false
        }, 2000);
    }, [isVisible])

    useEffect(()=>{
        if(type === 'sucesso'){
            setAnimation(Sucess)
        }else if(type === 'erro'){
            setAnimation(Error)
        }else{
            setAnimation(null)
        }
    }, [type])

    return(
        <MessageArea
            style={{display: isVisible ?  'flex' : 'none', zIndex: isVisible ? 99 : 0}}
        >
            <div >
                <Lottie options={{...options, animationData : animation}} height="120px" width="120px"/>
                <Message>
                    {message}
                </Message>
            </div>
        </MessageArea>
    )
}