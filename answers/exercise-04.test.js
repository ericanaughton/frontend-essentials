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

it('should display the turned on supports for students and for if the supports are all turned off show none', () => {
  const turnedOnSupports = studentSupports => {
    return Object.keys(studentSupports).reduce(
      (supportsArr, currentSupport) => {
        if (studentSupports[currentSupport]) {
          return [...supportsArr, supports[currentSupport]];
        }
        return supportsArr;
      },
      []
    );
  };

  const expectedOutput1 = ['Text to Speech', 'Spelling Assistance', 'Spanish'];
  const expectedOutput2 = 'None';

  expect(turnedOnSupports(students[1].supports)).toEqual(expectedOutput1);
  expect(turnedOnSupports(students[2].supports).length === 0 && 'None').toEqual(
    expectedOutput2
  );
});

it('should take an id, and array and return an item that matches it', () => {
  const studentsFullName = (id, arr) => {
    const tempStudent = arr.find(student => student.id === id);
    return `${tempStudent.first_name} ${tempStudent.last_name}`;
  };

  expect(studentsFullName(2, students)).toEqual('Fayre Norrie');
});

const employees = [
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


it('should check whether there are any employyes whose credit card type is maestro', () => {
  expect(
    employees.some(employee => employee.credit_card_type === 'maestro')
  ).toEqual(true);
});
