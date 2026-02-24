import { useParams, Link } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistInfoPage.css";
// import { IPlaylistInfoPageProps } from "./interfaces";

export function PlaylistInfoPage() {
    const {playlistId} = useParams();
    const playlist = PLAYLISTS.find(playlist => playlist.id === playlistId);
    const genre = playlist?.genre.toLowerCase();

    if (!playlist) {
        return (
            <div className="playlistInfoPage">
                <h2>PlaylistInfoPage</h2>

                <div className="playlists">
                    <p>Плейлиста с таким ИД нет</p>
                </div>
            </div>
        );
    }

    return (
        <div className="playlistInfoPage">
            <h2>PlaylistInfoPage</h2>

            <div className="playlists">
                <p>{playlist.name}</p>
                <p>Жанр: <Link to={`/playlists?searchGenre=${genre}`}> {playlist.genre}</Link></p>
                <img src={playlist.img} alt="" width={200} height={200} />
                <p>{playlist.desc}</p>
                <ul>
                    {playlist.tracks.map((track) => (
                        <li key={track.id}>{track.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
