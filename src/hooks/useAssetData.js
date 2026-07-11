import { useState, useEffect } from "react";
import { fetchAssetData } from "../services/assetService";

const useAssetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const csvText = await fetchAssetData();

        const rows = csvText.trim().split("\n");
        const headers = rows[0].split(",");

        const parsed = rows.slice(1).map((row) => {
          const values = row.split(",");
          return {
            date: values[0].trim(),
            value: Number(values[1].trim()),
          };
        });
        setData(parsed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useAssetData;
