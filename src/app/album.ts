import { Track } from './track';

export interface Container {
    album: Album;
}

export interface Album{
 name: string;
 releaseDate: string;
 coverImage: string;
 tracks: Track[];
}
