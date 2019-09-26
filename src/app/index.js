const express = require("express");
const bodyParser = require("body-parser");
const emailService = require("../services/email-service");
const mockTopics = require("../mock-repository/topic");
const mockDocuments = require("../mock-repository/documents");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const references = [
  {
    id: ":R4D1X-DOC-000",
    technicalName: "TECHNICAL-NAME-000",
    docId: "15092301-ba3a-4f70-ae5b-0ef57191b0e7",
    link:
      "http://localhost:3000/references/15092301-ba3a-4f70-ae5b-0ef57191b0e7"
  },
  {
    id: ":R4D1X-DOC-111",
    technicalName: "TECHNICAL-NAME-111",
    docId: "b6a649a7-83eb-4024-a504-e2882121a766",
    link:
      "http://localhost:3000/references/b6a649a7-83eb-4024-a504-e2882121a766"
  },
  {
    id: ":R4D1X-DOC-222",
    technicalName: "TECHNICAL-NAME-222",
    docId: "7b3005df-d1b7-4758-8206-dbe779fa1682",
    link:
      "http://localhost:3000/references/7b3005df-d1b7-4758-8206-dbe779fa1682"
  },
  {
    id: ":R4D1X-DOC-333",
    technicalName: "TECHNICAL-NAME-333",
    docId: "b160be53-1b82-4b1a-9410-01cfd42215b1",
    link:
      "http://localhost:3000/references/b160be53-1b82-4b1a-9410-01cfd42215b1"
  },
  {
    id: ":R4D1X-DOC-444",
    technicalName: "TECHNICAL-NAME-444",
    docId: "b84f2b86-b2ea-4348-8090-72c26bf3736d",
    link:
      "http://localhost:3000/references/b84f2b86-b2ea-4348-8090-72c26bf3736d"
  },
  {
    id: ":R4D1X-DOC-555",
    technicalName: "TECHNICAL-NAME-555",
    docId: "cd49beba-f1ad-4a53-abc5-59c2bc8dba59",
    link:
      "http://localhost:3000/references/cd49beba-f1ad-4a53-abc5-59c2bc8dba59"
  },
  {
    id: ":R4D1X-DOC-666",
    technicalName: "TECHNICAL-NAME-666",
    docId: "2b8e9c0c-72e7-4bd3-846d-944e5583a5cd",
    link:
      "http://localhost:3000/references/2b8e9c0c-72e7-4bd3-846d-944e5583a5cd"
  },
  {
    id: ":R4D1X-DOC-777",
    technicalName: "TECHNICAL-NAME-777",
    docId: "02d38d92-596c-4207-90b5-7820d0326c59",
    link:
      "http://localhost:3000/references/02d38d92-596c-4207-90b5-7820d0326c59"
  },
  {
    id: ":R4D1X-DOC-888",
    technicalName: "TECHNICAL-NAME-888",
    docId: "6d0946e6-58d6-42ff-9e55-3b97a176e00f",
    link:
      "http://localhost:3000/references/6d0946e6-58d6-42ff-9e55-3b97a176e00f"
  },
  {
    id: ":R4D1X-DOC-999",
    technicalName: "TECHNICAL-NAME-999",
    docId: "b81f38f8-6ccb-430a-bc41-5163f32712fa",
    link:
      "http://localhost:3000/references/b81f38f8-6ccb-430a-bc41-5163f32712fa"
  }
];

app.get("/references", (req, res) => {
  res.send({
    success: true,
    references
  });
});

app.get("/references/:id", (req, res) => {
  const doc = references.find(item => item.docId === req.params.id);
  res.send({
    success: true,
    doc
  });
});

app.post("/email/notify", async (req, res) => {
  const email = req.body;
  try {
    
    emailService.sendEmail(email);

    res.send({
      success: true,
      message: "Email sent"
    });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/documents/:id/topics/:topicId", (req, res, next) => {
  const { id, topicId } = req.params;

  let topics = mockTopics.getMockTopics();
  const topic = topics.find(
    topic => topic.document.id == id && topic.id == topicId
  );
  res.send({
    success: true,
    topic
  });
});

app.get("/documents/:id/participants", (req, res, next) => {
  const { id } = req.params;
  const mockDocumentParticipants = mockDocuments
    .getMockDocumentParticipants()
    .find(document => document.id == id);

  res.send({
    success: true,
    participants: mockDocumentParticipants.participants
  });
});

module.exports = app;
