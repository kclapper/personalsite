
export default function Table({ title, children }) {
  return <>
           <h5 className='display-5 pb-2'>
             { title }
           </h5>
           <table className='table'>
             <tbody>
               { children }
             </tbody>
           </table>
         </>
}
