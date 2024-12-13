/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Enable WebAssembly support
        config.experiments = { 
          asyncWebAssembly: true, 
          syncWebAssembly: true,
         
          layers: true // Necessary for layering in Webpack 5+
        };
    
        // Add a rule to handle .wasm files if needed
        config.module.rules.push({
          test: /\.wasm$/,
          type: "webassembly/async",
        });
    
        return config;
      },
};

export default nextConfig;
