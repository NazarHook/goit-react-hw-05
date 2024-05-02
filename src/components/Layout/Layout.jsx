import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<Loader></Loader>}>
        {children}
      </Suspense>
    </div>
  );
}