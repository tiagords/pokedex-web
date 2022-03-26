import Image from "next/image";
import { GoSearch } from "react-icons/go";

import { Title, Form, Card, ContainerCard } from "@/styles/pages/Home";
import { FormEvent, useEffect, useState } from "react";
import api from "@/api";
import { GetServerSideProps } from "next";

interface IPokemon {
  name: string;
  url: string;
}

interface IPokemonsList {
  results: IPokemon[];
}

export default function Home({ results }: IPokemonsList) {
  const [search, setSearch] = useState("");

  async function handleAddPokemon(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
    } catch {
      alert("Ops, houve um erro ao buscar o pokemon.");
    }
  }

  return (
    <>
      <Image
        src="/assets/images/pokedex.svg"
        width={215}
        height={65}
        alt="Pokédex"
      />
      <Title>What Pokemon are looking for?</Title>

      <Form onSubmit={handleAddPokemon}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Pokemon"
        />
        <button aria-label="Search">
          <GoSearch size={30} />
        </button>
      </Form>

      <ContainerCard>
        {results.map((pokemon) => {
          return (
            <Card>
              <img src="/assets/images/01.png" alt="" />
              <div>
                <h3>{pokemon.name}</h3>
                <div className="badge">
                  <img src="/assets/images/grass.png" alt="" />
                  <img src="/assets/images/poison.png" alt="" />
                </div>
              </div>
              <span>#001</span>
            </Card>
          );
        })}
      </ContainerCard>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IPokemonsList> = async () => {
  const pokemonlist: IPokemon[] = [];
  const response = await api.get<IPokemonsList>(`pokemon`);

  pokemonlist response.data.results.forEach(async function (pokemon) {
    await fetch(pokemon.url)
      .then((response) => response.json())
      .then(function (pokeData) {
        // console.log(pokeData);
        pokemonlist.push(pokeData);
      });
  });

  console.log(pokemonlist);

  return {
    props: {
      results: pokemonlist,
    },
  };
};
