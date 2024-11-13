import TerserPlugin from 'terser-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizeCss: true, // Active l'optimisation CSS pour réduire la taille du CSS en production
      },

      images: {
        formats: ['image/avif', 'image/webp'], // Activer les formats AVIF et WebP pour optimiser les images
        deviceSizes: [640, 768, 1024, 1280, 1600], // tailles d'images
      },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.optimization.minimizer.push(
            new TerserPlugin({
              terserOptions: {
                compress: { drop_console: true }, // Supprime les consoles pour production
              },
            })
          );
          
          // desactiver le cache sur le developpement
          config.cache = false;
        }
        return config;
      },
};

export default nextConfig;


  
