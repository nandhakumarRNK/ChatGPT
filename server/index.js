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

// creating a simple express api that calls the function
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
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 2049,
      temperature: 0.9,
      top_p: 1.0,
      frequency_penalty: 0.5,
      stop: ["\n"],
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
  console.log(
    `Server is running on port http://localhost:${port}`
  );
});
