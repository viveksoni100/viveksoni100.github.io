$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What is the difference between\n' +
                'abstract class and interface in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': '1. An abstract class can have implemented methods with\n' +
                'body (non-abstract methods). Interface has only abstract\n' +
                'methods. From Java 8 onwards, interface can have\n' +
                'static/default methods in implemented form.\n' +
                '2. An abstract class can have instance member variables. An\n' +
                'interface cannot have instance variables. It can only have\n' +
                'constants.\n' +
                '3. An abstract class can have a constructor. Interface cannot\n' +
                'have constructor. It has to be implemented by another\n' +
                'class.\n' +
                '4. A class can extend only one abstract class. A class can\n' +
                'implement more than one interface.',
            'incorrectResponse': ''
        },
        {
            'q': 'How can we cast to an object\n' +
                'reference to an interface reference?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'An Object that implements an Interface can be cast to the same\n' +
                'Interface. Since An Object implementing an Interface already\n' +
                'provides implementation for the methods of that Interface, it is\n' +
                'allowed to do so as per the rules of Inheritance.',
            'incorrectResponse': ''
        },
        {
            'q': 'How can you change the value of a\n' +
                'final variable in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Java does not allow changing the value of a final variable. Once the\n' +
                'value is set, it cannot be changed.' +
                'E.g. Serializable, Cloneable, Remote etc.',
            'incorrectResponse': ''
        },
        {
            'q': 'Why Integer class in final in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Integer class is a wrapper for int. If it is not marked final, then any\n' +
                'other class can extend it and modify the behavior of Integer\n' +
                'operations. To avoid this Integer wrapper class is marked as final.',
            'incorrectResponse': ''
        },
        {
                'q': 'What is a static import in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Static import is similar to normal import declaration. Normal\n' +
                'import allows us to import classes from packages without using\n' +
                'package qualifier. Static import allows us to import static members\n' +
                'from a class without using class qualifier.',
            'incorrectResponse': ''
        }
    ]
});
