Piglatinify
=============

This is a simple jQuery plug-in that converts the text of any DOM element into [pig latin](https://en.wikipedia.org/wiki/Pig_Latin). It also converts the text inside child elements and will retain all HTML formatting.

To use it, simply chain the function onto a jQuery DOM element. For example, if you have the following HTML ...
```html
<div id="content"><b>The quick brown</b> fox jumps over 199 <i>lazy</i> dogs.</div>
```

... and you apply the following JavaScript ...
```javascript
$( '#content' ).piglatinify();
```

... you will get ...
<div id="content"><b>eThay uickqay ownbray</b> oxfay umpsjay overay 199 <i>azylay</i> ogsday.</div>
