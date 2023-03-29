$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What is the difference between\n' +
                'JDK and JRE?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'JDK stands for Java Development Kit. It contains the tools and\n' +
                'libraries for development of Java programs. It also contains\n' +
                'compilers and debuggers needed to compile Java program,\n' +
                'JRE stands for Java Runtime Environment. This is included in JDK.\n' +
                'JRE provides libraries and JVM that is required to run a Java\n' +
                'program.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is Java Virtual Machine (JVM)?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Java Virtual Machine (JVM) is an abstract machine that executes\n' +
                'Java Bytecode. There are different JVM for different hardware and\n' +
                'software platforms. So JVM is platform dependent. JVM is\n' +
                'responsible for loading, verifying and executing the Bytecode on a\n' +
                'platform.',
            'incorrectResponse': ''
        },
        {
            'q': 'What are the different types of\n' +
                'memory areas allocated by JVM?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'In java, JVM allocates memory to different processes, methods and\n' +
                'objects. Some of the memory areas allocated by JVM are:\n' +
                '1. ClassLoader: It is a component of JVM used to load class\n' +
                'files.\n' +
                '2. Class (Method) Area: It stores per-class structures such as\n' +
                'the runtime constant pool, field and method data, and the\n' +
                'code for methods.\n' +
                '3. Heap: Heap is created a runtime and it contains the runtime\n' +
                'data area in which objects are allocated.\n' +
                '4. Stack: Stack stores local variables and partial results at\n' +
                'runtime. It also helps in method invocation and return\n' +
                'value. Each thread creates a private JVM stack at the time\n' +
                'of thread creation.\n' +
                '5. Program Counter Register: This memory area contains the\n' +
                'address of the Java virtual machine instruction that is\n' +
                'currently being executed.\n' +
                '6. Native Method Stack: This area is reserved for all the\n' +
                'native methods used in the application.',
            'incorrectResponse': ''
        },
        {
            'q': 'What is JIT compiler?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'Just In Time compiler also known as JIT compiler is used for\n' +
                'performance improvement in Java. It is enabled by default. It is\n' +
                'compilation done at execution time rather earlier.\n' +
                'Java has popularized the use of JIT compiler by including it in\n' +
                'JVM.',
            'incorrectResponse': ''
        },
        {
            'q': 'How does ClassLoader work in\n' +
                'Java?',
            'options': [
                'Show answer'
            ],
            'correctIndex': 0,
            'correctResponse': 'In Java, ClassLoader is a class that is used to load files in JVM.\n' +
                'ClassLoader loads files from their physical file locations e.g.\n' +
                'Filesystem, Network location etc.\n' +
                'There are three main types of ClassLoaders in Java.\n' +
                '1. Bootstrap ClassLoader: This is the first ClassLoader. It\n' +
                'loads classes from rt.jar file.\n' +
                '2. Extension ClassLoader: It loads class files from jre/lib/ext\n' +
                'location.\n' +
                '3. Application ClassLoader: This ClassLoader depends on\n' +
                'CLASSPATH to find the location of class files. If you\n' +
                'specify your jars in CLASSPATH, then this ClassLoader\n' +
                'will load them.',
            'incorrectResponse': ''
        }
    ]
});