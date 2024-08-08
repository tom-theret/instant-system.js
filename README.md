# Instant-System.JS

A wrapper for the Instant System API used by many local transport companies.

> This project is not affiliated with [Instant System](https://instant-system.com/?lang=fr) in any way.


## Installation

```bash
npm install instant-system.js
```

## Usage

```javascript
const IS = require('instant-system.js');

IS.getNetworkV3(14, false).then((res) => {
  console.log(res);
});
```

## Acknowledgements

- Thanks to [Instant System](https://instant-system.com) for providing the software and API.
- Thanks to [Tom Niget (zdimension)](https://github.com/zdimension) for [Instant System OpenAPI](https://github.com/zdimension/instant-system-api) documentation.
