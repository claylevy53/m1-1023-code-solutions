# javascript-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?

The event fired when a user places their cursor (focuses) in a form control is the "focus" event.

- What event is fired when a user's cursor leaves a form control?

The event fired when a user's cursor leaves (blurs) a form control is the "blur" event

- What event is fired as a user changes the value of a form control?

The event fired when a user clicks the "submit" button within a <form> is the "submit" event.

- What event is fired when a user clicks the `"submit"` button within a `<form>`?

The event fired when a user clicks the "submit" button within a <form> is the "submit" event.

- What does the `event.preventDefault()` method do?

Calling event.preventDefault() within a submit event handler prevents the form from being submitted in the traditional way (i.e., it prevents the page from navigating to a new URL).

- What does submitting a form without `event.preventDefault()` do?

If a form is submitted without preventing the default behavior, it will typically navigate to the URL specified in the form's action attribute, causing a page reload or a redirection

- What property of a form element object contains all of the form's controls.

The property of a form element object that contains all of the form's controls is form.elements

- What property of a form control object gets and sets its value?

The property of a form control object that gets and sets its value is the value property. You can use formControl.value to both retrieve the current value of the control and set a new value for it

- What is one risk of writing a lot of code without checking to see if it works so far?

One risk of writing a lot of code without checking if it works along the way is that it can lead to the accumulation of bugs and issues that are harder to identify and fix later in the development process

- What is an advantage of having your console open when writing a JavaScript program?

Quickly test and experiment with code snippets.
Monitor the values of variables and the output of functions in real-time.
Detect and debug errors and issues as they occur.
Receive error messages and stack traces that provide information about what went wrong.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
