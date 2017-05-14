# Vagrant Demo

In this demo, I will demostrate the power of [Vagrant](https://www.vagrantup.com/).

I will be using `ubuntu/trusty64` as my starting Vagrant Box, then install [NVM](https://github.com/creationix/nvm) and latest stable Node.js.

I've also set up a sharing folder called `code` that hosts our project. So we can edit on our host machine!

## Setup

```bash
$ vagrant up
$ vagrant ssh
```

By here, you're in your virtual Ubuntu server! With Node.js installed!

Let's run our server!

```bash
$ cd code
$ npm install
$ npm start
```

## That's It!

It's that simple!
