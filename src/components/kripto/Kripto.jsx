import { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import { Context } from "../../context/AppContext";
import PaginatedItems from "./PaginatedItems";

const Kripto = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { search } = useContext(Context);

  const filteredData = () => {
    const filteredData = {};

    for (const key in data) {
      const value = data[key];
      if (value.buying !== null && value.buying !== 0 && value.text !== "USD" && value.text !== "TRY") {
        if (value.text.toLowerCase("TR").includes(search.trim().toLowerCase("TR"))) {
          filteredData[key] = data[key];
        }
      }
    }

    return filteredData;
  }

  const getData = () => {
    fetch("https://0ef75a02a97b47f89d5a97ea0dc51caf.api.mockbin.io/")
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
      {loading ? (
        <Loading inline={true} />
      ) : ( 
        <PaginatedItems loading={loading} items={filteredData()} itemsPerPage={30} />
      )}
    </div>
  );
};

export default Kripto;
