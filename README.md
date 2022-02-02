# GraphQL Boilerplate

[![codecov](https://codecov.io/gh/lewisjerremy/gql-boilerplate/branch/main/graph/badge.svg?token=WKJNZ0SYAA)](https://codecov.io/gh/lewisjerremy/gql-boilerplate)

A GraphQL server boilerplate. Uses Apollo Server, Prisma ORM, Nexus Schemas, Postgres, and more.

## Environment Setup

1. Clone the branch

```zsh
git clone git@github.com:lewisjerremy/gql-boilerplate.git
```

2. Install dependencies

```zsh
yarn
```

3. Configure your environment variables

```zsh
cp .env.example .env
```

4. Start the docker container

```zsh
docker-compose up -d
```

5. Migrate the database

```zsh
yarn prisma migrate dev
```

## Server Setup

### Development

1. Start the docker container

```zsh
docker-compose up -d
```

2. Start the server

```zsh
yarn dev
```

### Production

1. Start the docker container

```zsh
docker-compose up -d
```

2. Build the server

```zsh
yarn build
```

2. Start the server

```zsh
yarn start
```
