# Section 1 - Design and Architecture

## Q1. Could you outline what you would consider to be the important considerations if you were asked to develop a web application that could potentially be used by thousands of users?

The things I would have to consider as important considerations if I was to develop a web application that could be used by thousands of users would be based on first the end-users. Their needs would determine how the web application would be built and deployed.

Since it is a web application, things like what sort of client the application would most likely be accessed from, does the application need to have accessibility features built into it, what sort of connection do they have in the areas where they are accessing the application.


## Q2. In your own words, explain what you understand microservices to be. When would you consider using them? What are the pros and cons of using them?

Microservices is an architectural method for building applications. In the past the method in which an application was built was in a singular code base. This led to overhead such as a huge code base when setting up new machines, deployment of code to production is laborious and maintenance of the code required a lot of knowledge of the code-base itself.

Microservices is a solution that tries to mitigate the issues of a singular code base development structure. Various layers of a web application could be broken down into smaller pieces and be assigned to various product teams to develop.

For example if a singular domain is used for both the marketing pages and an application, the two could be separate code repos so that development on either code base would never cross over. An example of this would be using a static-generator to generate the marketing pages which then could be pushed out to a CDN to serve to clients quickly, while the application itself could rest on a subdomain and be served on a different server.

This means that specific teams could be assigned to each specific repo and only need knowledge of their specific layer of an application. Another advantage of separating projects in this manner is that if there is an interruption in service of one layer of an application, it could be isolated and wouldn't hinder the other parts.


## Q3. How would you safeguard your application, preventing fault-prone microservices from making your application unresponsive?

Although an application/service is never completely fault-prone there could be some safeguards put in place to help minimize unresponsive applications.

One method is having a deployment process in which a system is put into place to handle the build, testing and deployment of a microservice. This is so that the process in which a microservice is deployed is consistent and if a microservice is fault-prone it can be mitigated before the codebase is introduced to a production setting where it could cause an application to become unresponsive.

Another method is duplication of data into a static form. Let's say an application is a pure informational application that serves as a content management system. A system could be put into place where the data is mirrored in a static form. This solution could help in the absence of a normal system where the reliance of a back-end application tied to a database.

If the back-end service and database is inaccessible the static system can replace the system to provide a read-only solution until the back-end service and database are brought back online.

# Section 2 - Development & Deployment

## Q1. Describe the approach you take in testing your applications.

If I'm being completely honest, I don't write any automated tests. I know there should be automated tests written in a test driven development method, but all the projects I've worked on the speed in which execution of features and functions had to be completed trumped writing tests.

Obviously this has led to some regressions. Testing would also provide some confidence that certain user paths are functional and work the way that it needs to.

In the past when I did write tests, I couldn't wrap my head around how to provide integrations tests to a program which most features were behind a firewall. I suppose a test account could've been created but then additional steps would have to be added for the setup and tear down of data.

Would love to learn how the UXD team does testing. I feel this is an area which I can learn a lot.


## Q2. If you were working on a new feature along with several other distributed team members and you became blocked and unable to continue with your work in a productive manner, how would you go about resolving the problem so that you could continue on?

I've worked a lot on remote teams and so this is a problem that is pretty dear to my heart. Obviously autonomy and communication are key. The first step would be to take a concrete amount of time to see if I can understand the issue and try to unblock myself. I usually set myself a 30 minute window to see if I can make any progress.

If I don't see any results within that 30 mins. I usually do a `git blame` to see who was the majority author of the code I'm trying to work with. I'll shoot them an email or if there is a task-management system in place such as Trello or JIRA, I'll try leaving them a comment. If asynchronous communication is ineffective and if the urgency of the feature is high then I'll also send a ping on instant message if it is available.

If there is a general development channel in say instant messaging program, then I'll bring it up there to see if the group can help in unblocking me.

This is because I believe that communication is key but also respecting a person's space to concentrate and attend to my problem when they are available. I don't want to spam them on instant message if they are deep in their work.

Once I've exhausted my avenues of connecting with the members to help getting me unblocked, I'll refocus my energy on something else until I have another cycle to revisit the issue.


## Q3. What do you value in a code base?

In a codebase with multiple authors, I value an adopted style, legibility and comments.

An adopted styling for the language is important because it helps keep the code base consistent. Each author writes in a style that is adhered by the team and so it isn't all over the place. For example with JavaScript, there is the [standard style](https://github.com/feross/standard) which is adopted by many organizations.

Legibility because I should be able to read a variable name or function and get a basic understanding of what it does immediately. For example if I'm looking at a function, feel free to give it a description name so that I know what it does. Same with the parameter, don't just pass in an ambiguous name, but be descriptive.

```
// What does this do? I think this takes a number as its parameter
let i = (n) => {
  return n + 1
}
```

```
// Much better, even without a description of the function, I'm able to get
// a fairly good idea of what the function does and what it expects as a
// parameter
let increaseCounter = (counter) => {
  return counter + 1
}
```

Comments are important because sometimes I write code and I don't know what the heck it is doing. The unfortunate thing about code is that there are bugs. And when you have to hunt down bugs, the quicker you can understand what the code is doing and follow it the quicker you can mitigate the bug.

Especially in MVVMs where you're dealing with view files and their respective view-model files.

# Section 3 - General

## Q1. Tell us about a Red Hat product or open source project you really like, and why.

I really like Ember.js as an open source project. The two main reasons why I like it are, first it is a framework that adheres to conventions over configuration and the second it values backwards compatibility like a feature.

Convention over configuration is important because it allows you to quickly develop applications without having to piece together all sorts of dependencies. In Ember.js there is a command line tool that called `ember-cli` which generates the skeletons of a project for you.

It also has an asset manager, testing suite and generators for many pieces of a JS MVVM framework. Which results in the developer focusing on developing in most use cases. By being opinionated you rely on the expertise of the community and the project maintainer but the decisions as a whole are exactly what you need to get an app built.

Backwards compatibility like a feature, is great because you don't have to be afraid of upgrading your application to the latest version of the library. Which means security issues are always up-to-date and there isn't a lot of overhead to test updates to an application before sending it to production.


## Q2. What do you find most exciting or interesting about working in the software development field?

Using my imagination to come up with solutions that brings value to people. It's like magic.


## Q3. In your career to date, what are you most proud of and why?

Answering yes to my desire to be closer to my growing family and choosing a position allows me to be a work-from-home dad. I've got young kids and they are always having a bunch of firsts, and I was not happy that I could only experience them through photos or videos my wife sent me while I sat in a cubicle.

So I sought out a position that allowed me to work from home and now I can have meaningful conversations with my family during lunch or take a quick break to hug my kid when they demand it.
