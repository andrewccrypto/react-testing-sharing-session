import { useState } from "react";
import Head from "next/head";
import { Text } from "@fluentui/react";
import PageLayout from "@components/PageLayout";
import PageLayoutTitle from "@components/PageLayoutTitle";
import PokemonDataCard from "@components/PokemonDataCard";
import PokemonSearchBar from "@components/PokemonSearchBar";
import useQueryPokemon, { UseQueryPokemonParams } from "@hooks/useQueryPokemon";

function ComponentsBasedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState<UseQueryPokemonParams["sort"]>(null);
  const [queryParams, setQueryParams] = useState<UseQueryPokemonParams>({
    name: null,
    sort: null,
  });
  const { data, isLoading, hasError } = useQueryPokemon(queryParams);

  return (
    <>
      <Head>
        <title>Component-based Page</title>
      </Head>
      <PageLayout
        headerContent={
          <div>
            <PageLayoutTitle
              title="Components-based Page"
              isLoading={isLoading}
            />
            <PokemonSearchBar
              isLoading={isLoading}
              onReset={(): void => {
                setSearchTerm("");
                setSort(null);
                setQueryParams({
                  name: null,
                  sort: null,
                });
              }}
              onSearch={(): void =>
                setQueryParams({
                  name: searchTerm || null,
                  sort: sort || null,
                })
              }
              onSearchTermChange={(v): void => setSearchTerm(v)}
              onSortChange={(v): void => setSort(v)}
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
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {data?.map((pokemonData) => (
              <div key={pokemonData.id} style={{ padding: "5px" }}>
                <PokemonDataCard data={pokemonData} />
              </div>
            ))}
          </div>
        )}
      </PageLayout>
    </>
  );
}

export default ComponentsBasedPage;
