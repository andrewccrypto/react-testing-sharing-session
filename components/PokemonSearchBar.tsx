import { ReactElement } from "react";
import { DefaultButton, SearchBox } from "@fluentui/react";

interface PokemonSearchBarProps {
  isLoading: boolean;
  onSearch(): void;
  onSearchTermChange(v: string): void;
  searchTerm: string;
}

function PokemonSearchBar({
  isLoading,
  onSearch,
  onSearchTermChange,
  searchTerm,
}: PokemonSearchBarProps): ReactElement {
  return (
    <form
      id="search-form"
      style={{ display: "flex", flexDirection: "row" }}
      onSubmit={(e): void => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div style={{ flex: 1, paddingRight: "5px" }}>
        <SearchBox
          onChange={(e): void => onSearchTermChange(e?.target?.value || "")}
          placeholder="Search Pokemon name"
          value={searchTerm}
        />
      </div>
      <DefaultButton disabled={isLoading} form="search-form" type="submit">
        Search
      </DefaultButton>
    </form>
  );
}

export default PokemonSearchBar;
