import { API } from "./api";

export const fetchAssetData = async () => {
  const response = await fetch(API.sheetUrl);
  if (!response.ok) throw new Error("Failed to fetch data");
  const csvText = await response.text();
  return csvText;
};

export const addAssetEntry = async (date, value) => {
  const response = await fetch(API.appsScriptUrl, {
    method: "POST",
    body: JSON.stringify({ date, value }),
  });
  if (!response.ok) throw new Error("Failed to add entry");
  return response.json();
};
