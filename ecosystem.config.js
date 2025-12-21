module.exports = {
    apps: [
        {
            name: "intex-app",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 5000,
            },
        },
    ],
}
