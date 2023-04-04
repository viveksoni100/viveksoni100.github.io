$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'Can we write main method as public void static instead of\n'+'public static void?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'No, you cannot write it like this. Any method has to first specify the\n' +
                'modifiers and then the return value. The order of modifiers can\n' +
                'change.\n\n' +
                'We can write static public void main() instead of public static void main().',
            'incorrectResponse': ''
        },
        {
            'q': 'In Java, if we do not specify any value for local variables,\n'+
                'then what will be the default value of the local variables?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Java does not initialize local variables with any default value. So\n' +
                'these variables will be just null by default.',
            'incorrectResponse': ''
        },
        {
            'q': 'Let say, we run a java class without passing any arguments.\n'+
                'What will be the value of String array of arguments in Main method?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'By default, the value of String array of arguments is empty in Java.\n' +
                'It is not null.',
            'incorrectResponse': ''
        },
        {
            'q': 'Explain Abstraction and Encapsulation in OOP',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Abstraction in OOP is the process of hiding complex implementation details while showing only\n'+
                'the essential features to the user. For example, when driving a car, we don\'t need to know how\n'+
                'the engine works or how the transmission shifts gears. We only need to know how to operate the\n'+
                'steering wheel, pedals, and gear shift to control the car. Similarly, in OOP, we can define a class\n'+
                'with public methods that expose only the necessary functionality to the user, while the internal\n'+
                'details of how those methods work remain hidden. This makes the code more manageable, easier \n'+
                'to understand, and less prone to errors.\n\n' +
                'Encapsulation in OOP refers to the practice of bundling data and methods that operate on that data within\n'+
                'a single unit or class, and restricting access to the data from outside that unit. For example,\n'+
                'a bank account object may have private variables for balance and account number, with public methods\n'+
                'to deposit, withdraw, and check balance. By encapsulating the data and methods within the\n'+
                'account object, we can prevent external code from modifying the balance directly and ensure that\n'+
                'all updates to the balance are done through the defined methods. This helps to prevent bugs and\n'+
                'maintain data integrity.',
            'incorrectResponse': ''
        },
        {
            'q': 'Explain Inheritance and Polymorphism',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Inheritance in OOP is the ability to create new classes based on existing ones, inheriting\n'+
                'their properties and behavior. For example, a car class can inherit properties and methods from\n'+
                'a vehicle class, such as the number of wheels, fuel type, and speed. The car class can also\n'+
                'define its own unique properties and methods, such as the number of seats and the ability to\n'+
                'play music. This allows for code reuse, as the common properties and behavior are defined in\n'+
                'the parent class, while the specific features are defined in the child class. This makes\n'+
                'the code more modular and easier to maintain.\n\n'+
                'Polymorphism in OOP refers to the ability of objects of different classes to be treated as if\n'+
                'they are the same type, through the use of common interfaces or inheritance. For example,\n'+
                'a music player class can have a play() method that can be called on different types of music files,\n'+
                'such as MP3 or WAV, through polymorphism. Each file type may have its own play method, but as\n'+
                'long as they implement the same interface or inherit from the same parent class, they can be\n'+
                'treated as interchangeable. This allows for more flexibility and extensibility in the code,\n'+
                'as new file types can be added without changing the existing code.',
            'incorrectResponse': ''
        }
    ]
});