## Assignment Notes 01 - Inception

#### Q1. What is Emmet?

Emmet is a web development tool that allows developers to write HTML and CSS code more quickly and efficiently. It is a plugin that can be installed in text editors and integrated development environments (IDEs) such as Visual Studio Code, Sublime Text, and Atom.

Emmet uses shorthand syntax to generate HTML and CSS code quickly. For example, instead of typing out a full HTML tag with attributes, Emmet allows you to use a shortcut, such as "div.classname#id", which expands to `<div class='classname' id='id'></div>`.

#### Q2. Difference between a Library and Framework?

Both libraries and frameworks are used to build software applications, but they differ in the way they are designed and used.

| Parameter            | Library                                                                                                                                                                                           | Framework                                                                                                                                                                                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition           | Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.                                                                   | Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.                                                                                                                                               |
| Inversion of Control | By using a library, you can control the flow of the application and call the library.                                                                                                             | In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.                                                                                                                                          |
| Collection           | Generally, libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc.                                                                   | Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc.                                                                                                                                                                         |
| Code Modification    | Codes in libraries are geared toward a particular program or to solve a specific development problem. Therefore, developers must modify library code to meet their needs.                         | Despite the fact that frameworks generate new codes for developers. These codes cannot be altered or modified later. Unlike libraries, frameworks do not allow users to modify their pre-written codes, so you don’t have to worry about deleting or changing them. |
| Scope                | It is possible to call a library out of context. You may use the library wherever you see fit in your code.                                                                                       | On the other hand, you can only call and use what belongs to a Framework within the same Framework.                                                                                                                                                                 |
| Function             | In the program linking and binding process, they play an important role.                                                                                                                          | Using them, you can build and deploy applications in a standard way as the framework already provides code to perform common tasks and uses code provided by a developer for custom functionality.                                                                  |
| Complexity           | Having a library means understanding the functionality of each method, and it isn’t easy to create complex interactions since you need to call many methods to get the desired results.           | Frameworks, on the other hand, embody the basic flow, and since plugins need to be added to code, it is easier to do the right modification.                                                                                                                        |
| Extensibility        | Generally, libraries aren’t designed for extensibility; they are designed to accomplish a specific purpose.                                                                                       | Frameworks provide general functionality. Because of this, they are built to be extensible, which allows developers to incorporate app-specific features without modifying the framework’s source code.                                                             |
| Replaceable          | It is easy to replace a library with another library. For instance, if you do not like the jQuery date picker library, you can use another date picker like a bootstrap date picker or pick date. | Frameworks are difficult to replace. If, for instance, you were using AngularJS to build your product, you cannot simply swap it out for another framework. It requires rewriting the entire codebase.                                                              |
| Performance          | Less code is required to build libraries, which leads to faster loading times and better performance.                                                                                             | Developing a framework requires a lot of coding, which increases loading times and decreases performance.                                                                                                                                                           |
| Usage                | The purpose of libraries is to perform a defined and specific task. Eg: Image manipulation, network protocols, math operations, etc.                                                              | Frameworks can be used for performing a wide range of tasks. Among these are Web application systems, plug-in managers, GUI systems, and so on.                                                                                                                     |
| Existing Projects    | You can integrate libraries seamlessly into existing projects to add functionality.                                                                                                               | Incorporating frameworks seamlessly into an existing project is impossible. Instead, frameworks should be used when starting a new project.                                                                                                                         |
| Benefits             | Good code quality, reusability, and control, enhanced speed and performance of the program, etc.                                                                                                  | Faster programming, support from the community, great support for MVC (Model View Controller) pattern, etc.                                                                                                                                                         |
| Examples             | JQuery, React JS, etc.                                                                                                                                                                            | Spring, NodeJS, AngularJS, Vue JS, etc.                                                                                                                                                                                                                             |

#### Q3 What is CDN?

CDN stands for Content Delivery Network. It is a network of servers spread across different geographical locations that work together to provide fast and reliable delivery of content over the internet. The primary purpose of a CDN is to reduce latency and increase the speed of content delivery to end-users by caching content on servers that are closer to them.

When a user requests content from a website, the CDN automatically selects the server that is closest to the user's location and delivers the content from that server. This reduces the distance that the content needs to travel, which in turn reduces the time it takes for the content to reach the user's device. CDNs can deliver various types of content, including web pages, images, videos, and other media files.

#### Q4 Why is React known as React?

React is called "React" because it revolves around the idea of "reacting" to changes in data. React is a JavaScript library for building user interfaces, and its main focus is on efficiently updating the UI when the underlying data changes.
React is a JavaScript library for building user interfaces that was developed and open-sourced by Facebook in 2013. It is known as React because it was designed to help developers "react" to changes in the state of an application, by efficiently rendering and updating the UI in response to those changes.

React is designed to be declarative, meaning that developers specify what the UI should look like based on the current state of the application, and React takes care of updating the UI as needed. This allows developers to focus on building the logic of the application rather than worrying about how to update the UI efficiently.
React has gained popularity due to its performance and flexibility, and is widely used in the development of web and mobile applications. It is also used in combination with other technologies, such as the React Native framework for building native mobile apps, and the React VR library for building virtual reality experiences.

#### Q5 What is crossorigin in script tag?

he `crossorigin` attribute in a script tag is used to specify the CORS (Cross-Origin Resource Sharing) policy for the requested script.

CORS is a security feature implemented by web browsers to prevent web pages from making requests to a different domain than the one that served the original web page. The `crossorigin` attribute is used to indicate that the script may be requested from a different domain and that the server providing the script will allow cross-origin requests.

When using the crossorigin attribute in a script tag, the server providing the script must also respond with the appropriate CORS headers to indicate that it allows cross-origin requests. If the server does not respond with the appropriate headers, the browser will block the script from being loaded.

There are three possible values for the `crossorigin` attribute:

- `anonymous`: This is the default value. It indicates that the script can be requested from a different domain, but no credentials such as cookies or HTTP authentication will be sent along with the request.
- `use-credentials`: This value indicates that credentials should be sent along with the request when fetching the script.
- `null`: This value indicates that the script should not be fetched cross-origin, and should only be fetched from the same domain.

For example, the following script tag includes the crossorigin attribute to allow the script to be loaded from a different origin:

<script src="https://example.com/script.js" crossorigin="anonymous"></script>

#### Q6 What is diference between React and ReactDOM ?

React and ReactDOM are both JavaScript libraries developed by Facebook for building user interfaces, but they have different roles.

React is a JavaScript library that is used for building UI components. It provides a set of APIs for building reusable UI components and managing their state. React is focused on the declarative approach to building UIs, where you describe what you want to display and React takes care of updating the UI when the data changes.

On the other hand, ReactDOM is a package that provides a way to render React components into the browser DOM (Document Object Model). It is responsible for managing the interaction between React components and the browser DOM. ReactDOM provides a set of methods for rendering React components to the DOM, updating them, and handling events.

To summarize, React is responsible for building UI components and managing their state, while ReactDOM is responsible for rendering those components to the browser DOM and managing their interaction with the DOM. In other words, React is the core library for building UI components, while ReactDOM is the glue that connects React to the browser DOM.

#### Q7 What is difference between react.development.js and react.production.js files via CDN?

React is a popular JavaScript library used for building user interfaces. When using React via CDN, there are two main files available: react.development.js and react.production.js.

The main difference between the two files is that react.development.js contains additional error-checking and debugging information, which can be helpful during development but increases the file size. On the other hand, react.production.js is optimized for production use and does not include these extra debugging features, resulting in a smaller file size and faster performance.

Therefore, it is recommended to use react.development.js during development to facilitate error detection and debugging, and react.production.js in a production environment to improve the performance and loading speed of the application.

#### Q8 What is async and defer?

`async` and `defer` are two attributes that can be added to the `<script>` tag in HTML to control how a script is loaded and executed by the browser.

The `async` attribute tells the browser to download the script asynchronously while the rest of the page continues to load. This means that the script will not block the loading of the page, but will be executed as soon as it is downloaded, regardless of whether the rest of the page has finished loading or not. This is useful for scripts that are not critical for the page to function, such as analytics or ads scripts.

The `defer` attribute tells the browser to download the script asynchronously, but `defer` its execution until the page has finished parsing. This means that the script will not block the loading of the page, and will be executed in the order in which it appears in the HTML document, after the page has finished loading. This is useful for scripts that need to access the DOM or interact with other scripts on the page.

In summary, `async` is used for non-critical scripts that can run independently of the page content, while `defer` is used for scripts that need to interact with the page content and other scripts, but can wait until the page has finished loading before executing.
