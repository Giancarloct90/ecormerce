import { useState, useEffect } from "react";
import { getData } from "./utilsHook";

const useFetch = (url) => {
  const [data, setData] = useState({ ok: false, apiData: [], message: "" });

  useEffect(() => {
    const getDataFather = async (url) => {
      // const dataGet = await getData(url);
      // console.log(dataGet);
      const dataGet = await getData(url);
      setData({
        ...data,
        ok: dataGet.ok,
        apiData: dataGet.apiData,
        message: dataGet.message || "success",
      });
    };
    getDataFather(url);
  }, [url]);

  return { data };
};

export default useFetch;
