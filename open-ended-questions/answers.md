# Section 1 - Design and Architecture

Q1. Could you outline what you would consider to be the important considerations if you were asked to develop a web application that could potentially be used by thousands of users?

The things I would have to consider as important considerations if I was to develop a web application that could be used by thousands of users would be based on first the end-users. Their needs would determine how the web application would be built and deployed.

Since it is a web application, things like what sort of client the application would most likely be accessed from, does the application need to have accessibility features built into it, what sort of connection do they have in the areas where they are accessing the application.


Q2. In your own words, explain what you understand microservices to be. When would you consider using them? What are the pros and cons of using them?

Microservices is an architectural method for building applications. In the past the method in which an application was built was in a singular code base. This led to overhead such as a huge code base when setting up new machines, deployment of code to production is laborious and maintenance of the code required a lot of knowledge of the code-base itself.

Microservices is a solution that tries to mitigate the issues of a singular code base development structure. Various layers of a web application could be broken down into smaller pieces and be assigned to various product teams to develop.

For example if a singular domain is used for both the marketing pages and an application, the two could be separate code repos so that development on either code base would never cross over. An example of this would be using a static-generator to generate the marketing pages which then could be pushed out to a CDN to serve to clients quickly, while the application itself could rest on a subdomain and be served on a different server.

This means that specific teams could be assigned to each specific repo and only need knowledge of their specific layer of an application. Another advantage of separating projects in this manner is that if there is an interruption in service of one layer of an application, it could be isolated and wouldn't hinder the other parts.


Q3. How would you safeguard your application, preventing fault-prone microservices from making your application unresponsive?

Although an application/service is never completely fault-prone there could be some safeguards put in place to help minimize unresponsive applications.

One method is having a deployment process in which a system is put into place to handle the build, testing and deployment of a microservice. This is so that the process in which a microservice is deployed is consistent and if a microservice is fault-prone it can be mitigated before the codebase is introduced to a production setting where it could cause an application to become unresponsive.

Another method is duplication of data into a static form. Let's say an application is a pure informational application that serves as a content management system. A system could be put into place where the data is mirrored in a static form. This solution could help in the absence of a normal system where the reliance of a back-end application tied to a database.

If the back-end service and database is inaccessible the static system can replace the system to provide a read-only solution until the back-end service and database are brought back online.

# Section 2 - Development & Deployment
