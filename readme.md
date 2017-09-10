### Introduction

Creates a promise for a game time delay in PlayCanvas

### Installation

```language-shell
npm install --save playcanvas-delay
```

### Usage

```language-javascript
import delay from 'playcanvas-delay'

...

await delay(0.5 * 1000);

delay(6000).then(function() { ... }); 

```

### Requirements

Requires PlayCanvas Engine to be running on the page.  Uses ES6/Babel/PlayCanvas template.
