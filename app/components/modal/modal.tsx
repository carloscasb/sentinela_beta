"use cliente"

//import {smile} from 'lucide-react';

import { useEffect,  useContext } from 'react';
import { ModalContext } from './modal-context';

export default function Modal (){
 const {show, setShow} = useContext(ModalContext);

    return (


      
    <button className='  open={show} onOpenChange={setShow}'>
        <div>
            <h1>oi</h1>
        </div>
    </button>

    )

}