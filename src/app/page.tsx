import { Country } from "@/types/country";
import { CountryForm } from "./CountryForm";
import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await response.json();
  const countryNames = countries.map((country) => country.name.common).sort();

  return (
    <main className={styles.main}>
      <CountryForm countries={countryNames} />
    </main>
  );
}
