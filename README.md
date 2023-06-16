# Overview

<!-- {Important!  Do not say in this section that this is college assignment.  Talk about what you are trying to accomplish as a software engineer to further your learning.} -->

This software was built to implement web design practices using ReactJs with Typescript. I previously worked for a housing company as an apartment manager and often wondered how I would build a similar website to what we used. There were several pieces of the web application that I did not find intuitive or just didn't pull information correctly. After that experience I have wanted to try and build something of my own version to improve my own skills in web development. Throughout this project I have gotten to learn with both front-end and back-end development. I built the backend API for this app using Django. The repository for it can be found [here](https://github.com/Myapi314/SQLite-Housing-Database).

<!-- {Provide a description the web app that you wrote. Describe how to start a test server on your computer and what website to open up to see the first page of the app.} -->

To test and run this application you will have to have both the backend and front end running simultaneously. Information for how to run the backend locally is included in the README for that repo.

Before running the test server, make sure you have installed all the dependencies and that you are in the my-housing-api directory. Run the following to start the test server `npm run dev`.

<!-- {Describe your purpose for writing this software.} -->

<!-- {Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.} -->

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

<!-- {Describe each of the web pages you created and how the web app transitions between each of them.  Also describe what is dynamically created on each page.} -->

Currently, the web application only has one page. This page has several components, however not all have full functionality yet. At the top is a navigation bar that will be used to jump between different pages. Beneath that is the lease page. The user can select a complex and a lease period. This dynamically generates content on the page from the backend. Depending on the lease period selected the page will also show which units have residents in them or if they are vacant. Each row in this table is also clickable. Clicking on a row will bring up a side bar with the residents information and an edit button. If the spot selected was vacant there will be a button for adding a resident. Neither buttons perform their intended operations yet, so clicking on them brings up a quick alert to remind the user that those features are not implemented yet.

# Development Environment

<!-- {Describe the tools that you used to develop the software} -->

<!-- {Describe the programming language that you used and any libraries.} -->

This project was developed using the ReactJs framework, written with Typescript. The initial setup of the front end was done following this [tutorial](https://www.youtube.com/watch?v=SqcY0GlETPk&t=3920s). It recommended using Vite, which is a tool for frontend development commonly used with React projects. I also used react-bootstrap for most if not all of the components I used in my current version of the project. Bootstrap is a toolkit for quickly building several common components often seen in modern web applications.

# Useful Websites

<!-- {Make a list of websites that you found helpful in this project} -->

- [Code Formatting](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code)

### React

- [Programming with Mosh React Tutorial](https://www.youtube.com/watch?v=SqcY0GlETPk&t=3920s)
- [Babel](https://babeljs.io/)
- [StackHawk UseEffect](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/)
- [Consume APIs with React](https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/)
- [W3 Schools Use CSS with React](https://www.w3schools.com/react/react_css.asp)
- [Hooks with setState](https://www.linkedin.com/pulse/provide-callback-usestate-hook-like-setstate-saransh-kataria/)

### Bootstrap

- [Bootstrap Docs](https://getbootstrap.com/docs/)
- [React-Bootstrap](https://react-bootstrap.github.io/docs/components/dropdowns)

# Future Work

<!-- {Make a list of things that you need to fix, improve, and add in the future.} -->

- Routing

  I've learned a little bit about routing, but didn't see a need to implement it quite yet into the project at this stage. It is however something I would love to see my application implement.

- Login and Manager vs Resident View

  One of the features I wish the application I used to work on had, was the ability to see the site from a resident's perspective. Some test account so I could see what the people I was working with and for were seeing. Very few of the other managers had any experience with that side of the application which made explaining things to our residents difficult. However, it would make an awesome feature for my application.

- Views/pages

  Somewhat related to routing, there are several other views I would like the project to have including:

  - View all Residents (with ability to sort/search)
  - View Resident profile page and edit
  - Reports, such as rent roll, capacity, and balance reports
