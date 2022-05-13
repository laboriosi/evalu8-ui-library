<h1 align="center">@laboriosi/evalu8-ui-library</h1>

## How to install

#### 1. First, you need to add at the root of your project a .npmrc with follow content:

```
@laboriosi:registry=https://npm.pkg.github.com
```

#### 2. To install that package on you project, run the command below:

#### npm

```shell
npm i @laboriosi/evalu8-ui-library
```

#### yarn

```shell
yarn add @laboriosi/evalu8-ui-library
```

## Changelog

We provide a full change log generated using our conventional commits:
[CHANGELOG.md](https://github.com/laboriosi/evalu8-ui-library/blob/main/CHANGELOG.md)

## FAQ

#### Why am I getting 401 when trying to install the package?

GitHub Package Registry requires to be logged at NPM even for public packages. See below:

> To authenticate by logging in to npm, use the npm login command, replacing USERNAME with your GitHub username, TOKEN with your personal access token, and PUBLIC-EMAIL-ADDRESS with your email address.

```
$ npm login --scope=@OWNER --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

Reference: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token
