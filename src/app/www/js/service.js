async function emailService(email) {
    $.ajax({
        url: "https://poc-radix.herokuapp.com/email/notify",
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(email),
        method: "POST"
    });
};

async function addCommentService(comment) {
    $.ajax({
        url: `https://poc-radix.herokuapp.com/documents/${comment.doc}/threads/${comment.threadId}/comments`,
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(comment),
        method: "POST"
    });
};

async function getParticipantsFromDocument(documentId) {
    const data = await $.get(
        `https://poc-radix.herokuapp.com/documents/${documentId}/participants`
    );
    return data.participants;
}

async function getTopicFromDocument(documentId, topicId) {
    const data = await $.get(
        `https://poc-radix.herokuapp.com/documents/${documentId}/topics/${topicId}`
    );
    return data.topic;
}

async function getAllReferences() {
    const data = await $.get("https://poc-radix.herokuapp.com/references");
    return data.references;
}

async function updateTopicData(topic) {
    const data = await $.ajax({
        url: `https://poc-radix.herokuapp.com/topics/${topic.id}`,
        dataType: "JSON",
        contentType: "application/json",
        data: JSON.stringify(topic),
        method: "PUT"
    });

    return data;
};

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