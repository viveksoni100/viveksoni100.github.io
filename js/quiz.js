$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What is the output of the following code snippet?\n\n' +
                'int hops = 0;\n' +
                'int jumps = 0;\n' +
                'jumps = hops++;\n' +
                'if(jumps)\n' +
                'System.out.print("Jump!");\n' +
                'else\n' +
                'System.out.print("Hop!");',
            'options': [
                'A.Jump!',
                'B.Hop!',
                'C.The code does not compile.',
                'D.The code compiles but throws an exception at runtime.',
                'E.None of the above.'
            ],
            'correctIndex': 2,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': '❌ C. The statement if(jumps) evaluates to if(0), and since 0 is not a boolean value, the\n' +
                'code does not compile. Java requires boolean expressions in if statements.'
        },
        {
            'q': 'Which of the following best describes the flow of\nexecution in this for loop if beta always\n' +
                'returns false?\n\n' +
                'for (alpha; beta; gamma) {\n' +
                'delta;\n' +
                '}',
            'options': [
                'A.alpha',
                'B.alpha, beta',
                'C.alpha, beta, gamma',
                'D.alpha, gamma',
                'E.alpha, gamma, beta',
                'F.None of the above'
            ],
            'correctIndex': 1,
            'correctResponse': 'Good ✅',
            'incorrectResponse': '❌ B. The initializer, which is alpha, runs first. Then Java checks the condition, which is beta,\n' +
                'to see whether loop execution should start. Since beta returns false, the loop is never\n' +
                'entered, and option B is correct.'
        },
        {
            'q': 'Which of the following best describes the flow of\nexecution in this for loop if beta always\n' +
                'returns false?\n' +
                'boolean balloonInflated = false;\n' +
                'do {\n' +
                'if (!balloonInflated) {\n' +
                'balloonInflated = true;\n' +
                'System.out.print("inflate-");\n' +
                '}\n' +
                '} while (! balloonInflated);\n' +
                'System.out.println("done");',
            'options': [
                'A.done',
                'B.inflate-done',
                'C.The code does not compile.',
                'D.This is an infinite loop.',
                'E.None of the above.'
            ],
            'correctIndex': 1,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': '❌ B. On the first iteration of the loop, the if statement executes and prints inflate-.\n' +
                'Then the loop condition is checked. The variable balloonInflated is true, so the loop\n' +
                'condition is false, and the loop completes and done is printed.'
        },
        {
            'q': 'Which of these code snippets behaves differently from the others?\n',
            'options': [
                'A.\n' +
                'if (numChipmunks == 1)\n' +
                'System.out.println("One chipmunk");\n' +
                'if (numChipmunks == 2)\n' +
                'System.out.println("Two chipmunks");\n' +
                'if (numChipmunks == 3)\n' +
                'System.out.println("Three chipmunks");',
                'B.\n' +
                'switch (numChipmunks) {\n' +
                'case 1: System.out.println("One chipmunk");\n' +
                'case 2: System.out.println("Two chipmunks");\n' +
                'case 3: System.out.println("Three chipmunks");\n' +
                '}',
                'C.\n' +
                'if (numChipmunks == 1)\n' +
                'System.out.println("One chipmunk");\n' +
                'else if (numChipmunks == 2)\n' +
                'System.out.println("Two chipmunks");\n' +
                'else if (numChipmunks == 3)\n' +
                'System.out.println("Three chipmunks");',
                'D.\n' +
                'All three code snippets do the same thing.'
            ],
            'correctIndex': 1,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': '❌ B. Options A and C print one line if numChipmunks is 1, 2, or 3. Option B does not behave\n' +
                'the same way if numChipmunks is 1 or 2. There is no break statement, so the case state-\n' +
                'ments fall through, and more than one statement will be printed.'
        },
        {
            'q': 'Given the following enum and class, which option\nfills in the blank and allows the code\n' +
                'to compile?\n\n' +
                'enum Season { SPRING, SUMMER, WINTER }\n' +
                'public class Weather {\n' +
                'public int getAverageTemperate(Season s) {\n' +
                'switch (s) {\n' +
                'default:\n' +
                '____________ return 30;\n' +
                '}\n' +
                '}\n' +
                '}',
            'options': [
                'A.case Season.WINTER:',
                'B.case WINTER, SPRING:',
                'C.case SUMMER | WINTER:',
                'D.case SUMMER ->',
                'E.case FALL:',
                'F.None of the above'
            ],
            'correctIndex': 5,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': '❌ F. Option A is incorrect because the enum type Season is not used within a case statement.\n' +
                'If it were just case WINTER:, then it would compile. Options B and C do not compile\n' +
                'because switch statements do not support multiple values within a case statement. Option\n' +
                'D is incorrect because -> is used instead of :. Option E is incorrect because FALL is not\n' +
                'defined in the list of values for the enum Season. Since none of the lines of code is correct,\n' +
                'option F is correct.'
        }
    ]
});