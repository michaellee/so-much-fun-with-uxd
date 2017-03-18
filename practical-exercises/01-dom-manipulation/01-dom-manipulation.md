1) Given a textarea which has a max. limit of 100 characters; using standard browser API’s how would you update a "Remaining Chars: n" label under the textarea as the user types into the textarea?

Given the textarea has an `id` attribute set to `storyBox` I've used JavaScript to select the element and applied it as a reference to the const of the same name `storyBox`. Then I added an event listener on the textarea to detect when a keyup event occurred on the textarea.

On keyup, the length of the value for the textarea is subtracted from the remaining characters count. Which in this scenario is 100. Upon calculating the difference, I update a reference to the span that holds the value of the character count which has a class value of `storyBox-charCount`.

2) How would you change the "Remaining Chars" label red when there are only 5 or fewer characters remaining?

Within the keyup event listener described above, I've got an `if` statement which checks to see if the variable `remainingChars` is less than or equal to 5. If it is, then I add the class of `red` to the `classList` for the label element which is referenced as `storyBoxLabel`. The `red` class is defined in the style block in the head which simply applies the color red to the property of `color`. For all values that are greater than 5, the class `red` is removed from the `classList`.

3) How would you prevent input after the max char. limit has been reached?

In HTML5, textarea has an attribute called [`maxlength`][maxlength]. Setting a value to this attribute on the textarea element enforces an upper-bound for the allowed number characters the user can enter.

```
<textarea name="storyBox" maxlength="100"></textarea>
```

[maxlength]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
