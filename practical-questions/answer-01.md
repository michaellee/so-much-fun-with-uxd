In the `doThing` function that was called within the `foo` function, the callback was returning twice. This is because the `if` statement didn't have an `else`. So it should read,

```
if (err) {
  callback(err, null)
} else {
  callback(null, res)
}
```

Also there was no second parameter passed into the callback within the `doThing` function which means when the call to `foo` passes in the anonymous function that expects two parameters, if the `doThing` function returns just an `err` the value `res` would return `undefined` which could cause the program to halt if the value of `undefined` is not handled properly.
