export const validSearch = (stringToSearch, searchStr) => {
  const stringToSearchLowered = stringToSearch.toLowerCase();
  const searchStrLowered = searchStr.toLowerCase();
  return stringToSearchLowered.includes(searchStrLowered);
};
