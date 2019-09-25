const express = require('express')
const bodyParser = require('body-parser')
const emailService = require('../services/email-service')
const mockTopics = require('../mock-repository/topic')
const mockDocuments = require('../mock-repository/documents')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, x-access-token"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next()
})

const docs = [
    { id: ':MODEC-DOC-000', technicalName: 'TECHNICAL-NAME-000', docId: '1', link: 'http://localhost:3000/docs/1' },
    { id: ':MODEC-DOC-111', technicalName: 'TECHNICAL-NAME-111', docId: '2', link: 'http://localhost:3000/docs/2' },
    { id: ':MODEC-DOC-222', technicalName: 'TECHNICAL-NAME-222', docId: '3', link: 'http://localhost:3000/docs/3' },
    { id: ':MODEC-DOC-333', technicalName: 'TECHNICAL-NAME-333', docId: '4', link: 'http://localhost:3000/docs/4' },
    { id: ':MODEC-DOC-444', technicalName: 'TECHNICAL-NAME-444', docId: '5', link: 'http://localhost:3000/docs/5' },
    { id: ':MODEC-DOC-555', technicalName: 'TECHNICAL-NAME-555', docId: '6', link: 'http://localhost:3000/docs/6' },
    { id: ':MODEC-DOC-666', technicalName: 'TECHNICAL-NAME-666', docId: '7', link: 'http://localhost:3000/docs/7' },
    { id: ':MODEC-DOC-777', technicalName: 'TECHNICAL-NAME-777', docId: '8', link: 'http://localhost:3000/docs/8' },
    { id: ':MODEC-DOC-888', technicalName: 'TECHNICAL-NAME-888', docId: '9', link: 'http://localhost:3000/docs/9' },
    { id: ':MODEC-DOC-999', technicalName: 'TECHNICAL-NAME-999', docId: '10', link: 'http://localhost:3000/docs/10' }
];

app.get('/docs', (req, res) => {
    res.send({
        success: true,
        docs
    })
})

app.get('/docs/:id', (req, res) => {
    const doc = docs.find(item => item.docId === req.params.id)
    res.send({
        success: true,
        doc
    })
})

app.post('/users/:id/send-email', async (req, res) => {
    const {to, doc, name, content} = req.body;
    try {
        emailService.sendEmail({
            to,
            doc,
            name,
            content
        });

        res.send({
            success: true,
            message: 'Email sent'
        })

    } catch (err) {
        console.error(err.message)
    }
    
})

app.get('/documents/:id/topics/:topicId', (req, res, next) => {

    const { id, topicId } = req.params;

    let topics = mockTopics.getMockTopics();
    const topic = topics.find(topic => topic.document.id == id && topic.id == topicId);
    res.send({
        success: true,
        topic
    })
})

app.get('/documents/:id/participants', (req, res, next) => {
    const { id } = req.params;
    const mockDocumentParticipants = mockDocuments.getMockDocumentParticipants()
        .find(document => document.id == id);

    res.send({
        success: true,
        participants: mockDocumentParticipants.participants
    })
});


app.post('/')

module.exports = app;