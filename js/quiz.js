$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What does the following code snippet output?\n\n'+
                'var bottles = List.of("glass", "plastic", "can");\n' +
                'for (int type = 1; type < bottles.size();) {\n' +
                'System.out.print(bottles.get(type) + "-");\n' +
                'if(type < bottles.size()) break;\n' +
                '}\n' +
                'System.out.print("end");',
            'options': [
                'A.glass-end',
                'B.glass-plastic-can-end',
                'C.plastic-end',
                'D.plastic-can-end',
                'E.The code does not compile.'
            ],
            'correctIndex': 2,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': '❌ C. The first time through the loop, type is 1, and plastic- is output. The break\n' +
                'statement then terminates the loop, with end bring printed. If the break keyword was\n' +
                'removed, then this would be an infinite loop because type is not incremented between loop\n' +
                'executions.'
        },
        {
            'q': 'What is the result of executing the following code snippet?\n\n' +
                'final var GOOD = 100;\n' +
                'var score = 10;\n' +
                'switch (score) {\n' +
                'default:\n' +
                '1 : System.out.print("1-");\n' +
                '-1 : System.out.print("2-"); break;\n' +
                '4,5 : System.out.print("3-");\n' +
                '6 : System.out.print("4-");\n' +
                '9 : System.out.print("5-");\n' +
                '}',
            'options': [
                'A.1-',
                'B.1-2-',
                'C.2-',
                'D.3-',
                'E.4-',
                'F.None of the above'
            ],
            'correctIndex': 5,
            'correctResponse': 'Good ✅',
            'incorrectResponse': '❌ F. The code does not compile because the switch statement is missing the case keyword\n' +
                'for each value. Also, two case values cannot be combined as in 4,5.'
        },
        {
            'q': 'What is the output of the following application?\n\n' +
                'package dinosaur;\n' +
                'public class Park {\n' +
                'public final static void main(String... arguments) {\n' +
                'int pterodactyl = 8;\n' +
                'long triceratops = 3;\n' +
                'if(pterodactyl % 3 > 1 + 1)\n' +
                'triceratops++;\n' +
                'triceratops--;\n' +
                'System.out.print(triceratops);\n' +
                '}\n' +
                '}'
            ,
            'options': [
                'A.2',
                'B.3',
                'C.4',
                'D.The code does not compile.',
                'E.The code compiles but throws an exception at runtime.'
            ],
            'correctIndex': 0,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': '❌ A. First, determine whether the if statement’s expression is executed. The expression\n' +
                '8 % 3 evaluates to 2. The right-hand side of the expression is evaluated next since + has a\n' +
                'higher precedence than >. Since 2 > 2 is false, the expression triceratops++ is not\n' +
                'called. Notice there are no braces, {}, in the if statement. Despite the triceratops–– line\n' +
                'being indented, it is not part of the if statement. Therefore, triceratops–– is always exe-\n' +
                'cuted, resulting in a value of 2 for triceratops, and making option A the correct answer.'
        },
        {
            'q': 'What variable type of red allows the following application to compile?\n\n' +
                'package tornado;\n' +
                'public class Kansas {\n' +
                'public static void main(String[] args) {\n' +
                'int colorOfRainbow = 10;\n' +
                '____________ red = 5;\n' +
                'switch(colorOfRainbow) {\n' +
                'default:\n' +
                'System.out.print("Home");\n' +
                'break;\n' +
                'case red:\n' +
                'System.out.print("Away");\n' +
                '}\n' +
                '}\n' +
                '}',
            'options': [
                'A.long',
                'B.double',
                'C.int',
                'D.var',
                'E.String',
                'F.None of the above'
            ],
            'correctIndex': 5,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': '❌ F. The value of a case statement must be a constant, a literal value, or a final variable.\n' +
                'Since red is missing the final attribute, no variable type allows the code to compile, mak-\n' +
                'ing option F the correct answer. If the final modifier was added to the declaration of red,\n' +
                'then int or var would be correct. The other options use types that are incompatible with\n' +
                'switch statements or with colorOfRainbow.'
        },
        {
            'q': 'How many lines of the magic() method contain compilation errors?\n\n' +
                '10: public void magic() {\n' +
                '11: ' +
                'do {\n' +
                '12: ' +
                'int trick = 0;\n' +
                '13: ' +
                'LOOP: do {\n' +
                '14: ' +
                'trick++;\n' +
                '15: ' +
                '} while (trick < 2--);\n' +
                '16: ' +
                'continue LOOP;\n' +
                '17: ' +
                '} while (1 > 2);\n' +
                '18: ' +
                'System.out.println(trick);\n' +
                '19: }',
            'options': [
                'A.Zero',
                'B.One',
                'C.Two',
                'D.Three'
            ],
            'correctIndex': 3,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': '❌ D. Line 15 does not compile because the post-decrement operator can be applied only to var-\n' +
                'iables, not values. Line 16 also does not compile because the label LOOP is out of scope after\n' +
                'line 15. Finally, line 18 does not compile because trick is declared within the do/while\n' +
                'loop and out of scope after line 17. For these reasons, option D is the correct answer.'
        }
    ]
});