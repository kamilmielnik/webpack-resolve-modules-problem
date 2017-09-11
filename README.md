# Steps to reproduce

 1. `npm install`
 2. replace contents of `node_modules/abc/xyz/index.js` with:
 ```
 console.log('node_modules file');
 ```
 3. `npm start`

### Expected behavior:
* `node_modules file` is printed out to console

### Actual behavior:
* `local file` is printed out to console

