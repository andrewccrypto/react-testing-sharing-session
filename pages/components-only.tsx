import { useState } from "react";
import Head from "next/head";
import { DefaultButton, SearchBox, Text } from "@fluentui/react";
import PageLayout from "@components/PageLayout";
import PageLayoutTitle from "@components/PageLayoutTitle";
import PokemonDataCard from "@components/PokemonDataCard";
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
          <PageLayoutTitle title="Components Only Page" isLoading={isLoading} />
        }
      >
        <section>
          <form
            id="search-form"
            style={{ display: "flex", flexDirection: "row" }}
            onSubmit={(e): void => {
              e.preventDefault();

              setQueryParams((prevParams) => {
                const newQueryParams = { ...prevParams };

                newQueryParams.name = searchTerm || null;
                return newQueryParams;
              });
            }}
          >
            <div style={{ flex: 1, paddingRight: "5px" }}>
              <SearchBox
                onChange={(e): void => setSearchTerm(e?.target?.value || "")}
                placeholder="Search Pokemon name"
                value={searchTerm}
              />
            </div>
            <DefaultButton
              disabled={isLoading}
              form="search-form"
              type="submit"
            >
              Search
            </DefaultButton>
          </form>
        </section>
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
