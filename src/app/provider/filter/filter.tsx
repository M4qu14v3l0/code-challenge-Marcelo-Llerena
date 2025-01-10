import React, { createContext, useContext, useState, useCallback } from "react";
import { debounce } from "lodash";
import { useKanbanTasks } from "@/features/kanban/hooks/use-kanban-tasks";

interface FilterContextProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const FilterContext = createContext<FilterContextProps>({
  searchValue: "",
  setSearchValue: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValueState] = useState("");
  const { refetch } = useKanbanTasks();

  const debouncedRefetch = useCallback(
    (value: string) => {
      const debouncedFn = debounce((searchTerm: string) => {
        refetch({ input: { name: searchTerm } });
      }, 500);
      debouncedFn(value);
    },
    [refetch]
  );

  const setSearchValue = (value: string) => {
    setSearchValueState(value);
    debouncedRefetch(value);
  };

  return (
    <FilterContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </FilterContext.Provider>
  );
};

FilterProvider.useFilter = () => useContext(FilterContext);
