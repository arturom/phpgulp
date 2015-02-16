# phpgulp

### Gettting started

 - clone this repo
  `git clone https://github.com/arturom/phpgulp.git && cd phpgulp`

 - Install Gulp globall (might require sudo)
`npm install -g gulp`

 - Install local node packages
`npm install`

### Running gulp tasks
 - `gulp` default task
 - `gulp js` concatenates js files `./app/js/*.js` to `./app/dist/app.min.js`
 - `gulp less` compiles less files from `./app/less/*.less` to `./app/css/*.css`
 - `gulp coffee` compiles coffee files from `./app/coffee/*.coffee` to `./app/js/*.js`
 - `gulp watch` observes the above folders and runs the compilation tasks

### Lint a php folder recursively
- Symlink the php folder to `./phpgulp/php`
- Run `gulp php`
