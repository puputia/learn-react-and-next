import CountryItem from "./CountryItem";
import style from "./CountryList.module.css";

export default function CountryList({ countries = [] }) {
  console.log(countries);
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

