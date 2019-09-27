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

  const { id } = req.params;
  const references = mockReferences.getMockReferences();
  const document = references.find(item => item.document_reference_id === id);

  if (document) {
    const page = mockDocumentPage.getDocumentReferencePage(document);
    res.send(page);
  } else {
    res.send('Reference not found');
  }

});

app.put("/topics/:id", (req, res, next) => {
  
  const { id } = req.params;
  const requestTopic = req.body;
  const topics = mockTopics.getMockTopics();
  const newMockTopics = topics.map(topic => topic.id === id ? requestTopic : topic );
  const topicsUpdated = mockTopics.updateTopics(newMockTopics);

  console.log("topicsUpdated", topicsUpdated);

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
