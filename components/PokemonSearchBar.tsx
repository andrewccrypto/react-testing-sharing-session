import { ReactElement } from 'react';
import { DefaultButton, Dropdown, SearchBox } from '@fluentui/react';
import { UseQueryPokemonParams } from '@hooks/useQueryPokemon';

interface PokemonSearchBarProps {
  isLoading: boolean;
  onReset(): void;
  onSearch(): void;
  onSearchTermChange(v: string): void;
  onSortChange(v: UseQueryPokemonParams['sort']): void;
  searchTerm: string;
  sort: UseQueryPokemonParams['sort'];
}

const sortOptions = [
  { key: 'id-asc', text: 'ID Asc' },
  { key: 'id-desc', text: 'ID Desc' },
  { key: 'name-asc', text: 'Name Asc' },
  { key: 'name-desc', text: 'Name Desc' },
];

function PokemonSearchBar({
  isLoading,
  onReset,
  onSearch,
  onSearchTermChange,
  onSortChange,
  searchTerm,
  sort,
}: PokemonSearchBarProps): ReactElement {
  return (
    <form
      id="search-form"
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}
      onSubmit={(e): void => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div style={{ flex: 1, paddingRight: '5px' }}>
        <SearchBox
          onChange={(e): void => onSearchTermChange(e?.target?.value || '')}
          placeholder="Search Pokemon name"
          value={searchTerm}
        />
      </div>
      <div style={{ paddingRight: '5px' }}>
        <Dropdown
          label="Sort by"
          onChange={(_e, item): void => {
            if (item) {
              onSortChange(item.key as UseQueryPokemonParams['sort']);
            }
          }}
          options={sortOptions}
          selectedKey={sort || 'id-asc'}
        />
      </div>
      <DefaultButton
        disabled={isLoading}
        form="search-form"
        style={{ marginRight: '5px' }}
        type="submit"
      >
        Search
      </DefaultButton>
      <DefaultButton onClick={onReset} type="button">
        Reset
      </DefaultButton>
    </form>
  );
}

export default PokemonSearchBar;
