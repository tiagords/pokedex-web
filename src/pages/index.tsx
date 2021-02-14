import Image from "next/image";
import { GoSearch } from "react-icons/go";

import { Title, Form, Card, ContainerCard } from "@/styles/pages/Home";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Image
        src="/assets/images/pokedex.svg"
        width={215}
        height={65}
        alt="Pokédex"
      />
      <Title>What Pokemon are looking for?</Title>

      <Form>
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
        <Card>
          <img src="/assets/images/01.png" alt="" />
          <div>
            <h3>Bulbasaur</h3>
            <div className="badge">
              <img src="/assets/images/grass.png" alt="" />
              <img src="/assets/images/poison.png" alt="" />
            </div>
          </div>
          <span>#001</span>
        </Card>

        <Card>
          <img src="/assets/images/01.png" alt="" />
          <div>
            <h3>Bulbasaur</h3>
            <div className="badge">
              <img src="/assets/images/grass.png" alt="" />
              <img src="/assets/images/poison.png" alt="" />
            </div>
          </div>
          <span>#002</span>
        </Card>

        <Card>
          <img src="/assets/images/01.png" alt="" />
          <div>
            <h3>Bulbasaur</h3>
            <div className="badge">
              <img src="/assets/images/grass.png" alt="" />
              <img src="/assets/images/poison.png" alt="" />
            </div>
          </div>
          <span>#003</span>
        </Card>

        <Card>
          <img src="/assets/images/01.png" alt="" />
          <div>
            <h3>Bulbasaur</h3>
            <div className="badge">
              <img src="/assets/images/grass.png" alt="" />
              <img src="/assets/images/poison.png" alt="" />
            </div>
            <span>#003</span>
          </div>
          <span>#004</span>
        </Card>
      </ContainerCard>
    </>
  );
}
