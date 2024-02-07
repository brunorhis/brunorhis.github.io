document.addEventListener('DOMContentLoaded', function () {
    const outputElement = document.getElementById('output');
    const inputElement = document.getElementById('input');
    const cursor = document.querySelector('.cursor'); // Adicionado o seletor para o cursor
    const terminal = document.querySelector('.terminal');

    const codes = [
        "$.accessRqst = !0)",
        "function (a, b, c) {",
        "    function d(c) {",
        "        var d = b.console;",
        "        f[c] || (£[c] = !0,",
        "        a.migrateWarnings.push (c),",
        "    }",
        "    d && d.warn && !a.accessRqst & &",
        "    (d.warn ('Bank Transfer: ' + c),",
        "    a.migrateTrace && d.trace & &",
        "    d.trace ())",
        "}"
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
                        cursor.style.display = 'none'; // Oculta a linha piscante após o código ser digitado
                    }, 100);
                }
            }

            typeLetter();
        } else {
            setTimeout(() => {
                outputElement.innerHTML += "<br>Insira seu nome:";
                inputElement.removeAttribute('disabled');
                inputElement.focus();
            }, 500);
        }
    }

    function handleInput() {
        const name = inputElement.value.trim();

        if (name !== '') {
            outputElement.innerHTML += `<br>Acesso concedido, ${name}!<br>Redirecionando...`;

            setTimeout(() => {
                window.location.href = 'https://www.google.com';
            }, 5000); // Aguarda 5 segundos antes de redirecionar

            // Oculta o input-line e a linha piscante
            inputElement.style.display = 'none';
            cursor.style.display = 'none';
        }
    }

    // Inicia a simulação após um breve atraso
    setTimeout(() => {
        typeCode(0);
    }, 500);

    inputElement.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            handleInput();
        }
    });
});
