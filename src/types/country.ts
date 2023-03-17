export type Country = {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  flag: string;
  flags: {
    png: string;
  };
  population: number;
  continents: string[];
};
