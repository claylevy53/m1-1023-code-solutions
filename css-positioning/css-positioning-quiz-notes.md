# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?

The default value for the position property of HTML elements is static. In position: static, elements are positioned in the normal document flow, and the top, right, bottom, and left properties have no effect.

- How does setting `position: relative` on an element affect document flow?

When you set position: relative on an element, it does not affect the document flow. The element still occupies space in the normal document flow, just like in the default static positioning. However, you can use the top, right, bottom, and left properties to offset the element from its normal position within the flow

- How does setting `position: relative` on an element affect where it appears on the page?

Setting position: relative on an element allows you to adjust its position relative to where it would normally be in the document flow. You can use the top, right, bottom, and left properties to move it from its default position.

- How does setting `position: absolute` on an element affect document flow?

When you set position: absolute on an element, it is taken out of the normal document flow. This means that it no longer affects the position or layout of other elements in the flow, and other elements may overlap it.

- How does setting `position: absolute` on an element affect where it appears on the page?

When you set position: absolute on an element, it is positioned relative to its nearest positioned ancestor (an ancestor element with a position value other than static) or, if none exists, relative to the initial containing block (usually the viewport).

- How do you constrain an absolutely positioned element to a containing block?

To constrain an absolutely positioned element to a containing block, make sure that one of its ancestors has a position value of relative, absolute, fixed, or sticky. This ancestor will serve as the containing block for the absolutely positioned element, and you can position the child element within the boundaries of this ancestor using the top, right, bottom, and left properties.

- What are the four box offset properties?

top: Specifies the distance an element's top edge is offset from its normal position.

right: Specifies the distance an element's right edge is offset from its normal position.

bottom: Specifies the distance an element's bottom edge is offset from its normal position.

left: Specifies the distance an element's left edge is offset from its normal position.

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
