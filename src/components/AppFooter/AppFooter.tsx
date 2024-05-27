import { Link } from "@mui/material";
import React from "react";
import styles from "./app-footer-styles.module.scss";

const AppFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/cookies">Cookies</Link>
      <Link href="/notifications">Notifications</Link>
      <Link href="/general-policies">General Policies</Link>
    </footer>
  );
};

export default AppFooter;
