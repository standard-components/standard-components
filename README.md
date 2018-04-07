
# Standard Components

A specification for functional UI components

https://standard-components.com

## Motivation

UI component libraries come in all shapes and sizes.
This specification is intended as a way to standardize
naming conventions and props APIs in order to create an ecosystem
of interchangeable UI components and encourage greater code reusability.


## Component Names

In order to create libraries of interchangeable UI components,
the following naming convention should be used.
This list is intentionally limited and is meant to be a starting
point for demonstration. More components will likely be added over time.

- [Box](#Box)
- [Flex](#Flex)
- [Text](#Text)
- [Heading](#Heading)
- [Image](#Image)
- [BackgroundImage](#BackgroundImage)
- [Button](#Button)
- [Link](#Link)

### Box

The Box component is a primitive box-model layout component
that handles margin, padding, width, and other layout styles.

### Flex

The Flex component is an extension of the Box component
with flexbox-specific properties.

### Text

The Text component is a primitive typographic component
that handles font size, weight, line-height, alignment, and other typographic styles.

### Heading

The Heading component is an extension of the Text component
intended for headings.

### Image

The Image component is a content component that displays images.

### BackgroundImage

The BackgroundImage is an extension of the Box component
with props for displaying background images.

### Button

The Button component is an interactive component with styles that look like a button.

### Link

The Link component is an interactive component meant for navigation.


## Style Props

Style props are a higher-level abstraction on top of CSS
meant for flexibility and to help address per-instance styling concerns.
Style props are largely based on CSS properties, with shorthand props for margin and padding.

### Variants

Some components, such as Buttons, use style variants to render different
versions, such as `primary` and `secondary` Button styles.
Variants should be handled with a `variant` prop, with shorthand boolean props for `primary` and `secondary` variants.


## Themes

Themes are objects that define the values used by style props.
Themes ensure consistent margin, padding, colors, font sizes, and other UI constants.


## Component Types

By adhering to a strict component type structure, components in a system can be concerned with a singular purpose and allow for greater interchangeability across libraries.

### Layout

Layout components control width, height, and spacing.
They do **not** attempt to control typography or other considerations.

### Typography

Typographic components are concerned with font families, sizes, weights, leading, tracking, and other properties.
Typographic components are **not** concerned with layout.

### Content

Content components display things like images, videos, and diagrams without affecting layout, typography, or other styling concerns.

### Interaction

Interactive elements, such as links, buttons, and form elements, require user input and do **not** generally handle layout or typographic concerns.

### Style

Style components handle other UI styles, such as borders, radii, shadows, and gradients without affecting layout or typography.

### Position

Position components remove their children from the normal document flow and should be used sparingly.


## Related

- [styled-system][sys]

[Made by Compositor][c8r] | [MIT License](LICENSE.md)

[c8r]: https://compositor.io
[sys]: https://github.com/jxnblk/styled-system
