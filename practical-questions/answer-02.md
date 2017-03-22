The issue with the `remoteMathService` function was that it was experiencing a couple of problems. First it was experiencing a race condition because of the way `callOneService` and `callTwoService` had time outs. By having `callTwoService` being executed within the callback for `callOneService`, the execution happens after `callOneService` completes. Then `callTwoService` is executed and in its anonymous function is where the two variables for `one` and `two` are set.

The second problem that was occurring was because of the way the functions were nested within each other, there was a variable scope issue. Both callback had a second parameter variable set as `num` which meant by calling `num` in `callTwoService`'s anonymous function, it was receiving the value set on `num` from `callOneService`. By giving each callback a specific variable of `num1` and `num2` the scoping issue is resolved.

Not sure how to write a test to check for race conditions. I suppose a test could be written to expect the sequence of results are always in order.