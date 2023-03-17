import { Country } from "@/types/country";
import styles from "./page.module.css";

export default async function Home() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: Country[] = await response.json();
  const countryNames = countries.map((country) => country.name.common).sort();

  return (
    <main className={styles.main}>
      <select>
        {countryNames.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
    </main>
  );
}
