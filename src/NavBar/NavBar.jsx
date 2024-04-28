import { useState } from "react";
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
import Link from "../components/Link/Link";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
      ];
            
    return (
        <nav className="text-black p-3 bg-yellow-300">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                    <MdOutlineClose className="text-3xl"></MdOutlineClose>
                    : <MdMenuOpen className="text-3xl" />
                }
               
            </div>
            <ul className={`md:flex absolute duration-1000 md:static
             ${open ? 'top-14' : '-top-80'}
            bg-yellow-300 px-4 rounded`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;