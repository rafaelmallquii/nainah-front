const isPathActive = (path, currentPath) => {
  if (path === currentPath) {
    return true;
  }

  if (path !== "/" && currentPath.indexOf(path) !== -1) {
    return true;
  }

  return false;
};


const formatPrice = (price) => {

  if (!price)   return "$ 0.00";

  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}



export { isPathActive, formatPrice };