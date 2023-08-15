
export default function Slide({ href, children }) {
  return <a href={ href }
            download
            className="text-decoration-none">
           <li>
             { children }
           </li>
         </a>
}
