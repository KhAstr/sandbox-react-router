import { ChangeEvent, useState } from "react";
import { PLAYLISTS } from "../../data";
import "./PlaylistsPage.css";
import { Link, useSearchParams } from "react-router-dom";

export function PlaylistsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParams({
      searchName: value.toLowerCase(),
    });
  };

  const handleSearchGenre = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    console.log(event.target.name);
    setSearchParams({
      searchGenre: value.toLowerCase(),
    });
  };

  const searchName = searchParams.get("searchName") || "";
  const searchGenre = searchParams.get("searchGenre") || "";

  const filteredPlaylists = PLAYLISTS.filter(({ name, genre }) => {
    
    const matchesName = searchName ? name.toLowerCase().includes(searchName) : true;
    const matchesGenre = searchGenre ? genre.toLowerCase().includes(searchGenre) : true;

    return matchesName && matchesGenre
  });

  return (
    <div className="PlaylistsPage">
      <h2>PlaylistsPage</h2>

      <div className="playlists">
        <label>
          введите имя{" "}
          <input
            type="text"
            name="nameFilter"
            value={searchName}
            onChange={handleSearchName}
          />
        </label>

        <label>
          введите жанр{" "}
          <input
            type="text"
            name="genreFilter"
            value={searchGenre}
            onChange={handleSearchGenre}
          />
        </label>

        {filteredPlaylists.map(({ id, name }) => (
          <Link to={`/playlists/${id}`} key={id}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}
