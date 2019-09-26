const express = require("express");
const bodyParser = require("body-parser");
const emailService = require("../services/email-service");
const mockTopics = require("../mock-repository/topic");
const mockDocuments = require("../mock-repository/documents");
const mockReferences = require("../mock-repository/references");
const mockDocumentPage = require("../mock-pages/reference-document");
const socket = require("../../bin/socket");

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

app.get("/references", (req, res) => {
  res.send({
    success: true,
    references: mockReferences.getMockReferences()
  });
});

app.get("/references/:id", (req, res) => {
  const doc = mockReferences.getMockReferences().find(item => item.docId === req.params.id);
  res.send(mockDocumentPage.getDocumentReferencePage(doc));
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

  let mockDocumentParticipants = mockDocuments.getMockDocumentParticipants().find(document => document.id == id);

  if (mockDocumentParticipants) {
    res.send({
      success: true,
      participants: mockDocumentParticipants.participants
    });
  } else {
    res.send({
      success: false,
      message: "Participants not foud"
    })
  }
});


app.post("/documents/:id/threads", (req, res, next) => {
  const { id } = req.params;
});

app.post("/documents/:id/threads/:threadId/comments", async (req, res, next) => {
  const { id, threadId } = req.params;
  const comment = req.body;

  const topics = mockTopics.getMockTopics();

  let topic = topics.find(topic => topic.document.id == id);

  if (!topic) {
    return res.send({
      success: false,
      message: 'Topic not found'
    })
  }

  let thread = topic.commentThreads.find(thread => thread.threadId == threadId);

  if (!thread) {
    return res.send({
      success: false,
      message: 'Thread not found'
    })
  }

  thread.comments.push(comment);

  const emailResponse = await emailService.sendEmail(comment);
  socket.emit("email:sent", emailResponse);

  res.send({
    success: true,
    message: 'Success'
  })
});

module.exports = app;
