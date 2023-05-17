import {Outlet, Link} from "react-router-dom";

const Layout = () =>{
    return(
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/counter" >Counter</Link>
                </li>
                <li>
                    <Link to="/modal" >Modal</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    )

};
export default Layout;