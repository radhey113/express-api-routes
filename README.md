# Node API Routes
This is an example of express API Routes, It consist simple routes, sending back the same `Request Body` as a `Response' to client side.

# Requirment
- NodeJS v8+
Ref: `http://nodejs.org`
- Chrome Postman Extension

# Run Locally with Node
- Go to project working directory 
    - /Project folder
- Execute command
    - `npm install1`
- After that Run Command
    - `node server.js`
    - Expected output on terminal `Server is running on 4001`
Open http://localhost:4001 to check that your server is running or not.

# Use Routes
- Get
    - `http://localhost:4001/getRequest?name=radhey`
        - Just copy this url and past it on your browser and hit enter 
        - Exprected Output
        -       { name: radhey }
- Post
    - `http://localhost:4001/postRequest`
        - Select POST from the Drop box `Default Request is GET` 
        - Copy and paste it on postman input fiels
        - Select body type RAW and then Select body data as a json.
        - Put dat in body section of post request:
        -       { "height": 10, "width": 20 }
        - Then Hit the request
- Put
    - `http://localhost:4001/putRequest`
        - Same as Post Request
        
- Delete
    - `http://localhost:4001/deleteRequest`
        - Same as Post Request
        
I hope it will help you.
Thank you.
