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
                src: '/icons/icon.jpg',
                sizes: "192x192",
                type: 'image/jpg',
            },
            {
                src: '/icons/icon.jpg',
                sizes: "512x512",
                type: 'image/jpg',
            }
        ],
    }
}