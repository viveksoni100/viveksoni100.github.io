//Quiz#2
$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'What is the output of the following?\n\n'+
                '1: public class Legos {\n' +
                '2: ' +
                'public static void main(String[] args) {\n' +
                '3: ' +
                'var sb = new StringBuilder();\n' +
                '4: ' +
                'sb.append("red");\n' +
                '5: ' +
                'sb.deleteCharAt(0);\n' +
                '6: ' +
                'sb.delete(1, 2);\n' +
                '7: ' +
                'System.out.println(sb);\n' +
                '8:' +
                '}\n' +
                '9: }',
            'options': [
                'e',
                'd',
                'ed',
                'None of the above'
            ],
            'correctIndex': 0,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': '❌ A. In the first expression, height > 1 is true. Since it uses the logical operator (|), which\n' +
                'evaluates both sides, the right side is still executed, resulting in length being assigned a\n' +
                'value of 2 and w assigned a value of true. In the second expression, only the right-hand side\n' +
                'of the expression is evaluated, so x is assigned a value of 2, and length is unchanged. The\n' +
                'last expression evaluates to 2 % 2, which is 0, so z is assigned a value of 0.'
        },
        {
            'q': 'Which is a true statement?\n\n' +
                'A.If s.contains("abc") is true, then s.equals("abc") is also true.\n' +
                'B.If s.contains("abc") is true, then s.startsWith("abc") is also true.\n' +
                'C.If s.startsWith("abc") is true, then s.equals("abc") is also true.\n' +
                'D.If s.startsWith("abc") is true, then s.contains("abc") is also true.',
            'options': [
                'A',
                'B',
                'C',
                'D',
                'None of the above'
            ],
            'correctIndex': 3,
            'correctResponse': 'Good ✅',
            'incorrectResponse': '❌ D. Options A and B are not true if the String is "deabc". Option C is not true if the\n' +
                'String is "abcde". Option D is true in all cases.'
        },
        {
            'q': 'What is the output of the following class?\n\n' +
                '1: package rocket;\n' +
                '2: public class Countdown {\n' +
                '3: ' +
                'public static void main(String[] args) {\n' +
                '4: ' +
                'var builder = new StringBuilder("54321");\n' +
                '5: ' +
                'builder.substring(2);\n' +
                '6: ' +
                'System.out.println(builder.charAt(1));\n' +
                '7: ' +
                '}\n' +
                '8: }'
            ,
            'options': [
                '1',
                '2',
                '3',
                '4',
                'Does not compile'
            ],
            'correctIndex': 3,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': '❌ D. Line 4 creates a StringBuilder of length 5. Pay attention to the substring()\n' +
                'method in StringBuilder. It returns a String with the value 321. It does not change\n' +
                'the StringBuilder itself. Then line 6 retrieves the second indexed element from that\n' +
                'unchanged value, which is 4. Therefore, option D is correct.'
        },
        {
            'q': 'Variables declared as which of the following are never permitted in\na switch statement?\n\n',
            'options': [
                'A.var',
                'B.double',
                'C.int',
                'D.String',
                'E.char'
            ],
            'correctIndex': 1,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': '❌ B, a switch statement supports the primitive types byte, short, char, and int and\n' +
                'the wrapper classes Character, Byte, Short, and Integer. It also supports String\n' +
                'and enumerated types. Finally, it permits var if it can be resolved to one of the previous\n' +
                'types. Floating-point types like float and double are not supported; therefore, option B\n' +
                'is correct.'
        },
        {
            'q': 'Which of the following rules about a default branch in a switch statement are correct?\n\n',
            'options': [
                'A.A switch statement is required to declare a default statement.',
                'B.A default statement must be placed after all case statements.',
                'C.A default statement can be placed between any case statements.',
                'D.A switch statement can contain more than one default statement.'
            ],
            'correctIndex': 2,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': '❌ C, a default statement inside a switch statement is optional and can be placed in any\n' +
                'order within the switch’s case statements, making options A,B and D incorrect and option\n' +
                'C correct.'
        }
    ]
});