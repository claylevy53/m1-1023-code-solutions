# html-block-and-inline-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do block-level elements affect the document flow?

Block-level elements create a new block formatting context in the document flow.

They typically start on a new line and extend the full width of their containing element (unless otherwise specified by CSS).

Block-level elements stack vertically on top of each other, creating a block-like structure in the document.

- How do inline elements affect the document flow?

Inline elements do not create new block formatting contexts.

They flow within the content of block-level elements and do not start on a new line.

Inline elements are placed inline with the surrounding text or content and do not create breaks or new blocks within the content.

- What are the default width and height of a block-level element?

Block-level elements do not have a default fixed width or height specified by HTML itself.

Their width and height are usually determined by their content and any CSS styles applied to them.

By default, block-level elements will expand to fill the available width of their containing element (e.g., the width of the parent container), and their height will be based on their content unless a specific height is set through CSS or they have a default intrinsic height (e.g., a <div> with no content will have a default height of 0).

- What are the default width and height of an inline element?

Inline elements also do not have a default fixed width or height specified by HTML.

They are designed to flow within the content, so their width is determined by the content they enclose.

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
