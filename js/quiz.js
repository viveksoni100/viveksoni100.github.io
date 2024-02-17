$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'Which statement about static interface methods are correct?',
            'options': [
                'A.A static interface method can be final',
                'B.A static interface method can be declared private',
                'C.A static interface method can be package-private',
                'D.A static interface method can be declared protected'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': 'B. Option A is incorrect as methods cannot be marked final within an interface.\n' +
                'Interfaces support static methods that are marked public or private, making option B correct.'
        },
        {
            'q': 'Fill in the blanks with the only option that makes this statement false:\n' +
                'A(n) _______ can access _______ of the enclosing class in which it is defined.',
            'options': [
                'A.static nested class, static members',
                'B.static nested class, instance members',
                'C.member inner class, static members',
                'D.member inner class, instance members',
                'E.local class, instance members from within an instance method',
                'F.anonymous class, instance members from within an instance method'
            ],
            'correctIndex': 1,
            'correctResponse': 'Good ✅',
            'incorrectResponse': 'A static nested class cannot access instance members of the enclosing class, \n' +
                'making option B correct. The rest of the options form true statements.'
        },
        {
            'q': 'What is the result of executing the following program?\n\n' +
            'public class Canine {\n' +
            '\tpublic String woof(int bark) {\n' +
            '\t\treturn "1"+bark.toString();\n'+
            '\t}\n\n' +
            '\tpublic String woof(Integer bark) {\n' +
            '\t\treturn "2"+bark.toString();\n' +
            '\t}\n\n' +
            '\tpublic String woof(Object bark) {\n' +
            '\t\treturn "3"+bark.toString();\n' +
            '\t}\n\n' +
            '\tpublic static void main(String[] a) {\n' +
            '\t\tSystem.out.println(woof((short)5));\n' +
            '\t}\n' +
            '}',
            'options': [
                'A.15',
                'B.25',
                'C.35',
                'D.One line does not compile',
                'E.Two lines do not compile',
                'F.The program compiles but throws an exception at runtime.'
            ],
            'correctIndex': 4,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': 'E. The first woof() method does not compile because bark is a primitive, not an object,\n' +
                'and does not have a toString() method. The main() method also does not com-\n' +
                'pile because it is static and all of the woof() methods require an instance of Canine.\n' +
                'Since these two lines do not compile, option E is the correct answer. If the toString()\n' +
                'was removed from the first method and all of the methods were marked static, then the\n' +
                'program would print 15 at runtime.'
        },
        {
            'q': 'What statement best describes the notion of effectively final in Java?',
            'options': [
                'A.A local variable that is marked final',
                'B.A static variable that is marked final',
                'C.A local variable whose primitive value or object reference does not changes after it is initialized',
                'D.A local variable whose primitive value or object reference does not change after\n'
                + 'a certain point in the method',
                'E.None of te above'
            ],
            'correctIndex': 2,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': 'C. A local variable is effectively final when its primitive value or object reference does not\n' +
                'change after it is initialized, making option C the correct answer. Note that option D is incor-\n' +
                'rect because any change to the variable after it is initialized disqualifies it for being consid-\n' +
                'ered effectively final.'
        },
        {
            'q': 'What is the output of the Turnip class?\n\n' +
                'package animal;\n' +
                'interface GameItem {\n' +
                '\tint sell();\n' +
                '}\n' +
                'abstract class Vegetable implements GameItem {\n' +
                '\tpublic final int sell() { return 5; }\n' +
                '}\n' +
                'public class Turnip extends Vegetable {\n' +
                '\tpublic final int sell() { return 3; }\n' +
                '\tpublic static void main(String[] expensive){\n' +
                '\t\tSystem.out.println(new Turnip().sell());\n' +
                '\t}\n' +
                '}',
            'options': [
                'A.3',
                'B.5',
                'C.The code does not compile.',
                'D.The code compiles but throws an exception at runtime'
            ],
            'correctIndex': 2,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': 'C. The sell() method is declared final in the Vegetable class. The Turnip class\n' +
                'then attempts to override this method, resulting in a compilation error, making option C the\n' +
                'correct answer.'
        }
    ]
});
