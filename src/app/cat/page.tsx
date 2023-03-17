import { CatFact } from "@/types/cat";

export default async function CatPage() {
  const response = await fetch("http://localhost:3000/api/cat");
  const facts: CatFact[] = await response.json();

  return (
    <div>
      {facts.map((fact, i) => (
        <p key={i}>{fact.text}</p>
      ))}
    </div>
  );
}
