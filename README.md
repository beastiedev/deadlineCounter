# deadlineCounter
Simple countdown timer. It calculates how much time is left.


![deadlineCounter example1](https://github.com/beastiedev/deadlineCounter/blob/master/ex1.png "deadlineCounter example1")

![deadlineCounter example2](https://github.com/beastiedev/deadlineCounter/blob/master/ex2.png "deadlineCounter example2")

### Usage

##### Fast and rough - [demo](https://jsfiddle.net/4fjmxw7y/2/)

Add empty block with some id
```html
<div id="dl"></div>
```
Initilize and run

```javascript
var dl = new DeadlineCounter('11 Feb 2017 17:00:00', 'dl');
dl.count();
```

##### More accurate - [demo](https://jsfiddle.net/4fjmxw7y/1/)
