const getDocumentReferencePage = document => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>POC - Parameterized</title>
    </head>
    
    <body>
        <div class="container-fluid m-3 p-5">
            <h1 class="text-center">Proof of Concept</h1>
            <div class="text-center">
                <a href="https://ckeditor.com/docs/ckeditor5/latest/index.html" class="btn btn-outline-primary">CKEditor
                    5</a>
            </div>
            <div class="row mt-5" style="justify-content: center;">
                <div class="col-xs-12">
                    <a href="./comments.html" disabled class="btn btn-link">Comments</a>
                    <a href="./mention.html" disabled class="btn btn-link">Mention</a>
                    <a href="./parameterized.html" disabled class="btn btn-link">Parameterized</a>
                </div>
            </div>
            <div class="container mt-5 text-center">
                <h2>Document</h2>
                <div class="card border border-secondary mb-3 text-secondary mt-5">
                    <div class="container-fluid">
                        <div class="row border p-2">
                            <div class="border-right border-secondary col-2 text-left"> <b>Name </b></div>
                            <div class="col-10" style="margin-left: 0px;">${document.id} </div>
                        </div>
                        <div class="row border p-2">
                            <div class="border-right border-secondary col-2 text-left"> <b>Technical
                                    Name
                                </b> </div>
                            <div class="col-10">${document.technical_name} </div>
                        </div>
                        <div class="row border p-2">
                            <div class="border-right border-secondary col-2 text-left"><b>Document Id
                                </b>
                            </div>
                            <div class="col-10" style="margin-left: 0px;">${document.document_reference_id} </div>
                        </div>
                        <div class="row border p-2">
                            <div class="border-right border-secondary col-2 text-left"><b>Link </b>
                            </div>
                            <div class="col-10" style="margin-left: 0px;">${document.link} </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    </body>
    </html>
    `
};

module.exports = { getDocumentReferencePage };