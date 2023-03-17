import styles from "./layout.module.css";

type CountryLayoutProps = {
  children: React.ReactNode;
};

export default function CountryLayout({ children }: CountryLayoutProps) {
  return <div className={styles.center}>{children}</div>;
}
