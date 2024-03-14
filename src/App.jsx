 import { useState } from 'react';
import Cart from './Cart'
import Dev from './Dev'
 

function App() {
  const [carts, setCarts] = useState([]);
 const coursesSelectHandle = (course) =>{
  console.log(course);
  setCarts((c) => [...c, course]);
 }
 
  return (
   <div className='p-4 container mx-auto '>
    <h1 className='text-4xl text-center'>Course Registration</h1>
   <div className=' flex  justify-around mt-4'>
    <div  >
   <Dev coursesSelectHandle={coursesSelectHandle}></Dev>
    </div>
    <div  >
    <Cart carts={carts}></Cart>
    </div>
   </div>
   </div>
  )
}

export default App
