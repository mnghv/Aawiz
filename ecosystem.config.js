module.exports = {
    apps: [
        {
            name: 'aawiz-nextjs',
            cwd: './',
            script: 'npm',
            args: 'start ',
            env: {
                NODE_ENV: 'production',
                PORT: 4095,
                TRPC_ENV: 'production',
            },
        },
    ],
};
