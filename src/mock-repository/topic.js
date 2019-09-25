const mockTopics = [
    {
        id: 'e6af2373-b793-45c4-9fb4-98b79a574180',
        document: {
            id: '66c4ab1b-284e-4f5a-b18a-f83101d8ec0a',
            user: '4dfddafe-6f3c-4d34-88e3-4de6d12a40c1'
        },
        data: `<h2> <comment id="d040a086-0e5a-419e-8346-32d11f8dcb5b" type="start"></comment> Bilingual Personality Disorder <comment id="d040a086-0e5a-419e-8346-32d11f8dcb5b" type="end"></comment> </h2> <figure class="image image-style-side"> <img src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg"> <figcaption> One language, one person. </figcaption> </figure> <p> This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth. Even the studies that were conducted almost half a century show that <strong>the language you speak has more effects on you then you realise</strong>. </p><p> One of the very first experiments conducted on this topic dates back to 1964. <a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a> designed by linguist Ervin-Tripp who is an expert in psycholinguistic and sociolinguistic studies, adults who are bilingual in English in French were showed series of pictures and were asked to create 3-minute stories. In the end participants emphasized drastically different dynamics for stories in English and French. </p><p> Another ground-breaking experiment which included bilingual Japanese women married to American men in San Francisco were asked to complete sentences. The goal of the experiment was to investigate whether or not human feelings and thoughts are expressed differently in <strong>different language mindsets</strong>. </p><p> Here is a sample from the the experiment: </p><table> <thead> <tr> <th></th> <th>English</th> <th>Japanese</th> </tr></thead> <tbody> <tr> <td>Real friends should</td><td>Be very frank</td><td>Help each other</td></tr><tr> <td>I will probably become</td><td>A teacher</td><td>A housewife</td></tr><tr> <td>When there is a conflict with family</td><td>I do what I want</td><td>It's a time of great unhappiness</td></tr></tbody> </table> <p> More recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the language a person speaks affects their cognition, behaviour, emotions and hence <strong>their personality</strong>. This shouldn’t come as a surprise <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a> that different regions of the brain become more active depending on the person’s activity at hand. Since structure, information and especially <strong>the culture</strong> of languages varies substantially and the language a person speaks is an essential element of daily life. </p>`,
        commentThreads: [
            {
                threadId: 'd040a086-0e5a-419e-8346-32d11f8dcb5b',
                comments: [
                    {
                        commentId: '2c1b715e-ef41-431e-adb5-057b4f0a32f1',
                        authorId: '4dfddafe-6f3c-4d34-88e3-4de6d12a40c1',
                        author: {
                            id: '4dfddafe-6f3c-4d34-88e3-4de6d12a40c1',
                            name: 'Suellen Santos',
                            email: 'suellen.mock@mock.com'
                        },
                        content: '<p>Esse título está correto?</p>',
                        createdAt: new Date('09/20/2019 14:21:53')
                    },
                    {
                        commentId: '00dcb873-e05c-4a8e-96d7-fe632b1d10f4',
                        authorId: '20209ccc-ffbc-4db2-a280-4a7b8977e36c',
                        author: {
                            id: '20209ccc-ffbc-4db2-a280-4a7b8977e36c',
                            name: 'Bruno Baumgarten',
                            email: 'bruno.mock@mock.com'
                        },
                        content: '<p>Está correto!</p>',
                        createdAt: new Date('09/21/2019 08:17:01')
                    }
                ]
            }]
    }
];

const getMockTopics = () => {
    return mockTopics;
};

const addTopic = (topic) => {
    mockTopics.push(topic);
};

module.exports = { getMockTopics, addTopic };
