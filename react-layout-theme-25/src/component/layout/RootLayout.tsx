import { Outlet } from 'react-router-dom';
import "./RootLayout.css";

type Props = {}

const RootLayout = (props: Props) => {
  return (
    // <div className="layout">
    //   <header className="top-nav">
    //     <h1>NavigationBar</h1>
    //   </header>
    //   <div className="content">
    //     <aside className="side-nav">
    //       <h1>SideNav</h1>
    //       <ul>
    //         <li><a href="/home">Home</a></li>
    //         <li><a href="/about">About</a></li>
    //         <li><a href="/contact">Contact</a></li>
    //       </ul>
    //     </aside>
    //     </div>
    //     <main className="main-content">
    //       <Outlet />
    //     </main>
    // </div>
    <>
      <header className="top-nav">
        Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail in both larval
        and adult forms.
      </header>

      <aside className="side-nav">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout;