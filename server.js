const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors());

const characters = {
    'michael': {
        'name': 'Michael Bluth',
        'occupation': 'Bluth Company CEO',
        'quote': 'I don\'t know what I expected.'
    },
    'gob': {
        'name': 'George Oscar Bluth Jr.',
        'occupation': 'Magician',
        'quote': 'I\'ve made a huge mistake.'
    },
    'lindsay': {
        'name': 'Lindsay Bluth Funke, (Formerly: Nellie)',
        'occupation': 'Activist',
        'quote': 'Michael, it was shoplifting, and I\'m white. I think I\'m going to be ok.'
    },
    'buster': {
        'name': 'Buster Bluth',
        'occupation': 'Army soldier',
        'quote': 'I\'M A MONSTER!!!!'
    },
    'tobias': {
        'name': 'Tobias Funke',
        'occupation': 'Anal-rapist, actor',
        'quote': 'I think I just blue myself.'
    },
    'george': {
        'name': 'George Bluth Sr.',
        'occupation': 'Former CEO of the Bluth Company',
        'quote': 'There\'s always money in the banana stand.'
    },
    'lucille': {
        'name': 'Lucille Bluth',
        'occupation': 'None',
        'quote': 'I mean it\'s one banana, Michael. What could it cost? 10 dollars?'
    },
    'unknown': {
        'name': 'unknown',
        'occupation': 'unknown',
        'quote': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/api/:name', (req, res) => {
    const characterName = req.params.name.toLowerCase();
    if (characters[characterName]) {
        res.json(characters[characterName])
    } else {
        res.json(characters['unknown']);
    }
})

app.listen(process.env.PORT || PORT, (req, res) => {
    console.log(`The server is runnong on ${PORT}.`);
})