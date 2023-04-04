$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'Which of the following can replace the body of the travel() method to produce\n' +
                'the same output on any nonempty input?\n' +
                'public void travel(List<Integer> roads) {\n' +
                '\tfor (int w = 1; w <= roads.size(); w++)\n' +
                '\t\tSystem.out.print(roads.get(w-1));\n' +
                '}',
            'options': [
                'A.for (int r = 0; r < roads.size(); r += 1)\n' +
                '\tSystem.out.print(roads.get(0));',
                'B.for(var z : roads)\n' +
                '\tSystem.out.print(z);',
                'C.for (int t = roads.size(); t > 0; t--)\n' +
                '\tSystem.out.print(roads.get(t));',
                'D.for (var var : roads)\n' +
                '\tSystem.out.print(roads);',
                'E.for (int q = roads.size(); q >= 0; q++)\n' +
                '\tSystem.out.print(roads.get(q));',
                'None of the above'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': 'B. The method prints the elements of the list in the order in which they are defined. Option A\n' +
                'is incorrect and prints the first element repeatedly. Option B is correct and prints the elements\n' +
                'using a for-each loop. Options C and E are incorrect because the first element read results in\n' +
                'an ArrayIndexOutOfBoundsException. Finally, option D is incorrect because the entire\n' +
                'list is printed each time.'
        },
        {
            'q': 'Which statement about the following code snippet is correct?\n\n' +
                '3: final var javaVersions = List.of(9,10,11);\n' +
                '4: var exams = List.of("1Z0-811", "1Z0-819");\n' +
                '5: V: for (var e1 : javaVersions) {\n' +
                '6: \tE: for (String e2 : exams)\n' +
                '7: \t\tSystem.out.println(e1 + "_" + e2);\n' +
                '8: \t\tbreak;\n' +
                '9: }',
            'options': [
                'A.One line does not compile.',
                'B.Two lines do not compile.',
                'C.Three lines do not compile.',
                'D.It compiles and prints two lines at runtime.',
                'E.It compiles and prints three lines at runtime.',
                'F.None of the above.'
            ],
            'correctIndex': 3,
            'correctResponse': 'Good ✅',
            'incorrectResponse': 'D. The code snippet compiles, making options A, B, and C incorrect. Notice that the inner\n' +
                'for-each loop does not use braces, {}, so the break statement applies to the outer loop only.\n' +
                'On the first iteration of the outer loop, the inner loop prints 9_1Z0-811 and 9_1Z0-819.\n' +
                'Then, the break statement is encountered, and the outer loop is terminated, making option\n' +
                'D correct. If braces were added around lines 7 and 8, then the code would instead print\n' +
                '9_1Z0-811, 10_1Z0-811, and 11_1Z0-811, and option E would be correct.'
        },
        {
            'q': 'The code contains six pairs of curly braces. How many pairs\n' + ' can be removed without chang-ing the behavior?\n' +
                '12: public static void main(String[] args) {\n' +
                '13: \tint secret = 0;\n' +
                '14: \tfor (int i = 0; i < 10; i++) {\n' +
                '15: \t\twhile (i < 10) {\n' +
                '16: \t\t\tif (i == 5) {\n' +
                '17: \t\t\t\tSystem.out.println("if");\n' +
                '18: \t\t\t} else {\n' +
                '19: \t\t\t\tSystem.out.println("in");\n' +
                '20: \t\t\t\tSystem.out.println("else");\n' +
                '21: \t\t\t}\n' +
                '22: \t\t }\n' +
                '23: \t}\n' +
                '24: \tswitch (secret) {\n' +
                '25: \t\tcase 0: System.out.println("zero");\n' +
                '26: \t}\n' +
                '27: }',
            'options': [
                'A.One',
                'B.Two',
                'C.Three',
                'D.Four',
                'E.Five',
                'F.Six'
            ],
            'correctIndex': 2,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': 'C. The braces on lines 12/27 are required because they comprise the method body. The\n' +
                'braces on lines 24/26 are required because a switch statement needs braces regardless of\n' +
                'how many case statements are inside. Finally, the braces on lines 18/21 are required because\n' +
                'the else has two statements inside.\n' +
                'The braces on lines 14/23, 15/22, and 16/18 are all optional because there is only one state-\n' +
                'ment inside. Since there are three pairs, option C is correct.'
        },
        {
            'q': 'What is the output of the following application?\n\n' +
                'package dnd;\n' +
                'final class Story {\n' +
                '\tvoid recite(int chapter) throws Exception {}\n' +
                '}\n' +
                'public class Adventure extends Story {\n' +
                '\tfinal void recite(final int chapter) { // g1\n' +
                '\t\tswitch(chapter) { // g2\n' +
                '\t\t\tcase 2: System.out.print(9);\n' +
                '\t\t\tdefault: System.out.print(3);\n' +
                '\t\t}\n' +
                '\t}\n' +
                '\tpublic static void main(String... u) {\n' +
                '\t\tvar bedtime = new Adventure();\n' +
                '\t\tbedtime.recite(2);\n' +
                '\t}\n' +
                '}',
            'options': [
                'A.3',
                'B.9',
                'C.93',
                'D.The code does not compile because of line g1.',
                'E.The code does not compile because of line g1.',
                'F.None of the above.'
            ],
            'correctIndex': 5,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': 'F. The program does not compile because Story is marked final, which means it cannot\n' +
                'be extended by Adventure. If the final modifier were removed, the rest of the code would\n' +
                'compile and print 93 at runtime.'
        },
        {
            'q': 'Which of the following lines of code are not permitted as the \n' + 'first line of a Java class file?\n\n',
            'options': [
                'A.import widget.*;',
                'B.// Widget Manager',
                'C.int facilityNumber;',
                'D.package sprockets;',
                'E./** Author: Cid **/',
            ],
            'correctIndex': 2,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': 'C. A class can start with a comment, an optional package statement, or an import\n' +
                'statement if there is no package statement. It cannot start with a variable definition or\n' +
                'method declaration, since those cannot be declared outside a type. Therefore, options C is correct.'
        }
    ]
});