import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { Context } from "../context/AppContext";
import altinIsimleri from "../constants/altin-isimleri";

const Altin = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { search } = useContext(Context);

  const filteredData = () => {
    const filteredData = {};

    for (const key in data) {
      const value = data[key];
      if (value.Tür === "Altın") {
        if (altinIsimleri.find((a) => a.key === key).value.toLowerCase("TR").includes(search.trim().toLowerCase("TR"))) {
          filteredData[key] = data[key];
       }
      }
    }

    return filteredData;
  }

  const getData = () => {
    fetch("https://finans.truncgil.com/today.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="border p-4 rounded-lg bg-white/10 border-white/50">
      <div
        className={
          loading
            ? "w-full flex items-center justify-center"
            : Object.keys(filteredData()).length > 0
            ? "w-full grid md:grid-cols-3 gap-4"
            : "w-full flex items-center justify-center"
        }
      >
        {loading ? (
          <Loading inline={true} />
        ) : Object.entries(filteredData()).map(([key, value], index) => value.Tür === "Altın" && (
            <div
                key={index}
                className="hover:scale-105 cursor-pointer transition-all px-4 py-2 shadow rounded-md bg-white/20 border border-white/50 flex items-center justify-center flex-col gap-1"
              >
                <p className="text-2xl font-bold text-center">{altinIsimleri.find((a) => a.key === key).value}</p>
                <p className="text-base text-center">
                  {value.Alış} &#8378;
                </p>
              </div>
        ))}
      </div>
    </div>
  );
};

export default Altin;
