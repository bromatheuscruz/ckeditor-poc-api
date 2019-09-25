const getMockDocumentParticipants = () => {
    return [
        {
            id: '66c4ab1b-284e-4f5a-b18a-f83101d8ec0a',
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