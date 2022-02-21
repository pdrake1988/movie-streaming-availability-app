import Providers from "./Providers";

export default interface Monetization {
    results: {
        link: string;
        US: {
            flatrate: Providers[];
            free: Providers[];
            ads: Providers[];
            rent: Providers[];
            buy: Providers[];
        }
    }
}
