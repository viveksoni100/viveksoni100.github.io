$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What is the difference between Nested class and an Inner class in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'An Inner class in Java is non-static class. It is a type of Nested class that is defined in another\n' +
                'class but not qualified with a Static modifier. A Nested class is also a class can be Static Nested\n' +
                'class or a non-Static Inner class.\n\n' +
                'An Inner class has access to other members of the enclosing class, even if they are declared private.\n' +
                'A Static Nested class can not access the other members of the enclosing class.',
            'incorrectResponse': ''
        },
        {
            'q': 'How many objects does following code create?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'The above code creates two objects. One object is created in String constant pool and the other is\n' +
                'created on the heap in non-pool area.',
            'incorrectResponse': ''
        },
        {
            'q': 'Why Java uses String literal concept?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Java uses String literal concept to make Java more efficient in memory. If same String already exists\n' +
                'in String constant pool, it can be reused. This saves memory usage.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is the difference between throw and throws in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Java provides throw keyword to throw an exception from a method or a static block. Java provides throws\n' +
                'keyword to mention the probable exception thrown by a method in its declaration.\n\n' +
                'We use throw to explicitly throw an exception. We used throws to declare an exception in method definition.\n\n' +
                'We cannot propagate checked exceptions with throw only. But checked exceptions can be propagated with\n' +
                'throws keyword. A throw call is followed by an instance. Class or Exception follows a throws keyword.\n\n' +
                'Call to throw occurs within a method. throws is just used with method signature.\n\n' +
                'We can throw only one exception at a time. But we can mention as many exceptions in throws clause.',
            'incorrectResponse': ''
        },
        {
                'q': 'What is the concept of Exception Propagation?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'In Exception Propagation, uncaught exceptions are propagated in the call stack until stack becomes empty.\n' +
                'This propagation is called Exception Propagation.\n\n' +
                'Let say an exception propagates from one method to another method. A() calls B(), which calls C(), which\n' +
                'calls D(). And if D() throws an exception, the exception will propagate from D to C to B to A, unless one\n' +
                'of the methods catches the exception.',
            'incorrectResponse': ''
        }
    ]
});
