# Wedding Photographer Portfolio

### Tutorials I am using: 
[Smooth Loading Transitions with Framer Motion. AnimateSharedLayout](https://www.notion.so/Framer-motion-AnimateSharedLayout-9e35e454cb5c4341a618a213558a857e)

## Things I learn about: 

- ### Images: 
- All images are living in the public folder. They are .webp images which come with fallbacks ( -jpg format) for lame browsers who don't support .webp formats - the former are half the size of jpg

- WebP is a modern image format that provides superior lossless and lossy compression for images on the web. 

- ### CSS: 
- *white-space: nowrap;* the text will never wrap to the next line

- ### [Framer-Motion](https://www.framer.com/api/motion/):
1. *AnimateSharedLayout* component enables to perform layout animations between different components that share the same *layoutId*. By adding *type="crossfade"* to AnimateSharedLayout, immediate children of AnimatePresence will crossfade with their old component, smoothing this transition.
2. Variants - can be used to animate entire sub-trees of components with a single animate prop. Do not forget to wrap your html element which you want to animate with {motion} word:
    ```
        const list = { hidden: { opacity: 0 } }
        const item = { hidden: { x: -10, opacity: 0 } }

        return (
        <motion.ul animate="hidden" variants={list}>
            <motion.li variants={item} />
            <motion.li variants={item} />
            <motion.li variants={item} />
        </motion.ul>
        )
    ```
3. framer-motion animation consists of three main attributes:
'initial' - Before the component has mounted

'animate' - As the component is mounting/mounted

'exit' - When the component unmounts (Requires Animate Presence)

4. Animate Presence component animates components when they're removed from the React tree. It's required to enable exit animations with this component. **Usage:** Wrap one or more motion components with *AnimatePresence*. This enables the use of an exit prop, which can define a state for the component to animate to before it's unmounted from the DOM.

- ### [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) 
Detection of elements in viewport & smooth scrolling with parallax effects.
