$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'Why do we need constructor in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Java is an object-oriented language, in which we create and use\n' +
                'objects. A constructor is a piece of code similar to a method. It is\n' +
                'used to create an object and set the initial state of the object.\n\n' +
                'A constructor is a special function that has same name as class name.\n\n' +
                'Without a constructor, there is no other way to create an object.\n\n' +
                'By default, Java provides a default constructor for every object. If\n' +
                'we overload a constructor then we have to implement default constructor.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is the value returned by Constructor in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'When we call a constructor in Java, it returns the object created by\n' +
                'it. That is how we create new objects in Java.',
            'incorrectResponse': ''
        },
        {
            'q': 'Can we inherit a Constructor?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'No, Java does not support inheritance of constructor.',
            'incorrectResponse': ''
        },
        {
            'q': 'Why constructors cannot be final, static, or abstract in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'If we set a method as final it means we do not want any class to\n' +
                'override it. But the constructor (as per Java Language\n' +
                'Specification) cannot be overridden. So there is no use of marking it final.\n\n' +
                'If we set a method as abstract it means that it has no body and it\n' +
                'should be implemented in a child class. But the constructor is called\n' +
                'implicitly when the new keyword is used. Therefore it needs a body.\n\n' +
                'If we set a method as static it means that it belongs to the class, but\n' +
                'not a particular object. The constructor is always called to initialize\n' +
                'an object. Therefore, there is no use of marking constructor static.\n\n',
            'incorrectResponse': ''
        },
        {
            'q': 'Why Java does not support multiple inheritance?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Multiple Inheritance means that a class can inherit behavior from\n' +
                'two or more parent classes.\n\n' +
                'The issue with Multiple Inheritance is that both the parent classes\n' +
                'may have different implementation for the same method. So they\n' +
                'have different ways of doing the same thing. Now which\n' +
                'implementation should the child class choose?\n\n' +
                'This leads to ambiguity in Multiple Inheritance. This is the main\n' +
                'reason for Java not supporting Multiple Inheritance in\n' +
                'implementation.\n\n' +
                'Lets say you have a class TV and another class AtomBomb. Both\n' +
                'have method switchOn() but only TV has switchOff() method. If\n' +
                'your class inherits from both these classes then you have an issue\n' +
                'that you can switchOn() both parents, but switchOff will only\n' +
                'switchOff() TV.\n\n' +
                'But you can implement multiple interfaces in Java.\n',
            'incorrectResponse': ''
        }
    ]
});