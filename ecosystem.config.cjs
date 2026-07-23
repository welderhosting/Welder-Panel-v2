module.exports = {
  apps: [
    {
      name: "welder-panel",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 6767,
      },
    },
  ],
};
