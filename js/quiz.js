$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'Which of the following modifiers can be applied to an abstract method?',
            'options': [
                'A.final',
                'B.private',
                'C.public',
                'D.default'
            ],
            'correctIndex': 2,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': 'C. An abstract method cannot include the final or private modifier. If a method\n' +
                'contained either of these modifiers, then no concrete subclass would ever be able to override\n' +
                'it with an implementation. For these reasons, options A and B are incorrect. Option D is also\n' +
                'incorrect because the default keyword applies to concrete interface methods, not abstract\n' +
                'methods.'
        },
        {
            'q': 'What is the result of compiling and executing the following class?\n\n' +
                '1: public class ParkRanger {\n' +
                '2: int birds = 10;\n' +
                '3: \tpublic static void main(String[] data) {\n' +
                '4: \t\tvar trees = 5;\n' +
                '5: \t\tSystem.out.print(trees+birds);\n' +
                '6: \t}\n' +
                '7: }',
            'options': [
                'A.It compiles and outputs 5.',
                'B.It compiles and outputs 15.',
                'C.It does not compile.',
                'D.It compiles but throws an exception at runtime.'
            ],
            'correctIndex': 2,
            'correctResponse': 'Good ✅',
            'incorrectResponse': 'C. The code does not compile because of line 5, making option C the correct answer.\n' +
                'For this question, it helps to understand variable scope. The main() method is static and does not\n' +
                'have access to any class instance variables. The birds variable is not static and requires\n' +
                'a class instance variable to access. Therefore, the code does not compile when the static\n' +
                'method attempts to access a non-static variable without an instance of the class.'
        },
        {
            'q': 'Which set of modifiers, when added to a default method within an interface, prevents\n' +
                'it from being overridden by a class implementing the interface?',
            'options': [
                'A.const',
                'B.final',
                'C.static',
                'D.private',
                'E.private static',
                'F.None of the above'
            ],
            'correctIndex': 5,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': 'F. There is no modifier that can prevent a default method from being overridden\n' +
                'in a class implementing an interface, making option F correct.'
        },
        {
            'q': 'Given the following application, fill in the missing values in the table starting\n' +
                'from the top and going downward.' +
                'package competition;\n' +
                'public class Robot {' +
                '\tstatic String weight = "A lot";\n' +
                '\tdouble ageMonths = 5, ageDays = 2;\n' +
                '\tprivate static boolean success = true;\n\n' +
                '\tpublic void main(String[] args) {\n' +
                '\t\tfinal String retries = "1";\n' +
                '\t\t// P1\n'+
                '\t\t}\n' +
                '\t}\n\n' +
                '| Variable  | TypeNumber of Variables Accessible at P1 |\n' +
                '| Class       | __________                                                            |\n' +
                '| Instance | __________                                                            |\n' +
                '| Local       | __________                                                            |\n',
            'options': [
                'A.2,0,1',
                'B.2,2,1',
                'C.1,0,1',
                'D.0,2,1'
            ],
            'correctIndex': 1,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': 'B. Notice in this question that main() is not a static method; therefore,\n' +
                'it can access both class and instance variables. Since there are two class variables and two instance\n' +
                'variables defined, option B is the correct answer.'
        },
        {
            'q': 'Given the following code, what values inserted, in order, into the blank lines allow\n' +
                'the code to compile?\n\n' +
                '_______ agent;\n' +
                'public _______ Banker {\n' +
                '\tprivate static _______ getMaxWithdrawal() {\n' +
                '\t\treturn 10;\n' +
                '\t}\n' +
                '}',
            'options': [
                'A.package, new, int',
                'B.package, class, long',
                'C.import, class, null',
                'D.import, interface, void'
            ],
            'correctIndex': 1,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': 'B. Option A is incorrect because new cannot be used to declare a type.\n' +
                'Option C is incorrect because null is a literal and cannot be used as the name of a class.\n' +
                'That leaves options B as the correct answers. Note that 10 can be returned as an int or implicitly\n' +
                'promoted to a long, without issue.'
        }
    ]
});