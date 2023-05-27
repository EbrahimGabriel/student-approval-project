import { Outlet, Link } from 'react-router-dom';

export default function Root() {
    return (
        <>
            <nav>
                <ul id="NavBarUL">
                    <li><Link to={"/"}>Home</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}