import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
const getClasses = ({isActive}) => {
    return clsx(css.link, isActive && css.active);
}
export default function Navigation() {
    return (
        <header className={css.header}>
<nav>
    <NavLink to='/' className={getClasses}>Home</NavLink>
    <NavLink to='/movies' className={getClasses}>Movies</NavLink>
</nav>
        </header>
    )
}