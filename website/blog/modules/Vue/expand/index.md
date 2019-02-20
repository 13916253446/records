## 如何在修改原组件的情况下，来拓展该组件呢

- **extends**

```javascript
import Child from './child.vue'

export default {
  extends: Child
}
```

- **extend**

```javascript
// child.vue

import Vue from 'vue'
export default Vue.extend({
  name: 'Child'
})
```

```javascript
// parent.vue

import Child from './child.vue'

export default Child.extend({
  name: 'Parent'
})
```