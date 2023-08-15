
export default function Food({ emph, children }) {
  if (emph) {
    return <li style={{ color: "red" }}>
             <strong>
               { children }
             </strong>
           </li>
  }

  return <li>
           { children }
         </li>
}
