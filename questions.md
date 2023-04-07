# Questions

### What is the difference between Component and PureComponent? give an example where it might break my app.


- The main difference between Component and PureComponent is how they handle component updates and re-rendering. Component use `shouldComponentUpdate` and always returns `true`. PureComponent only re-renders if there are changes, this can prevent unnecessary re-renders and improve performance in certain cases. An example that might cause a issue is: if the PureComponent component receives mutable data as props, and that data changes without triggering a re-render of the parent component, PureComponent may not detect the changes and fail to re-render.


### Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

- Context updates may not propagate properly because the Context updates are asynchronous and may not propagate to all components immediately. If shouldComponentUpdate is used to make decisions based on Context values, it may not always reflect the most up-to-date values, leading to unexpected behavior.


### Describe 3 ways to pass information from a component to its PARENT.

- Callback: The parent component can define the callback function and pass it down as a prop, allowing the child component to communicate back to the parent component.

- State management: using Redux, the child component can dispatch actions that are handled by the parent component.

- Context API: the child component can access the Context provided by a parent component, and use it to pass information back to the parent component or any other component that subscribes to the same context.


### Give 2 ways to prevent components from re-rendering.

- useMemo and shouldComponentUpdate.

### What is a fragment and why do we need it? Give an example where it might break my app.

- It's a kind of component that allows us to group multiple elements without adding to the DOM, fragment can help avoid unnecessary elements in the DOM tree and can help improve performance. This can be useful when you need to render a list of items as you don't need to add an additional parent element to group the items in the list.

- Fragments can cause problems for CSS selectors as they don't add any additional DOM elements.

### Give 3 examples of the HOC pattern.

- react-redux connect(mapStateToProps, mapDispatchToProps)(UserPage)
- react-router withRouter(AutocompletePage)
- material-ui withStyles(styles)(AutocompletePage)

### What's the difference in handling exceptions in promises, callbacks and async...await.

- Promises use .catch() to handle errors, callbacks pass an error object as the first argument to the callback function, and async/await uses try-catch to handle errors. 

### How many arguments does setState take and why is it async.


- Two arguments, the newState and a optional callback. It's async for the performance optimization, basically it batches multiple setState calls together an applies them in a single update to DOM.

### List the steps needed to migrate a Class to Function Component.

-  Create the new function that will replace the Class.
-  Replace the this.props to function arguments.
-  Replace the this.state to useState.
-  Replace lifecycle methods such (componentDidMount, componentDidUpdate, etc) to useEffect.
 

### List a few ways styles can be used with components.


- Inline Styles
- CSS-in-JS
- CSS Classes
- CSS Frameworks (Bootstrap, Tailwind, etc)
- Company Design System.


### How to render an HTML string coming from the server.

- By using the dangerouslySetInnerHTML attribute.

