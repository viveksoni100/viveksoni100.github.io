$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'How many of these statements can be inserted\n' +
                'after the println to have the code flow from line no. 17 to 15\n' +
                'in this diagram?\n\n'+
                'break;\n' +
                'break letters;\n' +
                'break numbers;\n' +
                'continue;\n' +
                'continue letters;\n' +
                'continue numbers;\n' +
                '15: letters: for (char ch = \'a\'; ch <= \'z\'; ch++) {\n' +
                '16: numbers: for (int n = 0; n<=10; n++) {\n' +
                '17: System.out.print(ch);\n' +
                '}\n' +
                '}',
            'options': [
                'A.One',
                'B.Two',
                'C.Three',
                'D.Four',
                'E.Five'
            ],
            'correctIndex': 2,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': '❌ C. If the code follows the arrow, then it prints each letter once, breaking out of the inner\n' +
                'loop on every iteration. Since a break without a label applies to the innermost structure,\n' +
                'break and break numbers are equivalent, and both of these are correct answers.\n' +
                'Likewise, continue and continue numbers are both equivalent although both wrong\n' +
                'in this case since they resume operation of the inner loop. That leaves break letters and\n' +
                'continue letters. In this case, break letters stops the outer loop after printing just\n' +
                'one letter, so it is incorrect. On the other hand, continue letters exits the inner loop\n' +
                'and returns control to the outer loop, which is the desired behavior. Since three statements\n' +
                'are correct, option C is correct.'
        },
        {
            'q': 'What is the output of the following application?\n\n' +
                'package dessert;\n' +
                'public class IceCream {\n' +
                'public final static void main(String... args) {\n' +
                'var flavors = 30;\n' +
                'int eaten = 0;\n' +
                'switch(flavors) {\n' +
                'case 30: eaten++;\n' +
                'case 40: eaten+=2;\n' +
                'default: eaten--;\n' +
                '}\n' +
                'System.out.print(eaten);\n' +
                '}\n' +
                '}',
            'options': [
                'A.1',
                'B.2',
                'C.3',
                'D.The code does not compile because var cannot be used in a switch statement.',
                'E.The code does not compile for another reason.',
                'F.None of the above.'
            ],
            'correctIndex': 1,
            'correctResponse': 'Good ✅',
            'incorrectResponse': '❌ B. The code compiles without issue, so options D and E are incorrect. A var can be used in a\n' +
                'switch statement, provided the underlying type resolves to a supported switch type. Next,\n' +
                'notice there are no break statements. Once the matching case statement, 30, is reached, all\n' +
                'remaining case statements will be executed. The variable eaten is increased by 1, then 2,\n' +
                'then reduced by 1, resulting in a final value of 2, making option B the correct answer.'
        },
        {
            'q': 'Which of the following statements compile and create infinite loops at runtime?\n',
            'options': [
                'A.do {}',
                'B.for( : ) {}',
                'C.while {}',
                'D.for( ; ; ) {}'
            ],
            'correctIndex': 3,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': '❌ D. A while loop and do/while loop both require a boolean expression, making\n' +
                'options A and C incorrect. Option C is incorrect because a for-\n' +
                'each statement requires an assignment type and an object to iterate on. Option D is correct\n' +
                'and shows a traditional for loop with no arguments.'
        },
        {
            'q': 'Which of the following iterates a different number of times than the others?\n',
            'options': [
                'A.for (int k=0; k < 5; k++) {}',
                'B.for (int k=1; k <= 5; k++) {}',
                'C.int k=0; do { } while(k++ < 5);',
                'D.int k=0; while (k++ < 5) {}',
                'E.All of these iterate the same number of times.'
            ],
            'correctIndex': 2,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': '❌ C. Option A goes through five indexes on the iterations: 0, 1, 2, 3, and 4. Option B also goes\n' +
                'through five indexes: 1, 2, 3, 4, and 5. Option D goes through five iterations as well, from 0\n' +
                'to 4. However, option C goes through six iterations since the loop condition is at the end of\n' +
                'the loop. Therefore, it is not like the others, and option C is the correct answer.'
        },
        {
            'q': 'What is the output of the following code snippet?\n\n' +
                'int count = 0;\n' +
                'var stops = new String[] { "Washington", "Monroe",\n' +
                '"Jackson", "LaSalle" };\n' +
                'while (count < stops.length)\n' +
                'if (stops[++count].length() < 8)\n' +
                'break;\n' +
                'else continue;\n' +
                'System.out.println(count);',
            'options': [
                'A.0',
                'B.1',
                'C.2',
                'D.3',
                'E.The code does not compile.',
                'F.None of the above.'
            ],
            'correctIndex': 1,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': '❌ B. On the first iteration of the loop, stops[++count] evaluates to stops[1], while also\n' +
                'setting count to 1. Since stops[1] is Monroe and it has six characters, the break is\n' +
                'reached, and the loop stops. For this reason, 1 is printed, making option B correct.'
        }
    ]
});