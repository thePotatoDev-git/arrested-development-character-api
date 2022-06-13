const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors());

const characters = {
    'michael bluth': {
        'name': 'Michael Bluth',
        'occupation': 'Bluth Company CEO',
        'quote': 'I don\'t know what I expected.'
    },
    'gob bluth': {
        'name': 'George Oscar Bluth Jr.',
        'occupation': 'Magician',
        'quote': 'I\'ve made a huge mistake.'
    },
    'lindsay bluth': {
        'name': 'Lindsay Bluth Funke, (Formerly: Nellie)',
        'occupation': 'Activist',
        'quote': 'Michael, it was shoplifting, and I\'m white. I think I\'m going to be ok.'
    },
    'buster bluth': {
        'name': 'Buster Bluth',
        'occupation': 'Army soldier',
        'quote': 'I\'M A MONSTER!!!!'
    },
    'tobias funke': {
        'name': 'Tobias Funke',
        'occupation': 'Anal-rapist, actor',
        'quote': 'I just blue myself.'
    },
    'george bluth': {
        'name': 'George Bluth Sr.',
        'occupation': 'Former CEO of the Bluth Company',
        'quote': 'There\'s always money in the banana stand.'
    },
    'lucille bluth': {
        'name': 'Lucille Bluth',
        'occupation': 'None',
        'quote': 'I mean it\'s one banana, Michael. What could it cost? 10 dollars?'
    },
    'george michael bluth': {
        'name': 'George Michael Bluth',
        'occupation': 'Banana Stand worker',
        'quote': "Okay, it was for me. Yea. I was gonna smoke the marijuana like a cigarette."
    },
    'maeby funke': {
        'name': 'Maeby Funke',
        'occupation': 'Accidental Studio Executive',
        'quote': "Marry me!"
    },
    'barry zuckerkorn': {
        'name': 'Barry Zuckerkorn',
        'occupation': 'Lawyer',
        'quote': 'Those are balls.'
    },
    'lucille austero': {
        'name': 'Lucille Austero, Lucille Two',
        'occupation': 'Wealthy widow',
        'quote': 'Excuse me, but I thought my AARP was good for one and a guest.'
    },
    'ann veal': {
        'name': 'Ann Veal, Egg, Plant, Bland, Her?',
        'occupation': 'High schoool student',
        'quote': 'You must teach me, George Michael. You must teach me the ways of the secular flesh.'
    },
    'tony wonder': {
        'name': 'Tony Wonder',
        'occupation': 'Magician',
        'quote': 'Did somebody say Wonder?'
    },
    'steve holt': {
        'name': 'Steve Holt',
        'occupation': 'High school student',
        'quote': 'Steve Holt!'
    },
    'annyong bluth': {
        'name': 'Annyong Bluth, Hello',
        'occupation': 'High school student',
        'quote': 'Annyong.'
    },
    'unknown': {
        'name': 'unknown',
        'occupation': 'unknown',
        'quote': 'unknown'
    }
}

// API search 
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}.`);
})