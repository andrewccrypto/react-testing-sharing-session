import Head from 'next/head';
import { Text } from '@fluentui/react';
import PageLayout from '@components/PageLayout';
import PageLayoutTitle from '@components/PageLayoutTitle';
import PokemonDataCard from '@components/PokemonDataCard';
import PokemonSearchBar from '@components/PokemonSearchBar';
import useQueryPokemon from '@hooks/useQueryPokemon';
import usePokemonSearchState from '@hooks/usePokemonSearchState';

function HooksBasedPage() {
  const {
    onReset,
    onSearch,
    onSearchTermChange,
    onSortChange,
    state: { searchTerm, sort, queryParams },
  } = usePokemonSearchState();
  const { data, isLoading, hasError } = useQueryPokemon(queryParams);

  return (
    <>
      <Head>
        <title>Hooks-based Page</title>
      </Head>
      <PageLayout
        headerContent={
          <div>
            <PageLayoutTitle title="Hooks-based Page" isLoading={isLoading} />
            <PokemonSearchBar
              isLoading={isLoading}
              onReset={onReset}
              onSearch={onSearch}
              onSearchTermChange={onSearchTermChange}
              onSortChange={onSortChange}
              searchTerm={searchTerm}
              sort={sort}
            />
          </div>
        }
      >
        {hasError ? (
          <div>
            <Text variant="medium">Oops - something went wrong!</Text>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {data?.map((pokemonData) => (
              <div key={pokemonData.id} style={{ padding: '5px' }}>
                <PokemonDataCard data={pokemonData} />
              </div>
            ))}
          </div>
        )}
      </PageLayout>
    </>
  );
}

export default HooksBasedPage;
