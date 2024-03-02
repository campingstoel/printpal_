export const active = (id, activeFilters, setActiveFilters) => {
    if (activeFilters.includes(id)) {
      setActiveFilters(activeFilters.filter((item) => item !== id));
    } else {
      setActiveFilters([...activeFilters, id]);
    }
  };