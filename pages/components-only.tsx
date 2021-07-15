import Head from "next/head";
import { Text } from "@fluentui/react/lib/Text";
import PageLayout from "@components/PageLayout";
import PageLayoutTitle from "@components/PageLayoutTitle";
import PokemonDataCard from "@components/PokemonDataCard";
import useQueryPokemon from "@hooks/useQueryPokemon";

function ComponentsOnlyPage() {
  const { data, isLoading, hasError } = useQueryPokemon();

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
