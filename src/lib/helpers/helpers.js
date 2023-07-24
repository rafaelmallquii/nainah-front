const isPathActive = (path, currentPath) => {
  if (path === currentPath) {
    return true;
  }

  if (path !== "/" && currentPath.indexOf(path) !== -1) {
    return true;
  }

  return false;
};

const formatPriceToUSDString = (price) => {
  if (!price) return "$ 0.00";

  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
};

const parseUrl = (url) => {
  return url.replace(/\s+/g, "-");
};

const unparsedUrl = (url) => {
  return url.replace(/-/g, " ");
};

export { isPathActive, formatPriceToUSDString, parseUrl, unparsedUrl };
