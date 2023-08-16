const btn = document.getElementById('submit');
btn.onclick = btn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputTemp = document.getElementById('inputTemp').value;
    const inputType = document.getElementById('inputType').value;
    const outputType = document.getElementById('outputType').value;
    console.log(inputType + outputType)
    const result = document.getElementById('result');
    const convert = document.getElementById('convert');
    const degf = '\u00B0' + 'F';
    const degc = '\u00B0' + 'C';
    const degk = 'K';
    switch (inputType) {
        case "degc":
            {
                switch (outputType) {
                    case "degc":
                        convert.innerText = "Celsius to Celsius";
                        result.innerText = inputTemp + degc;
                        break;
                    case "degf":
                        convert.innerText = "Celsius to Fahrenheit";
                        result.innerText = Number(inputTemp) * 9 / 5 + 32 + degf;
                        break;
                    case "degk":
                        convert.innerText = "Celsius to Kelvin";
                        result.innerText = Number(inputTemp) + 273.15 + degk;
                        break;
                    default:
                        convert.innerText = "Something went Wrong";
                        result.innerText = "inputTemp";
                }
                break;
            }
        case "degf":
            {
                switch (outputType) {
                    case "degc":
                        convert.innerText = "Fahrenheit to Celsius";
                        result.innerText = (Number(inputTemp) - 32) * 5 / 9 + degc;
                        break;
                    case "degf":
                        convert.innerText = "Fahrenheit to Fahrenheit";
                        result.innerText = Number(inputTemp) + degf;
                        break;
                    case "degk":
                        convert.innerText = "Fahrenheit to Kelvin";
                        result.innerText = (Number(inputTemp) - 32) * 5 / 9 + 273.15 + degk;
                        break;
                    default:
                        convert.innerText = "Something went Wrong";
                        result.innerText = "inputTemp";
                }
                break;
            }
        case "degk":
            {
                switch (outputType) {
                    case "degc":
                        convert.innerText = "Kelvin to Celsius";
                        result.innerText = (Number(inputTemp) - 273.15) + degc;
                        break;
                    case "degf":
                        convert.innerText = "Kelvin to Fahrenheit";
                        result.innerText = (Number(inputTemp) - 273.15) * 9 / 5 + 32 + degf;
                        break;
                    case "degk":
                        convert.innerText = "Kelvin to Kelvin";
                        result.innerText = Number(inputTemp) + degk;
                        break;
                    default:
                        convert.innerText = "Something went Wrong";
                        result.innerText = "inputTemp";
                }
                break;
            }
        default:
            convert.innerText = "Something went Wrong";
            result.innerText = "inputTemp";
    }
})
