const isPathActive = (path, currentPath) => {
  if (path === currentPath) {
    return true;
  }

  if (path !== "/" && currentPath.indexOf(path) !== -1) {
    return true;
  }

  return false;
};
