export type Anime = {
    _id: number;
    title: string;
    type: string;
    description: string;
    image: string;
    imageHuge: string;
    episodes: number;
    rating: number;
    genre: string[];
    studio: string;
    year: number;
    status: string;
    dateAired:string;
    duration: number;
    country: string;
    dubs: string[];
    subs: boolean;
    views: number;
};


export interface AnimeProps {
    anime: Anime;
}