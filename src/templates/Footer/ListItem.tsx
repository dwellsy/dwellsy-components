import "../../App.css";

export const LI = ({ link, text }:{ link: string, text: string }) => {
  return (
    <li>
      <a href={link} className="dark:text-gray-300 dark:hover:text-gray-200 text-gray-600 hover:text-gray-800">{ text }</a>
    </li>
  )
}

export default LI;