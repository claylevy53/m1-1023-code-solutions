# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

Logging to the console is a common practice during development for debugging and monitoring purposes

- What is the purpose of events and event handling?

Events and event handling are essential for building interactive web applications. The purpose of events is to detect and respond to user interactions or other occurrences in a web page, such as clicks, keyboard input, or changes in the document. Event handling allows developers to define how their web application should react when these events occur, enabling user interactivity and dynamic behavior.

- Are all possible parameters required to use a JavaScript method or function?

No, not all parameters are required for every JavaScript method or function. Many JavaScript functions allow for optional parameters

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

The method used to set up a function to be called when a specific type of event occurs is addEventListener. You attach event listeners to DOM elements using this method, specifying the event type and the function (callback) that should be executed when the event happens.

- What is a callback function?

A callback function is a function that is passed as an argument to another function and is intended to be executed at a later point in time or in response to a specific event or condition

- What object is passed into an event listener callback when the event fires?

The event listener callback receives an event object as its parameter. This event object contains information about the event that occurred, such as the type of event, the target element, and additional data related to the event (e.g., mouse coordinates for a click event).

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

The event.target refers to the DOM element that triggered the event. If you're not sure this always check MDN!

- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  In the first snippet, handleClick is passed as a reference to the function. It means that when the 'click' event occurs, the handleClick function will be executed.
  In the second snippet, handleClick() is not a reference but a function call. It means that the handleClick function is immediately executed, and its return value (if any) is passed as the event handler

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
