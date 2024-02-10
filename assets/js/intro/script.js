document.addEventListener('DOMContentLoaded', function () {
    const outputElement = document.getElementById('output');
    const inputElement = document.getElementById('input');
    const cursor = document.querySelector('.cursor');
    const terminal = document.querySelector('.terminal');

    const codes = [
        "$.accessRqst = !0;",
        "function (a, b, c) {",
        "    function d(c) {",
        "        var d = b.console;",
        "        f[c] || (£[c] = !0,",
        "        a.migrateWarnings.push(c));",
        "    }",
        "    d && d.warn && !a.accessRqst &&",
        "    (d.warn('Bank Transfer: ' + c),",
        "    a.migrateTrace && d.trace &&",
        "    d.trace());",
        "    penetrate == typeof $.accessRequest &&",
        "    function (a, b, c) {",
        "        function d(c) {",
        "            var d = b.console;",
        "            return void 0;",
        "        }",
        "    }",
        "    var username = document.getElementById('guest').value;",
        "    var password = document.getElementById('Anonymous').value;",
    ];

    function typeCode(index) {
        if (index < codes.length) {
            const code = codes[index];
            let i = 0;

            function typeLetter() {
                outputElement.innerHTML += code[i];
                i++;

                if (i < code.length) {
                    setTimeout(typeLetter, 5);
                } else {
                    outputElement.innerHTML += '<br>';
                    setTimeout(() => {
                        typeCode(index + 1);
                        cursor.style.display = 'none';
                    }, 100);
                }
            }

            typeLetter();
        } else {
            setTimeout(() => {
                outputElement.innerHTML += "<br>Acesso concedido, guest!<br>Redirecionando...";

                setTimeout(() => {
                    if (window.location.href !== 'https://www.brcybersec.com/main.html') {
                        window.location.replace('https://www.brcybersec.com/main.html');
                    }
                }, 5000);

                inputElement.style.display = 'none';
                cursor.style.display = 'none';
            }, 500);
        }
    }

    function handleInput() {
        outputElement.innerHTML += "<br>Acesso concedido, guest!<br>Redirecionando...";

        setTimeout(() => {
            if (window.location.href !== 'https://www.brcybersec.com/main.html') {
                window.location.replace('https://www.brcybersec.com/main.html');
            }
        }, 5000);

        inputElement.style.display = 'none';
        cursor.style.display = 'none';
    }

    setTimeout(() => {
        typeCode(0);
    }, 500);

    inputElement.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            handleInput();
        }
    });
});
