
export default function Slide({ href, children }) {
  return <a href={ href }
            target="_blank"
            className="text-decoration-none">
           <li>
             { children }
           </li>
         </a>
}
