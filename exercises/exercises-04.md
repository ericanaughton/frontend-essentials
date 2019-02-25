```js
const supports = {
  textToSpeech: 'Text to Speech',
  contentClarifiers: 'Content Clarifiers',
  spellingAssistance: 'Spelling Assistance',
  spanish: 'Spanish'
};

const students = [
  {
    id: 1,
    first_name: 'Daniel',
    last_name: 'Pottell',
    supports: {
      textToSpeech: true,
      contentClarifiers: true,
      spellingAssistance: false,
      spanish: true
    }
  },
  {
    id: 2,
    first_name: 'Fayre',
    last_name: 'Norrie',
    supports: {
      textToSpeech: true,
      contentClarifiers: false,
      spellingAssistance: true,
      spanish: true
    }
  },
  {
    id: 3,
    first_name: 'Alvie',
    last_name: 'Gorusso',
    supports: {
      textToSpeech: false,
      contentClarifiers: false,
      spellingAssistance: false,
      spanish: false
    }
  },
  {
    id: 4,
    first_name: 'Lisha',
    last_name: 'Bownes',
    supports: {
      textToSpeech: true,
      contentClarifiers: true,
      spellingAssistance: false,
      spanish: true
    }
  },
  {
    id: 5,
    first_name: 'Fayette',
    last_name: 'Doctor',
    supports: {
      textToSpeech: false,
      contentClarifiers: false,
      spellingAssistance: false,
      spanish: false
    }
  }
];
```

1. For the given data set below,write a function which returns an array
   of supports that has been turned for the student. if the student have no supports turned on return
   'none'.

```js
const turnedOnSupports = studentSupports => {
  //your code
  // if the supports are turned on
  // return ['Content Clarifiers', 'Spanish' ]
  //else
  //return 'None'
};
ex: turnedOnSupports(students[1].supports); // [ 'Text to Speech','Content Clarifiers','Spanish']
```

2. Write a function which will take an array and an id. For the given id return the student's full name

```js
const studentsFullName = (id, arr) => {
  //your code
  //  return John Smith
};

ex: studentsFullName(2, students); // Fayre Norrie
```

3. For the given data set below check whether there are any employees whose credit card type is maestro

```js
const employyes = [
  {
    id: 1,
    first_name: 'Karoline',
    last_name: 'McWaters',
    gender: 'Female',
    credit_card_type: 'jcb'
  },
  {
    id: 2,
    first_name: 'Fields',
    last_name: 'Nadin',
    gender: 'Male',
    credit_card_type: 'jcb'
  },
  {
    id: 3,
    first_name: 'Hillyer',
    last_name: 'Sawley',
    gender: 'Male',
    credit_card_type: 'jcb'
  },
  {
    id: 4,
    first_name: 'Avictor',
    last_name: 'Baber',
    gender: 'Male',
    credit_card_type: 'jcb'
  },
  {
    id: 5,
    first_name: 'Kelly',
    last_name: 'Le Clercq',
    gender: 'Male',
    credit_card_type: 'maestro'
  }
];
```

4. From the movie data set find a movie which will air on 12/12/2019 and after 2.00pm. Return the theater address for that movie
5. For the movie data set array check whether there is any movie that shows on 3/20/2019

```js
[
  {
    id: 1,
    movie: 'Slap Shot',
    date: '4/7/2019',
    time: '8:37 PM',
    address: '37 Kropf Junction'
  },
  {
    id: 2,
    movie: 'Carson City',
    date: '12/12/2019',
    time: '2:37 PM',
    address: '2 Ridgeview Point'
  },
  {
    id: 3,
    movie: 'Soldier of Fortune',
    date: '9/30/2019',
    time: '8:45 PM',
    address: '518 American Point'
  },
  {
    id: 4,
    movie: 'Children of Heaven, The (Bacheha-Ye Aseman)',
    date: '2/8/2019',
    time: '8:37 PM',
    address: '6354 Hooker Hill'
  },
  {
    id: 5,
    movie: 'Perfect Human, The (Perfekte Menneske, Det)',
    date: '3/20/2019',
    time: '3:32 PM',
    address: '07223 Eastwood Plaza'
  }
];
```
