"use client";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface CountryFormProps {
  countries: string[];
}

export function CountryForm({ countries }: CountryFormProps): JSX.Element {
  const [selected, setSelected] = useState<string>("");
  const router = useRouter();

  return (
    <div>
      <select
        value={selected}
        onChange={(props) => {
          setSelected(props.target.value);
        }}
      >
        {countries.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
      <Button
        title="submit"
        onClick={() => {
          router.push(`/${selected}`);
        }}
      />
    </div>
  );
}
