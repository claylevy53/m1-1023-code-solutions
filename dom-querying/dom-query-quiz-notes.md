# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

We log things to the console for debugging and development purposes. It helps us inspect the values of variables, trace the flow of our code, and identify errors

- What is a "model"?

A "model" refers to a structured representation of a document, such as an HTML web page. It provides a way to interact with and manipulate the document's elements and content programmatically

- Which "document" is being referred to in the phrase Document Object Model?

This refers to the web document, typically an HTML or XML document, that is being represented and manipulated in the DOM

- What is the word "object" referring to in the phrase Document Object Model?

This represents the document as a structured collection of objects, where each element, attribute, and piece of content is represented as an object in a hierarchical tree-like structure

- What is a DOM Tree?

A DOM Tree is a hierarchical representation of a web document, where each element, attribute, and text content is organized as nodes in a tree structure

- Give two examples of `document` methods that retrieve a single element from the DOM.

document.getElementById('elementId') and document.querySelector('selector') are two examples of document methods that retrieve a single element from the DOM.

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

document.getElementsByClassName('className') and document.querySelectorAll('selector') are examples of document methods that retrieve multiple elements from the DOM at once, returning a NodeList.

- Why might you want to assign the return value of a DOM query to a variable?

Assigning the return value of a DOM query to a variable allows you to store a reference to a specific element or set of elements, making it easier to manipulate or interact with them in your JavaScript code without repeatedly querying the DOM

- What `console` method allows you to inspect the properties of a DOM element object?

console.dir() allows you to inspect the properties of a DOM element object in a structured and interactive manner

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

Placing a <script> tag at the bottom of the HTML content is often done to ensure that the JavaScript code is executed after the HTML content has been parsed. This can prevent potential issues related to the timing of script execution and improve page load performance

- What does `document.querySelector()` take as its argument and what does it return?

document.querySelector() takes a CSS selector as its argument and returns the first element in the DOM that matches the selector

- What does `document.querySelectorAll()` take as its argument and what does it return?

document.querySelectorAll() takes a CSS selector as its argument and returns a NodeList containing all elements in the DOM that match the selector.

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
