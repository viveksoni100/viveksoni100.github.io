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
});