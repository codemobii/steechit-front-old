module.exports = {
  webpack: function (config) {
    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";
    return config;
  },
  images: {
    domains: ["assets.vercel.com", "storage.googleapis.com"],
  },
};
