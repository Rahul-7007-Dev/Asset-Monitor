import React, { useState, useEffect } from "react";
import { addAssetEntry } from "../services/assetService";

const AddEntry = () => {
  const [date, setDate] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!date || !value) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await addAssetEntry(date, Number(value));
      setSuccess("Entry added successfully!");
      setDate("");
      setValue("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-56px)] bg-slate-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 mb-4">
            <span className="text-2xl">💰</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Add Asset Entry</h1>
          <p className="text-slate-500 text-sm mt-1">
            Record your asset value for the day
          </p>
        </div>

        {/* Date Field */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Date
          </label>
          <input
            type="date"
            value={date}
            max={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 transition-colors text-slate-700"
          />
        </div>

        {/* Value Field */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Asset Value (₹)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg font-medium">
              ₹
            </span>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="0.00"
              className="w-full pl-9 pr-4 py-4 text-base border-2 border-slate-200 rounded-xl focus:outline-none focus:border-sky-400 transition-colors text-slate-700"
            />
          </div>
        </div>

        {/* Feedback */}
        {error && (
          <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            ⚠️ {error}
          </div>
        )}
        {success && (
          <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm">
            ✅ {success}
          </div>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:bg-sky-300 text-white font-semibold text-base rounded-xl transition-colors"
        >
          {loading ? "Saving..." : "Save Entry"}
        </button>
      </div>
    </div>
  );
};

export default AddEntry;
