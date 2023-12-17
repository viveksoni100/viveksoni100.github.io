$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'Why it is not possible to do method overloading by changing\n' +
                'return type of method in java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'If we change the return type of overloaded methods then it will lead\n' +
                'to ambiguous behavior. How will clients know which method will\n' +
                'return what type. Due to this different return type are not allowed in\n' +
                'overloaded methods.',
            'incorrectResponse': ''
        },
        {
            'q': 'Are we allowed to override a static method in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'No. Java does not allow overriding a static method. If you create a\n' +
                'static method with same name in subclass, then it is a new method,\n' +
                'not an overridden method.\n' +
                'To override a method, you need an instance of a class. Static method\n' +
                'is not associated with any instance of the class. So the concept of\n' +
                'overriding does not apply here.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is the difference between method overloading and method\n' +
                'overriding in Java?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': '1. Method overloading is static polymorphism. Method\n' +
                'overriding is runtime polymorphism.\n' +
                '2. Method overloading occurs within the same class. Method\n' +
                'overriding happens in two classes with hierarchy\n' +
                'relationship.\n' +
                '3. Parameters must be different in method overloading.\n' +
                'Parameters must be same in method overriding.\n' +
                '4. Method overloading is a compile time concept. Method\n' +
                'overriding is a runtime concept.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is Runtime Polymorphism?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Runtime Polymorphism or Dynamic Polymorphism is the\n' +
                'polymorphism that exists at runtime. In case of method overriding it\n' +
                'is not known which method will be called at runtime. Based on the\n' +
                'type of object, JVM decides the exact method that should be called.\n' +
                'So at compile time it is not known which method will be called at\n' +
                'run time.',
            'incorrectResponse': ''
        },
        {
            'q': 'Explain the difference between static and dynamic binding?\n',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'In Static binding references are resolved at compile time. In\n' +
                'Dynamic binding references are resolved at Run time.\n\n' +
                'E.g.\n' +
                'Person p = new Person();\n' +
                'p.walk(); // Java compiler resolves this binding at compile time.\n\n' +
                'public void walk(Object o){\n' +
                '((Person) o).walk(); // this is dynamic binding.\n' +
                '}',
            'incorrectResponse': ''
        }
    ]
});
