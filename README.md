# Pi Magic Mirror

> This project should be deployed together with [**Pi Magic Mirror Server**](https://github.com/actredphos2017/PiMagicMirrorServer).

## Build

### Requirement

This Project recommended to be built with **NodeJS**

[NodeJS with version **20.8.1**](https://nodejs.org/download/release/v20.8.1/) is recommended.

Click the link above and select a version match your os to install.

For example, for `arm-64` linux:

``` sh
cd path/to/place/nodejs
mkdir node-v20.8.1
cd node-v20.8.1

wget https://nodejs.org/download/release/v20.8.1/node-v20.8.1-linux-arm64.tar.gz
tar -xvf node-v20.8.1-linux-arm64.tar.gz
```

For every time you want to build the project, you need to run following command before.

``` sh
export PATH=$PATH:path/to/place/nodejs/node-v20.8.1/node-v20.8.1-linux-arm64/bin/
```

> You also can add it into `.bashrc` or `.zshrc`

### Dev Deploy

``` sh
git clone https://github.com/actredphos2017/PiMagicMirror.git
cd PiMagicMirror

npm i -r

npm run dev
```

### Buhttps://github.com/actredphos2017/PiMagicMirrorServer/commit/c14111f23c108ae4dc2f6f487da094aa2cc16411ild Deploy

Build the project
``` sh
git clone https://github.com/actredphos2017/PiMagicMirror.git
cd PiMagicMirror

npm i -r

npm run electron:build
```

Run
``` sh

```