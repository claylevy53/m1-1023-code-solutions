# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?

event.target refers to the DOM (Document Object Model) element on which the event originally occurred or the element that triggered the event. It is a property of the event object that provides a reference to the specific DOM element that was the source of the event

- Why is it possible to listen for events on one element that actually happen its descendent elements?

It is possible to listen for events on a parent element and capture events that happen on its descendant elements due to a mechanism called "event delegation"

- What DOM element property tells you what type of element it is?

The DOM (Document Object Model) element property that tells you what type of element it is, is tagName. The tagName property returns a string representing the HTML tag name of the element in uppercase.

- What does the `element.closest()` method take as its argument and what does it return?

The element.closest() method is a useful DOM (Document Object Model) method that takes a single argument, which is a CSS selector string, and it returns the closest ancestor element of the current element that matches the specified selector

- How can you remove an element from the DOM?

You can remove an element from the DOM (Document Object Model) in JavaScript by using the remove() method or by accessing its parent and using the removeChild() method

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

You can use a technique called event delegation. This would include attaching a single event listener to a common ancestor element of the elements you want to be clickable. This allows you to capture events that bubble up from the clickable elements, even if they are added dynamically after the page has loaded

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
