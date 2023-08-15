export default function Text({ bg="none", text='black', children }) {
  return <div className='container-lg pt-4'>
           <div className='row align-items-center justify-content-center'>
             <div className='col-12 col-lg-8'>
               <p className={ 'fs-3 rounded p-5 mt-3 bg-' +  bg + ' text-' + text}>
                 { children }
               </p>
             </div>
           </div>
         </div>
}
