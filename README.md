# Demo application for Forms and Data Persistence

This project is to be used in conjunction with the video tutorial of the same name.

## Dependencies

- Docker
- Nodejs 20+


## Getting started

Copy the `env.example` file and rename it to `.env`. In both the `server` and `client` folders, fill in the appropriate values for the environment variables.

In the root folder run the following:

```
docker compose up
```

Or alternatively you can run each project individually with:
- `cd server && npm i && npm start`
- `cd client && npm i && npm dev`
- run db in docker with `cd db  && docker-compose db up`


Recomended to install the NPM packages regardless if you are using Docker to get intellisense for TailwindCSS.