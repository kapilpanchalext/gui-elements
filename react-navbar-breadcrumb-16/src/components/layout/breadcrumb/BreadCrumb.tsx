import './BreadCrumb.css';

type Props = {}

const BreadCrumb = (props: Props) => {
  return (
    // <nav className="crumbs">
    //   <ol>
    //     <li className="crumb"><a href="#">Bikes</a></li>
    //     <li className="crumb"><a href="#">BMX</a></li>
    //     <li className="crumb">Jump Bike 3000</li>
    //   </ol>
    // </nav>

    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Category</a></li>
        <li><a href="#">Sub Category</a></li>
        <li><a href="#">Type</a></li>
        <li><span aria-current="page">Product</span></li>
      </ul>
    </nav>

  )
}

export default BreadCrumb;