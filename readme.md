# Vagrant Demo

[![Build Status](https://travis-ci.org/applefreak/vagrant-demo.svg?branch=master)](https://travis-ci.org/applefreak/vagrant-demo)

In this demo, I will demostrate the power of [Vagrant](https://www.vagrantup.com/).

I will be using `ubuntu/trusty64` as my starting Vagrant Box, then install [NVM](https://github.com/creationix/nvm) and latest stable Node.js.

I've also set up a sharing folder called `code` that contains our project files. So we can edit them on our host machine!

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

## Testing

A good code should pass all tests. To run the tests:

```bash
$ npm test
```

## That's It!

It's that simple!
