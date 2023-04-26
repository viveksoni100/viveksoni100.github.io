$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'In OOPS, what is meant by composition?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'In object-oriented programming (OOP), composition is a design pattern\n' +
             'where a class is made up of one or more instances of other classes.\n'+
             'It is a way to create complex objects by combining simpler objects,\n'+
             'rather than inheriting all of their properties and methods from\n'+
             'a single parent class.\n\n'+

             'For example, consider a car object that is composed of an engine object,\n'+
             'a wheel object, and a chassis object. Each of these components can be\n'+
             'implemented as a separate class. The car class would have properties\n'+
             'and methods that interact with these component objects to provide functionality\n'+
             'such as accelerating, braking, and steering.\n\n'+

             'Another example could be a computer system that is composed of various\n'+
             'components such as a CPU, RAM, hard drive, motherboard, etc. Each of these\n'+
             'components can be implemented as a separate class, and the computer class\n'+
             'would be composed of these component objects.\n\n'+

             'Composition is often used in OOP to create modular and reusable code,\n'+
             'as it allows for a more flexible and dynamic approach to designing objects.\n'+
             'By separating functionality into smaller, more specialized classes,\n'+
             'it becomes easier to modify or extend the behavior of the larger composite\n'+
             'class without affecting the other components.',
            'incorrectResponse': ''
        },
        {
            'q': 'How aggregation and composition are different concepts?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'In OOPS, Aggregation and Composition are the types of association\n' +
                'relations. A composition is a strong relationship. If the composite\n' +
                'object is destroyed, then all its parts are destroyed. E.g. A Car has a\n' +
                'Steering Wheel. If Car object is destroyed, then there is no meaning\n' +
                'of Steering Wheel.\n\n' +
                'In Aggregation, the relationship is weaker than Composition.\n\n' +
                'E.g. A Library has students. If a Library is destroyed, Students still\n' +
                'exist. So Library and Student are related by Aggregation. A Library\n' +
                'has Books. If Library is destroyed, the Books are also destroyed.\n' +
                'Books of a Library cannot exist without the Library. So Book and\n' +
                'Library are related by Composition.',
            'incorrectResponse': ''
        },
        {
            'q': 'Is it possible to use this() and\n' +
                'super() both in same constructor?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'No, Java does not allow using both super() and this() in same\n' +
                'constructor. As per Java specification, super() or this() must be the\n' +
                'first statement in a constructor.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is the meaning of object cloning in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Object.clone() method is used for creating an exact copy of the\n' +
                'object in Java. It acts like a copy constructor. It creates and returns\n' +
                'a copy of the object, with the same class and with all the fields\n' +
                'having same values as of the original object.\n\n' +
                'One disadvantage of cloning is that the return type is an Object. It\n' +
                'has to be explicitly cast to actual type.',
            'incorrectResponse': ''
        },
        {
            'q': 'Why it is not a good practice to\n' +
                'create static variables in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Static variables are common to all the objects of a class. If a new\n' +
                'object is created, there is no need to test the value of static variable.\n' +
                'Any code that uses static variable can be in any state. It can be\n' +
                'within a new object or at a class level. So the scope of static\n' +
                'variable is open ended in a Java class.\n\n' +
                'If we want tighter control on scope, then variables should be\n' +
                'created at the object creation level.\n\n' +
                'Also defining static variables is not a good practice because they go\n' +
                'against the principles of Object Oriented Programming.',
            'incorrectResponse': ''
        }
    ]
});
