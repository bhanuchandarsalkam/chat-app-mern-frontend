import React from 'react'
import Messages from './Messages';
import Messageinput from './Messageinput';
import {TiMessages} from "react-icons/ti"
const Messagecontainer = () => {
  const nochatselected=false;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {nochatselected ?(<Nochatselected/>):(<>
     <div className="bg-slate-500 px-4 py-2 mb-2" >
     <span className="label-text">To:</span><span className="text-gray-900 font-bold">chandra</span>
     </div>
     <Messages/>
     <Messageinput/>
     </>
      )}
    </div>
  )
}

export default Messagecontainer;

const Nochatselected=()=>{
  return(
    <div className="flex items-center justify-center w-full h-full">
     <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
      <p>welcome to Bhanu *</p>
      <p>select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl text-center"/>
     </div>
    </div>
  )
}
