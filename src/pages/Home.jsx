import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Context } from "../context/AppContext";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useContext(Context);

  const filteredData = data.filter((d) =>
    d.Isim.toLocaleLowerCase("TR").includes(
      search.trim().toLocaleLowerCase("TR"),
    ),
  );

  const getData = () => {
    fetch("https://hasanadiguzel.com.tr/api/kurgetir")
      .then((res) => res.json())
      .then((data) =>
        setData(
          data.TCMB_AnlikKurBilgileri.filter(
            (d) =>
              d.Isim !== "BİRLEŞİK ARAP EMİRLİKLERİ DİRHEMİ" &&
              d.Isim !== "SUUDİ ARABİSTAN RİYALİ",
          ),
        ),
      )
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
            : filteredData.length > 0
            ? "w-full grid md:grid-cols-3 gap-4"
            : "w-full flex items-center justify-center"
        }
      >
        {loading ? (
          <Loading inline={true} />
        ) : filteredData.length > 0 ? (
          filteredData.map((veri, index) => (
            <div
              key={index}
              className="hover:scale-105 cursor-pointer transition-all px-4 py-2 shadow rounded-md bg-white/20 border border-white/50 flex items-center justify-center flex-col gap-1"
            >
              <p className="text-2xl font-bold text-center">{veri.Isim}</p>
              <p className="text-base text-center">
                {veri.ForexBuying.toFixed(2)} &#8378;
              </p>
            </div>
          ))
        ) : (
          <p className="px-4 py-2 bg-red-200 text-red-600 text-center rounded-lg">
            Aramanıza uygun bir birim bulunamadı!
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
