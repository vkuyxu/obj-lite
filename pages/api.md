---
outline: deep
---
# API

## 对象操作方法

### omit
```ts
omit(object: any, paths: string[]): any
```
从对象中删除指定的属性

**参数：**
- `object`: 要处理的对象
- `paths`: 要删除的属性路径数组

**返回值：** 返回删除了指定属性的新对象

**示例：**
```ts
const obj = { a: 1, b: 2, c: 3 }
const result = omit(obj, ['b', 'c'])
// result: { a: 1 }
```

### pick
```ts
pick(object: any, paths: string[]): any
```
从对象中选择指定的属性

**参数：**
- `object`: 要处理的对象
- `paths`: 要选择的属性路径数组

**返回值：** 返回只包含指定属性的新对象

**示例：**
```ts
const obj = { a: 1, b: 2, c: 3 }
const result = pick(obj, ['a', 'c'])
// result: { a: 1, c: 3 }
```

### set
```ts
set(object: any, path: string, value: any): any
```
在对象的指定路径设置值

**参数：**
- `object`: 要修改的对象
- `path`: 属性路径（支持嵌套路径，如 'a.b.c'）
- `value`: 要设置的值

**返回值：** 返回修改后的对象

**示例：**
```ts
const obj = { a: { b: 1 } }
set(obj, 'a.b', 2)
// obj: { a: { b: 2 } }

set(obj, 'a.c.d', 3)
// obj: { a: { b: 2, c: { d: 3 } } }
```

### get
```ts
get(object: any, path: string, defaultValue?: any): any
```
获取对象指定路径的值

**参数：**
- `object`: 要查询的对象
- `path`: 属性路径（支持嵌套路径，如 'a.b.c'）
- `defaultValue`: 当路径不存在时返回的默认值

**返回值：** 返回指定路径的值或默认值

**示例：**
```ts
const obj = { a: { b: { c: 1 } } }
get(obj, 'a.b.c')
// 1

get(obj, 'a.b.d', 'default')
// 'default'
```

## 工具方法

### utils.deepClone
```ts
utils.deepClone(value: any): any
```
深度克隆对象或值

**参数：**
- `value`: 要克隆的值

**返回值：** 返回完全独立的副本

**示例：**
```ts
const obj = { a: 1, b: { c: 2 } }
const cloned = utils.deepClone(obj)
cloned.b.c = 3
// obj.b.c === 2, cloned.b.c === 3
```

### utils.isObject
```ts
utils.isObject(value: any): boolean
```
判断值是否为对象类型

**参数：**
- `value`: 要检测的值

**返回值：** 如果值是对象则返回 true，否则返回 false

**示例：**
```ts
utils.isObject({})        // true
utils.isObject([])        // true
utils.isObject(null)      // false
utils.isObject('string')  // false
```

### utils.isPlainObject
```ts
utils.isPlainObject(value: any): boolean
```
判断值是否为普通对象（由 Object 构造函数创建的对象）

**参数：**
- `value`: 要检测的值

**返回值：** 如果值是普通对象则返回 true，否则返回 false

**示例：**
```ts
utils.isPlainObject({})           // true
utils.isPlainObject(new Date())   // false
utils.isPlainObject([])           // false
utils.isPlainObject(null)         // false
```