import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setIconOptions } from '@fluentui/react/lib/Styling';
import PokemonSearchBar from '@components/PokemonSearchBar';

setIconOptions({ disableWarnings: true });

const onReset = jest.fn();
const onSearch = jest.fn();
const onSearchTermChange = jest.fn();
const onSortChange = jest.fn();

describe('PokemonSearchBar', () => {
  beforeEach(() => {
    onReset.mockClear();
    onSearch.mockClear();
    onSearchTermChange.mockClear();
    onSortChange.mockClear();
  });

  it('Should not allow clicking Search button if isLoading prop is true', () => {
    const { getByRole } = render(
      <PokemonSearchBar
        isLoading
        onReset={onReset}
        onSearch={onSearch}
        onSearchTermChange={onSearchTermChange}
        onSortChange={onSortChange}
        searchTerm=""
        sort={null}
      />
    );

    expect(getByRole('button', { name: /Search/ })).toBeDisabled();
  });

  it('Should call onSearch when clicking on Search button', () => {
    const { getByRole } = render(
      <PokemonSearchBar
        isLoading={false}
        onReset={onReset}
        onSearch={onSearch}
        onSearchTermChange={onSearchTermChange}
        onSortChange={onSortChange}
        searchTerm=""
        sort={null}
      />
    );

    expect(onSearch).not.toHaveBeenCalled();
    userEvent.click(getByRole('button', { name: /Search/ }));
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('Should call onReset when clicking on Reset button', () => {
    const { getByRole } = render(
      <PokemonSearchBar
        isLoading={false}
        onReset={onReset}
        onSearch={onSearch}
        onSearchTermChange={onSearchTermChange}
        onSortChange={onSortChange}
        searchTerm=""
        sort={null}
      />
    );

    expect(onReset).not.toHaveBeenCalled();
    userEvent.click(getByRole('button', { name: /Reset/ }));
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
