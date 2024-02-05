$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What is the purpose of serialization?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': '1. Communication: It is used for transmitting an object over\n' +
                'network between two machines.\n' +
                '2. Persistence: We can store the object’s state in a database\n' +
                'and retrieve it from database later on.\n' +
                '3. Caching: Serialization can be used for caching to improve\n' +
                'performance. We may need 10 minutes to build an object,\n' +
                'but it may take just 10 seconds to de-serialize the object.\n' +
                '4. Cross JVM Synchronization: It can be used in same way\n' +
                'across multiple JVM that follow different architecture.',
            'incorrectResponse': ''
        },
        {
            'q': 'Why do we mark a data member transient?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Member variables of an object are marked transient to indicate that\n' +
                'they should not be serialized.' +
                'During serialization process the transient variables are not\n' +
                'considered part of the persistent state of an object.',
            'incorrectResponse': ''
        },
        {
            'q': 'Is it allowed to mark a method as transient?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'No, Java does not allow marking a method as transient. The\n' +
                'transient keyword is valid only for member variables.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is Reflection in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Reflection is Java language\'s ability to inspect and dynamically call\n' +
                'classes, methods, attributes etc. at Runtime. It helps in examining or\n' +
                'modifying the Runtime behavior of a class at Runtime.',
            'incorrectResponse': ''
        },
        {
                'q': 'How can we create an Object\n' +
                    'dynamically at Runtime in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'We can use Reflection to create an Object dynamically at Runtime\n' +
                'in Java. We can use Class.newInstance() or Constructor.newInstance()\n' +
                'methods for creating such Objects from a class without using class qualifier.',
            'incorrectResponse': ''
        }
    ]
});
