"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../helpers/api/local";
import Spinner from "../ui/Spinner";

const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {
  const [handbags, setHandbags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bestSellersProducts, setBestSellersProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [settings, setSettings] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchHandbags(),
      fetchTrendingProducts(),
      fetchCategoriesFromApi(),
      fetchBestSellerProducts(),
      fetchCatalogs(),
      fetchColors(),
      fetchSizes(),
      fetchSettings()
    ])
      .then(() => setLoading(false))
      .catch((error) => console.error(error));
  }, []);

  const fetchHandbags = async () => {
    try {
      const { data: handbags } = await api.get("api/home/productHandbags");

      setHandbags(handbags);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const fetchCategoriesFromApi = async () => {
    try {
      const { data: categories } = await api.get("api/home/category");

      setCategories([
        {
          id: 4,
          src: categories[0]?.image,
          title: categories[0]?.name
        },
        {
          id: 1,
          src: categories[1]?.image,
          title: categories[1]?.name
        },
        {
          id: 2,
          src: categories[2]?.image,
          title: categories[2]?.name
        }
      ]);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const fetchTrendingProducts = async () => {
    try {
      const { data: trendingProducts } = await api.get(
        "api/home/trendingProducts"
      );

      setTrendingProducts(trendingProducts);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const fetchBestSellerProducts = async () => {
    try {
      const { data: bestSellersProducts } = await api.get("api/home/category");

      setBestSellersProducts(bestSellersProducts);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const fetchCatalogs = async () => {
    try {
      const { data: catalogs } = await api.get("api/home/catalog");

      setCatalogs(catalogs);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const fetchColors = async () => {
    try {
      const { data: colors } = await api.get("api/home/colors");

      setColors(colors);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const fetchSizes = async () => {
    try {
      const { data: sizes } = await api.get("api/home/sizes");

      setSizes(sizes);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const fetchSettings = async () => {
    try {
      const { data: settings } = await api.get("api/home/setting");

      setSettings(settings);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  const subscribe = async (email) => {
    try {
      await api.post("api/home/subscribe", { email });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <HomeContext.Provider
      value={{
        subscribe,
        handbags,
        trendingProducts,
        categories,
        catalogs,
        colors,
        sizes,
        bestSellersProducts,
        settings
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);
