export default function Text({ bg="none", text='black', children }) {
  return <p className={ 'rounded p-4 mt-3 bg-' +  bg + ' text-' + text}>
           { children }
         </p>
}
