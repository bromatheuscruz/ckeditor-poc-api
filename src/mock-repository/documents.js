const getMockDocumentParticipants = () => {
    return [
        {
            // mention
            id: '4efe54cc-fdeb-43b5-81ab-17f440eccfb9',
            participants: [
                {
                    id: '4dfddafe-6f3c-4d34-88e3-4de6d12a40c1',
                    name: 'Suellen Santos',
                    email: 'suellen.mock@mock.com'
                },
                {
                    id: '20209ccc-ffbc-4db2-a280-4a7b8977e36c',
                    name: 'Bruno Baumgarten',
                    email: 'bruno.mock@mock.com'
                }
            ]
        },
        {
            // comment
            id: 'f0621058-714a-4bf8-a8d7-922c88f4b20f',
            participants: [
                {
                    id: '4dfddafe-6f3c-4d34-88e3-4de6d12a40c1',
                    name: 'Suellen Santos',
                    email: 'suellen.mock@mock.com'
                },
                {
                    id: '20209ccc-ffbc-4db2-a280-4a7b8977e36c',
                    name: 'Bruno Baumgarten',
                    email: 'bruno.mock@mock.com'
                }
            ]
        }
    ];
}

module.exports = {
    getMockDocumentParticipants
};