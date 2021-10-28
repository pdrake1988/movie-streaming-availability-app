import Providers from "./Providers";

export default interface Monetization {
    flatrate: Providers[];
    free: Providers[];
    ads: Providers[];
    rent: Providers[];
    buy: Providers[];
    link: string;
}
