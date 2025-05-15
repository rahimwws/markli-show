function search<T extends { name: string; children?: T[] }>(items: T[], searchValue: string): T[] {
  const matchingItems: T[] = [];

  const lowerSearch = searchValue.toLowerCase();

  function isMatch(name: string): boolean {
    return name.toLowerCase().includes(lowerSearch);
  }

  items.forEach((item) => {
    if (isMatch(item.name)) {
      matchingItems.push(item);
    }
  });

  return matchingItems;
}

export default search;
