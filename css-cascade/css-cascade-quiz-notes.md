# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".

Source Order

Inheritance

Specificity & !important

- What does the term "source order" mean with respect to CSS?

"Source order" in CSS refers to the order in which style rules are written in the CSS stylesheet or embedded in the HTML document using <style> tags. The source order matters because, in the absence of specificity or !important declarations, the last defined rule for a particular element takes precedence

- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?

Styles applied to a parent element can be inherited by its child elements by default in CSS. This inheritance occurs for many CSS properties, such as color, font-size, line-height, etc. Child elements inherit these properties from their parent elements unless they have conflicting style rules that override the inherited values.

- List the three selector types in order of increasing specificity.

Type selectors: These selectors target elements by their HTML tag names (e.g., div, p, a). They have the lowest specificity.

Class selectors and attribute selectors: These selectors target elements based on their class names (e.g., .my-class) or attributes (e.g., [data-attribute="value"]). They have medium specificity.

ID selectors and pseudo-classes: These selectors target elements by their ID attributes (e.g., #my-id) or pseudo-classes (e.g., :hover, :active). They have the highest specificity.

- Why is using `!important` considered bad practice?

It overrides normal CSS rules and can cause the HTML Page to become out of control

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
