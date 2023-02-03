const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const configuration = new Configuration({
  organization: "org-eeEi8tqcHGBIRKiFA6OueIMm",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// creating api that calls the function
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from ChatBot!",
  });
});

app.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    console.log(`User Question : ${message}`);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      stop: ["., \n, \n\n"],
    });
    res.status(200).json({
      message: response.data.choices[0].text,
    });
  } catch (error) {
    console.log("Error Occured : " + error);
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
