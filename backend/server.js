const express = require('express');
const app = express();
const cors = require('cors'); 
const {exec} = require('child_process');
app.use(express.json());

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    methods: ['POST'],
};
app.use(cors(corsOptions));


app.post('/runscript', (req, res) => {
    const words = req.body.words;
    const command =  `gcc -o test-espeak /Users/sarrahrosemikhailleung/Downloads/better_girlfriend/latin_engine/backend/test-espeak.c -L/opt/local/lib -lespeak-ng && ./test-espeak "${words}"`;
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return res.status(500).json({message:'Error executinf script'});
        }
        console.log(stdout);
        res.json({message: 'Script was succesfully executed'})
    });
})


app.listen(8080, () => {
    console.log('Server is listening on port 8080')
})