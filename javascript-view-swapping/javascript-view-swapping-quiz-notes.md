# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

refers to the DOM element that triggered a JavaScript event.

- What is the affect of setting an element to `display: none`?

Setting an element to display: none makes it invisible and removes it from the layout, taking up no space.

- What does the `element.matches()` method take as an argument and what does it return?

The element.matches() method takes a CSS selector string as an argument and returns true if the element matches the selector, otherwise false.

- How can you retrieve the value of an element's attribute?

ou can retrieve the value of an element's attribute using element.getAttribute('attributeName')

- At what steps of the solution would it be helpful to log things to the console?

At many steps it would be useful, especially when yu are stuck and need to compare values or see how the code is preforming. Is there what you expect to be logged to the console in these moments?

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?

You would have to add an event listener on each of the tabs and write much more code to get the same result.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?

You would have to write many more if statements on each of indivudal elements and check if the attributes match to enable tab switchng properly, thus writing much more code to get the same result.

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
