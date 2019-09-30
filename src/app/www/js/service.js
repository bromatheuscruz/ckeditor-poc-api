async function emailService(email) {
    $.ajax({
        url: "http://localhost:3000/email/notify",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(email),
        method: "POST"
    });
};

async function addCommentService(comment) {
    $.ajax({
        url: `http://localhost:3000/documents/${comment.doc}/threads/${comment.threadId}/comments`,
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(comment),
        method: "POST"
    });
};

async function getParticipantsFromDocument(documentId) {
    const data = await $.get(
        `http://localhost:3000/documents/${documentId}/participants`
    );
    return data.participants;
}

async function getTopicFromDocument(documentId, topicId) {
    const data = await $.get(
        `http://localhost:3000/documents/${documentId}/topics/${topicId}`
    );
    return data.topic;
}

async function getAllReferences() {
    const data = await $.get("http://localhost:3000/references");
    return data.references;
}

async function updateTopicData(topic) {
    const data = await $.ajax({
        url: `http://localhost:3000/topics/${topic.id}`,
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(topic),
        method: "PUT"
    });

    return data;
};

async function deleteComment(comment) {
    const data = await $.ajax({
        url: `http://localhost:3000/documents/66c4ab1b-284e-4f5a-b18a-f83101d8ec0a/threads/${comment.threadId}/comments/${comment.commentId}`,
        method: "DELETE"
    })
    return data;
}

async function updateComment(comment) {
    const data = await $.ajax({
        url: `http://localhost:3000/documents/66c4ab1b-284e-4f5a-b18a-f83101d8ec0a/threads/${comment.threadId}/comments/${comment.commentId}`,
        method: "PUT",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(comment),
        method: "PUT"
    });
    return data;
}

function addBackupData(key, value) {
    localStorage.setItem(key, value);
}

function getBackupData(key) {
    return localStorage.getItem(key);
}

function ReferencesController() {
    let references = [];
    return {
        getAll: () => {
            return references;
        },
        getLenght: () => {
            return references.length;
        },
        add: (reference) => {
            if (!references.find(ref => ref == reference)) {
                references.push(reference);
            }
        },
        getReference: (reference) => references.find(ref => ref == reference),
        alreadyExists: (reference) => {
            return !!references.find(ref => ref == reference);
        },
        removeAll: () => {
            references = [];
        }
    }
}