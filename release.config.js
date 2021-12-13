module.exports = {
  branch: 'master',
  tagFormat: '${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
      },
    ],
    '@semantic-release/github',
    '@semantic-release/npm',
  ],
};
