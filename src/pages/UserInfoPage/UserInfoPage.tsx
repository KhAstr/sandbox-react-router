import { useParams, Link } from "react-router-dom";
import { USERS, PLAYLISTS } from "../../data";
import "./UserInfoPage.css";
import { IUserInfoPageProps } from "./interfaces";

export function UserInfoPage() {
	const {userId} = useParams();
	const user = USERS[Number(userId)];
	const playlist = PLAYLISTS.find(playlist => playlist.name === user.playlist);

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>Пользоатвеля с таким ИД нет</p>
				</div>
			</div>
		);
	}

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
				{playlist? 
				<Link to={`/playlists/${playlist.id}`} key={playlist.id}> {playlist.name} </Link> : null}
			</div>
		</div>
	);
}
