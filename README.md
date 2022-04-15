
## Description

Very Simple example of connecting
PostgreSQL Database to Nest.js platform using
Prisma Client Library.

## Installation

first make sure you have Docker and Node.js installed on your system, then :
```bash
  git clone https://github.com/elliminium/nest-postgress-prisma.git
  npm install
```
## Running the app (Development)

```bash
  npm run dev
```
you should be able to access `http://127.0.0.1:3000/api` from your browser.

**note:** if you had any change on `node_module`, use `npm run dev:clean` to sync the API containers with your project.
**note:** if you had any change on your `shema.prisma`, use `npm run migrate-db` to sync the database with your project. 


