//Quiz#2
$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'The author of this method forgot to include the data type. Which of the following\nreference types can best fill in the blank to complete this method?\n\n'+
                'public static void secret(__________ mystery)\n' +
                'char ch = mystery.charAt(3);\n' +
                'mystery = mystery.insert(1, "more");\n' +
                'int num = mystery.length();',
            'options': [
                'String',
                'StringBuilder',
                'Both',
                'Neither'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': '❌ The charAt() and length() methods are declared on both String and StringBuilder. However, the insert() method is declared only on a StringBuilder and not a String. Therefore, option B is correct.'
        },
        {
            'q': 'Which is one of the lines output by this code?\n\n' +
            '10: var list = new ArrayList<Integer>();\n' +
                '11: list.add(10);\n' +
                '12: list.add(9);\n' +
                '13: list.add(8);\n' +
                '14:\n' +
                '15: var num = 9;\n' +
                '16: list.removeIf(x -> {int keep = num; return x != keep;});\n' +
                '17: System.out.println(list);\n' +
                '18:\n' +
                '19: list.removeIf(x -> {int keep = num; return x == keep;});\n' +
                '20: System.out.println(list);',
            'options': [
                '[]',
                '[8, 10]',
                '[8, 9, 10]',
                '[10, 8]',
                'The code does not compile'
            ],
            'correctIndex': 0,
            'correctResponse': 'Good ✅',
            'incorrectResponse': '❌ The code starts by creating a list of three elements. On line 16, it removes two elements\n' +
                'and then removes the final one on line 19. This prints an empty list, making option A the\n' +
                'correct answer. Note that num is effectively final, so can be used in a lambda.'
        },
        {
            'q': 'How many of the following lines contain a compiler error?\n\n' +
                'double num1 = 2.718;\n' +
                'double num2 = 2._718;\n' +
                'double num3 = 2.7_1_8;\n' +
                'double num4 = _2.718;'
            ,
            'options': [
                '0',
                '1',
                '2',
                '3',
                '4'
            ],
            'correctIndex': 2,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': '❌ Underscores are allowed between any two digits in a numeric literal, causing num4 to fail\n' +
                'to compile. Additionally, underscores are not allowed adjacent to a decimal point, causing a\n' +
                'compiler error in num2. Since two lines have errors, option C is the correct answer.'
        },
        {
            'q': 'What is the result of the following code?\n\n' +
                'var sb = new StringBuilder("radical")\n' +
                '.insert(sb.length(), "robots");\n' +
                'System.out.println(sb);',
            'options': [
                'radicarobots',
                'radicalrobots',
                'The code does not compile.',
                'he code compiles but throws an exception at runtime.'
            ],
            'correctIndex': 2,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': '❌ Calling the constructor and then insert() is an example of method chaining. However,\n' +
                'the sb.length() call is a problem. The sb reference doesn’t exist until after the chained\n' +
                'calls complete. Just because it happens to be on a separate line doesn’t change when the refer-\n' +
                'ence is created. Since the code does not compile, option C is correct.'
        },
        {
            'q': 'What is the output of the following?\n\n' +
                'var teams = new String("694");\n' +
                'teams.concat(" 1155");\n' +
                'teams.concat(" 2265");\n' +
                'teams.concat(" 2869");\n' +
                'System.out.println(teams);',
            'options': [
                '694',
                '694 1155 2265 2869',
                'The code compiles but outputs something else.',
                'The code does not compile.'
            ],
            'correctIndex': 0,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': '❌ Since String is immutable, each call to concat() returns a new object with the new\n' +
                'value. However, that return value is ignored, and the teams variable never changes in value.\n' +
                'Therefore, it stays as 694, and option A is correct.'
        }
    ]
});
//Quiz#1
/*
$('#quiz').quiz({
    counterFormat: 'Question %current of %total',
    questions: [
        {
            'q': 'Which of the following is not a valid variable name?',
            'options': [
                '2blue',
                'blue$',
                'blue',
                '_blue'
            ],
            'correctIndex': 0,
            'correctResponse': 'Correct ✅',
            'incorrectResponse': '❌, An identifier name must begin with a letter, dollar sign($), or underscore(_), Numbers are permitted only for subsequent characters. Therefore, Option A is not a valid variable name.'
        },
        {
            'q': 'Which is equivalent to var q = 4.0f;?',
            'options': [
                'float q = 4.0f;',
                'Float q = 4.0f;',
                'double q = 4.0f;',
                'Double q = 4.0f;',
                'Object q = 4.0f;'
            ],
            'correctIndex': 0,
            'correctResponse': 'Good ✅',
            'incorrectResponse': '❌, The f in 4.0f means the type is a float, making option A correct. Local variable type inference chooses an exact match rather than using autoboxing, to choose Float.'
        },
        {
            'q': 'What is the output of the following?\n\n' +
                'var b = "12";\n' +
                'b += \"3\"; \n' +
                'b.reverse(); \n' +
                'System.out.println(b.toString());'
            ,
            'options': [
                '12',
                '123',
                '321',
                'The code does not compile.'
            ],
            'correctIndex': 3,
            'correctResponse': 'Excellent ✅',
            'incorrectResponse': '❌, Tricky Question, There is no reverse method on the String class. There is one on the StringBuilder class. Therefore, the code does not compile, and option D is correct.'
        },
        {
            'q': 'What is the output of the following?\n\n' +
                '5: var line = new StringBuilder("-");\n' +
                '6: var anotherLine = line.append("-");\n' +
                '7: System.out.print(line == anotherLine)\n' +
                '8: System.out.print(" ")\n' +
                '9: System.out.print(line.length())',
            'options': [
                'false 1',
                'false 2',
                'true 1',
                'true 2',
                'It does not compile'
            ],
            'correctIndex': 3,
            'correctResponse': 'Bravo ✅',
            'incorrectResponse': '❌, A StringBuilder is mutable, so the length is 2 after line 6 completes. The StringBuilder methods return a reference to the same object, so you can chain method calls. Therefore, line and anotherLine refer to the same object. This means that line 7 prints true. Then on line 9, both references point to the same object of length 2, and option D is correct.'
        },
        {
            'q': 'How many of these compiles?\n\n' +
                '18: Comparator<String> c1 = (j, k) -> 0;\n' +
                '19: Comparator<String> c2 = (String j, String k) -> 0;\n' +
                '20: Comparator<String> c3 = (var j, String k) -> 0;\n' +
                '21: Comparator<String> c4 = (var j, k) -> 0;\n' +
                '22: Comparator<String> c5 = (var j, var k) -> 0;\n',
            'options': [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5'
            ],
            'correctIndex': 3,
            'correctResponse': 'Perfect ✅',
            'incorrectResponse': '❌, Line 18 compiles because neither type is specified for the lambda parameters, Lines 19 and 22 compiles because the lambda parameters use a type or var consistently. These are the three lines that compile, making option D correct. Lines 20 and 21 do not compile because var must be used for all parameters in a lambda if it is used for any.'
        }
    ]
});*/
