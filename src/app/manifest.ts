import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Полюс Холода",
        short_name: 'Полюс Холода',
        description: "Регистрация на марафон",
        start_url: '/',
        display: 'standalone',
        icons: [
            {
                src: '/icons/icon.svg',
                sizes: "192x192",
            },
            {
                src: '/icons/icon.svg',
                sizes: "any",
            },
        ],
    }
}