export interface IUser {
	id: number;
	email: string;
	fullName: string;
	jobTitle: string;
	avatar: string;
	bio: string;
	playlist?: string;
}

export interface ITrack {
	id: string;
	title: string;
	artist: string;
	duration: string;
}

export interface IPlaylist {
	id: string;
	name: string;
	genre: string;
	img: string;
	desc: string;
	tracks: ITrack[];
}
