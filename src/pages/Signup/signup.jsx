import React from 'react'
import Gendercheckbox from './Gendercheckbox';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
     <div className='w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className="text-3xl font-semibold text-center text-gray-300">Signup
        <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
            <div>
                <label className='label p-2'>
                    <span className="text-base label-text">Fullname</span>
                </label>
                <input type="text" placeholder="enter fullname" className="w-full input input-bordered h-10"/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="enter username" className="w-full input input-bordered h-10"/>
            </div>
            <div>
                <label className='label'>
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="text" placeholder="enter password" className="w-full input input-bordered h-10"/>
            </div>
            <div>
                <label className='label'>
                    <span className="text-base label-text">Confirmpassword</span>
                </label>
                <input type="text" placeholder="enter password" className="w-full input input-bordered h-10"/>
            </div>
            <Gendercheckbox/>
            <a  href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Already have an Account?</a>
            <div>
                <button className="btn btn-block btn-sm mt-2">Signup</button>
            </div>
        </form>
     </div>
    </div>
  )
}

export default Signup;


//starting code
// return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//      <div className='w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className="text-3xl font-semibold text-center text-gray-300">Signup
//         <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//             <div>
//                 <label className='label p-2'>
//                     <span className="text-base label-text">Fullname</span>
//                 </label>
//                 <input type="text" placeholder="enter fullname" className="w-full input input-bordered h-10"/>
//             </div>
//             <div>
//                 <label className='label p-2'>
//                     <span className="text-base label-text">Username</span>
//                 </label>
//                 <input type="text" placeholder="enter username" className="w-full input input-bordered h-10"/>
//             </div>
//             <div>
//                 <label className='label'>
//                     <span className="text-base label-text">Password</span>
//                 </label>
//                 <input type="text" placeholder="enter password" className="w-full input input-bordered h-10"/>
//             </div>
//             <div>
//                 <label className='label'>
//                     <span className="text-base label-text">Confirmpassword</span>
//                 </label>
//                 <input type="text" placeholder="enter password" className="w-full input input-bordered h-10"/>
//             </div>
//             <Gendercheckbox/>
//             <a  href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"> Already have an Account?</a>
//             <div>
//                 <button className="btn btn-block btn-sm mt-2">Signup</button>
//             </div>
//         </form>
//      </div>
//     </div>
//   )