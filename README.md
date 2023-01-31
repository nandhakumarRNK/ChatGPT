<h1 align="center"> CHATBOT - OPENAI -CHATGPT </h1>

<p align="center">
  <img src="https://s.yimg.com/ny/api/res/1.2/j53b_lnzVOKipwrf71ilig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM3Nw--/https://s.yimg.com/os/creatr-uploaded-images/2023-01/e63a0910-91b3-11ed-a5ef-e0922b9825e0" width="300" height="300"/>
</p>

ChatGPT clone is a fully functioning chatGPT server-side clone with basically all the chatGPT functionalities. Here, creating new conversations, saving conversations, and adding new messages to an existing conversation is made possible. Crud functionalities can be performed on both messages and conversations. A newly added message will generate an automatic response from the ChatGPT openai API and create a new conversation.

## Installation

To use this API do the following steps:

1. first of all, you should clone it on your local computer by using the following command:

```bash
git clone https://github.com/nandhakumarRNK/chatBot-openAI.git
```

2. Go to the [openai](https://beta.openai.com/account/api-keys) website and generate a new API KEY.

3. Open a new [mongodb](https://www.mongodb.com/) cluster and create a new database with _your-database-name_ that you're going to use on the following _config.env_ file.
   Don't forget to make the other MongoDB setup such as:

- Adding new username and password.
- Network configuration.
- Copying the database NodeJS connection URL and adding it to your _config.env_ file.

4. Create a _config.env_ file on the project's main directory and add the following lines to it:

```bash
PORT = port
DATABASE_NAME = your-database-name
MONGODB_URI =  your-nodejs-connection-url(copied from mongodb)
OPENAI_API_KEY = your-openai-api-key
```

Replace your username and password on the nodejs connection url as follows:

```bash
mongodb+srv://your-username:your-password@cluster0.lm9patn.mongodb.net/?retryWrites=true&w=majority)
```

5. Use the package manager [pip](https://pip.pypa.io/en/stable/) to install(or update) all the dependencies.

```bash
npm install
npm install mongodb nodemon express dotenv openai
```

## Usage

1. Go to the package.json and add/modify the following fields:

```python
 "engines": {
    "node": "14.17.6"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```

2. Locate the directory and run the following command:

```bash
nodemon server.js
```

3. Go to your _localhost:port_ and add endpoints to the URL for testing purposes.

Here are same examples

```bash
- localhost:port/conversations
- localhost:port/conversations/:id/
- localhost:port/conversations/:id/messages
```

To test all the APIs, you can use postman or any other API platform.
Everything should work perfectly.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is an open-source, under the [MIT](https://choosealicense.com/licenses/mit/) license.

# Built with

- [Open AI](https://openai.com/) - For API Access
- [Vite.JS](https://vitejs.dev/) - Frontend (Vanilla JS)
- [Express.JS](https://expressjs.com/) - Backend
- [Google Fonts](https://fonts.google.com/) - Alegreya Sans
- [Render](https://render.com/) - Backend Deployment
- [Vercel](https://vercel.com/) - Frontend Deployment
- [NodeJS](https://nodejs.org/en/) - Backend



## Developed By

<div align="center">
<a href="https://github.com/dembasow98">
<img src="https://avatars.githubusercontent.com/u/121867811?v=4" width="100px;" alt="Nandhakumar RNK" style="border-radius:50%"/>
<br />
<sub><b>Nandhakumar RNK</b></sub>
</a>
<br />
</div>