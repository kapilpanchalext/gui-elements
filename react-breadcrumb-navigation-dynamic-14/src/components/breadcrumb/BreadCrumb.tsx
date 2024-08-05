import { DataModel } from '../../model/DataModel';
import "../../App.css";

type Props = {
    links: DataModel[];
}

const BreadCrumb = ({links}: Props) => {
  return (
    <nav className="crumbs">
        <ol>
            {links.map((item, index) => (
                <li key={index} className="crumb">
                {item.href ? (
                    <a href={item.href}>{item.label}</a>
                ) : (
                    <span>{item.label}</span>
                )}
                </li>
            ))}
        </ol>
    </nav>
  )
};

export default BreadCrumb;