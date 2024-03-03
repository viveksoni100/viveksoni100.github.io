$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'How does Garbage Collection work in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Java has an automated process called Garbage Collector for\n' +
                'Memory Management. It is a daemon in JVM that monitors the\n' +
                'memory usage and performs memory cleanup. Once JVM is low on\n' +
                'memory, GC process finds the unused objects that are not\n' +
                'referenced by other objects. These unused objects are cleaned up by\n' +
                'Garbage Collector daemon in JVM.',
            'incorrectResponse': ''
        },
        {
            'q': 'What are the different types of References in Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': '1. Strong References: When you declare an object reference without any special modifiers,\n' +
                'you\'re creating a strong reference. As long as there is a strong reference pointing to an object,\n' +
                'the garbage collector will not collect it.\n' +
                '2. Weak References: Weak references are references that do not prevent the referenced object from\n' +
                'being garbage collected. In Java, you can create weak references using the\n ' +
                'java.lang.ref.WeakReference class.\n' +
                '3. Soft References: Soft references are similar to weak references, but they are only collected by\n ' +
                'the garbage collector when memory is low. They are created using the java.lang.ref.SoftReference class.\n' +
                '4. Phantom References: Phantom references are the weakest type of reference in Java. They are enqueued\n ' +
                'as soon as the object to which they refer as finalized but not yet reclaimed by the garbage collector.\n ' +
                'They are created using the java.lang.ref.PhantomReference class. Phantom references are often used for\n ' +
                'cleanup tasks or for monitoring when objects are removed from memory.',
            'incorrectResponse': ''
        },
        {
            'q': 'How can we reference an unreferenced object again?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'We can provide implementation in finalize() method to reference and unreferenced object.\n '+
                'For an unreferenced object, finalize() method is called at the time of Garbage Collection. At this time,\n' +
                'Object can pass its reference ‘this’ to finalize() method and revive itself.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is the purpose of the Runtime class?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'The purpose of the Runtime class is to provide access to the Java Runtime system.\n '+
                'This class provides certain important methods like:\n' +
                '1. Runtime.freeMemory() – This method returns the value of free memory in JVM\n' +
                '2. Runtime.maxMemory() - This method returns the value of maximum memory that JVM can use.\n' +
                '3. Runtime.gc() – This method can invoke garbage collection.',
            'incorrectResponse': ''
        },
        {
                'q': 'Why do we use Nested Classes?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'There are following reasons for using nested classes:\n\n' +
                '1.Logical Grouping: We can logically group classes in one place. If one class is useful to only one other\n'+
                'class, then we put smaller class within the larger class and keep them in one file. This kind of nesting\n'+
                '"helper classes" in a top-level class makes the package more streamlined.\n\n' +
                '2.Encapsulation: Nested classes increase encapsulation. Let say there are two top-level classes,\n'+
                'Foo and Bar. Bar needs access to private members of Foo. We can hide class Bar within class Foo.\n'+
                'In this way, private members of Foo can be accessed by class Bar. So class Foo remains encapsulated.\n'+
                'Also, class Bar remains hidden from the outside world.\n\n'+
                '3.Code Clarity: Nested classed make the code more readable and well organized. Only Top-level classes are\n' +
                'exposed. The helper classes are kept hidden and closer the code where it is used by a Top-level class.',
            'incorrectResponse': ''
        }
    ]
});
