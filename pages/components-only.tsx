import { useState } from "react";
import Head from "next/head";
import { Text } from "@fluentui/react";
import PageLayout from "@components/PageLayout";
import PageLayoutTitle from "@components/PageLayoutTitle";
import PokemonDataCard from "@components/PokemonDataCard";
import PokemonSearchBar from "@components/PokemonSearchBar";
import useQueryPokemon, { UseQueryPokemonParams } from "@hooks/useQueryPokemon";

function ComponentsOnlyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryParams, setQueryParams] = useState<UseQueryPokemonParams>({
    name: null,
  });
  const { data, isLoading, hasError } = useQueryPokemon(queryParams);

  return (
    <>
      <Head>
        <title>Components Only Page</title>
      </Head>
      <PageLayout
        headerContent={
          <div>
            <PageLayoutTitle
              title="Components Only Page"
              isLoading={isLoading}
            />
            <PokemonSearchBar
              isLoading={isLoading}
              onSearch={(): void => {
                setQueryParams((prevParams) => {
                  const newQueryParams = { ...prevParams };

                  newQueryParams.name = searchTerm || null;
                  return newQueryParams;
                });
              }}
              onSearchTermChange={(v): void => setSearchTerm(v)}
              searchTerm={searchTerm}
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

export default ComponentsOnlyPage;
