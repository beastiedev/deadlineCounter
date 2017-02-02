# deadlineCounter
Simple countdown timer. It calculates how much time is left.

### Usage

Add empty block with some id
```html
<div id="dl"></div>
```
Initilize and run

```javascript
var dl = new DeadlineCounter('11 Feb 2017 17:00:00', 'dl');
dl.count();
```
