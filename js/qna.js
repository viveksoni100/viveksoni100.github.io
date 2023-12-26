$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What is an abstract class in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'An abstract class in Java has one or more abstract methods. An\n' +
                'abstract method is just declared in the abstract class, but it is not\n' +
                'implemented.\n\n' +
                'An abstract class has to be extended in Java and its abstract\n' +
                'methods have to be implemented by a child class. Also Java does\n' +
                'not allow new instance of Abstract class.\nn' +
                'You cannot create an instance of an abstract class in Java because abstract classes are not meant to be instantiated. They are designed to be extended by subclasses that provide implementations for the abstract methods. Abstract classes define a common interface and behavior for a group of related classes, but they do not provide a complete implementation.',
            'incorrectResponse': ''
        },
        {
            'q': 'Is it allowed to mark an interface method as static?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Yes, from Java 8 onwards, we can define static and default methods\n' +
                'in an interface. Prior to Java 8, it was not allowed.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is a marker interface?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'There are interfaces that do not have any data member or methods.\n' +
                'These interfaces are called Marker interface.\n' +
                'E.g. Serializable, Cloneable, Remote etc.',
            'incorrectResponse': ''
        },
        {
            'q': 'What can we use instead of Marker interface?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'We can use annotations instead of Marker interface.',
            'incorrectResponse': ''
        },
        {
            'q': 'How Annotations are better than Marker Interfaces?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Annotations serve the purpose of conveying metadata about the\n' +
                'class to its consumers without creating a separate type for it.\n' +
                'Annotations are more powerful than a Marker interface. They allow\n' +
                'programmers to pass more sophisticated information to classes that\n' +
                '"consume" it.',
            'incorrectResponse': ''
        }
    ]
});
