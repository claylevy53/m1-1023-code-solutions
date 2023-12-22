# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?

No, document.createElement() only creates a new element in memory but does not insert it into the page. You need to use methods like .appendChild() to add the created element to the page

- How do you add an element as a child to another element?

You can add an element as a child to another element using the .appendChild() method or related methods like .insertBefore(). For example, parentElement.appendChild(childElement) adds childElement as a child to parentElement.

- What do you pass as the arguments to the `element.setAttribute()` method?

The name of the attribute you want to set (e.g., "src" or "class").
The value you want to assign to that attribute (e.g., "image.jpg" or "my-class").

- What steps do you need to take in order to insert a new element into the page?

Create the new element using document.createElement().
Set any necessary attributes and content for the new element.
Select the parent element where you want to insert the new element.
Use a method like .appendChild() to add the new element as a child to the parent element.

- What is the `textContent` property of an element object for?

The textContent property of an element object is used to get or set the text content of that element. It represents the text within the element, excluding any HTML tags.

- Name two ways to set the `class` attribute of a DOM element.

You can set the class attribute of a DOM element in two ways:
Using the .setAttribute() method: element.setAttribute("class", "my-class").

Directly accessing the className property: element.className = "my-class".

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

It allows for Reusability and Readability of the function to create elements on the page

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
