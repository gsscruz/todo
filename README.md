# Hosted on: https://secure-citadel-86183.herokuapp.com/

![screen](./src/assets/screencapture.jpg)

### Description: A minimalist `Todo` app built with MERN stack and with some sprinkles ✨of MaterialUI framework

### Instructions to build and run the project

1. `git clone https://github.com/gsscruz/todo.git`
2. `cd todo`
3. `yarn install`
4. You will need to update the value of `const mongoDB` inside `db/connection.js`with a MongoDB collection connection string.

```e.g
const mongoDB = "mongodb+srv://yourName:<password>@myclustertesting.v3k0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```

You can find this on https://www.mongodb.com/

5. After replacing the DB value, then `yarn dev` to start the server
6. The app will then be served on `http://localhost:8080/`
