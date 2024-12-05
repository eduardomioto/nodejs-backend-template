# Node Backend Template

[![Build and Deploy Docker Image](https://github.com/eduardomioto/nodejs-backend-template/actions/workflows/build.yml/badge.svg)](https://github.com/eduardomioto/nodejs-backend-template/actions/workflows/build.yml)

This project is a simple API built with Express in TypeScript, using Prisma as an ORM for PostgreSQL and Redis as a caching layer. The API supports CRUD operations for entities. Jest is used for testing the functionalities.

## Features

- CRUD Operations for Entities.
- Caching with Redis to avoid unnecessary database requests.
- Testing with Jest.

## Getting Started

### Architecture

- Node.js + Express + Typescript application
- PostgreSQL 15
- Redis 6.2

### Libs
- Logging: winston (3.17.0)
- Validation: yup (0.29.14)
- Watcher: nodemon (3.1.7)
- Packing: webpack (5.97.1)
- Lint: eslint (9.16.0)
- Testing: jest (29.7.0)
- ORM: prisma (6.0.1)
}

### Starting
```
cd .docker
docker compose up --build -d
```

### API Documentation
- http://localhost:8000/api-docs


### Testing
```
yarn jest
```

### Releasing
```
yarn release
```