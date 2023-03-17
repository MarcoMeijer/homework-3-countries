import { Country } from "@/types/country";
import Image from "next/image";

export interface CountryPageProps {
  params: { countryName: string };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const countryName = decodeURIComponent(params.countryName);
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${params.countryName}`
  );
  const json = await response.json();

  if (!Array.isArray(json)) {
    return <p>Unknown country `{countryName}`</p>;
  }

  const countries: Country[] = json.filter((country: Country) => {
    return country.name.common === countryName;
  });

  if (countries.length === 0) {
    return <p>Unknown country `{countryName}`</p>;
  }

  const country = countries[0];

  const wikipedia = `https://en.wikipedia.org/wiki/${params.countryName}`;

  return (
    <main>
      <Image
        src={country.flags.png}
        width={200}
        height={140}
        alt={`Flag of ${countryName}`}
      />
      <h1>{countryName}</h1>
      <p>{country.capital[0]}</p>
      <p>Population: {country.population}</p>
      <p>Continents: {country.continents.join(", ")}</p>
      <a href={wikipedia}>wikipedia page</a>
    </main>
  );
}
