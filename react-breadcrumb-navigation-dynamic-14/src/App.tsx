import BreadCrumb from "./components/breadcrumb/BreadCrumb";
import { DataModel } from "./model/DataModel";
import "./App.css";

function App() {

  const breadcrumbItems: DataModel[] = [
    { label: 'Bikes', href: '#' },
    { label: 'BMX', href: '#' },
    { label: 'Jump Bike 3000', href: '#' },
  ];

  return (
    <>
      <div>
        <BreadCrumb links={breadcrumbItems} />
        <h1>Jump Bike 3000</h1>
        <p>
          This BMX bike is a solid step into the pro world. It looks as legit as
          it rides and is built to polish your skills.
        </p>
      </div>
    </>
  )
}

export default App;