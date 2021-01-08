module.exports = {
  webpack: function (config) {
    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";
    return config;
  },
  images: {
    loader: "imgix",
    domains: ["assets.vercel.com", "storage.googleapis.com"],
  },
  env: {
    apiUrl: "https://api.steechit.com/",
  },
};
