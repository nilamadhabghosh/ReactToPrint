# ImmunzationReport

This project was generated via [Concoction](https://github.cerner.com/healtheintent/concoction). If there are any issues found, please log us issues so we can fix them before next quarter.
Replace this readme with something that suits your needs.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Docker and compose. Both are included in [docker-for-mac](https://docs.docker.com/docker-for-mac/install/)
* Ruby via [rbenv](https://github.com/rbenv/rbenv) or [rvm](http://rvm.io/)
* [Bundler](https://bundler.io/)
* [NodeJS](https://github.com/creationix/nvm)
    * Just run `nvm use` to download the right Node version and start using it
* [Yarn](https://yarnpkg.com/lang/en/docs/install)

### Running app

#### Local image
To run the app locally, use docker-compose:

```
docker-compose up --build local
```

This will build and run the Dockerfile.local image, which starts a Rails server along with an instance of the Webpack Dev Server for hot reloading client-side changes.

Navigate to http://localhost:3000/ to view the application.

#### Production image
You can also build the production image locally using compose:

```
docker-compose up --build prod
```

This will build and run the Dockerfile image, which is the same image that is built and deployed to all non-local environments.

### Local Users
Refer to user principal from  [here](https://github.cerner.com/healtheintent/app-sdk-sample/blob/master/config/mock_adapter.yml)

## Development

### Debugging
The `debug` service in docker-compose.yml allows for debugging using an IDE like RubyMine or Visual Studio Code. Run the `Debug ruby` task in Visual Studio Code to bring up the container and start debugging.

### Running tests
TBD

### Lint
TBD

### Lock Files
Both Gemfile.lock and yarn.lock files should ideally come from your Docker image, since some dependencies can be OS dependent. To pull lock files out of your Docker image you can copy them out of a running container. For example:
```
# start production image
docker-compose up --build prod

# get container id of the prod image. The id is a UUID, such as e3da36fcd618
docker ps

# use that id to copy files to local disk
docker cp e3da36fcd618:/opt/app/Gemfile.lock .
docker cp e3da36fcd618:/opt/app/yarn.lock .
```