const generateEl = document.getElementById("generate")
const saveEl = document.getElementById("save")
const passEl = document.getElementById("password")
const lengthEl = document.getElementById("length")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const paragraphEl = document.getElementById("paragraph")

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const symbols = "?!@#$%^&*~()_-+=|"

const getUppercase = () => uppercase[Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000) * uppercase.length)]

const getLowercase = () => lowercase[Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000) * lowercase.length)]

const getNumber = () => Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000) * 10)

const getSymbols = () => symbols[Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000) * symbols.length)]

const generatePassword = () => {
    const len = lengthEl.value
    let password = ""
    for (let i = 0; i < len; i++) {
        const x = generateX()
        password += x
    }
    passEl.textContent = password
    paragraphEl.textContent = ""
}

const generateX = () => {
    let X = []
    if (upperEl.checked) {
        X.push(getUppercase())
    }
    if (lowerEl.checked) {
        X.push(getLowercase())
    }
    if (numbersEl.checked) {
        X.push(getNumber())
    }
    if (symbolsEl.checked) {
        X.push(getSymbols())
    }
    if (X.length === 0)
        return ""
    else
        return X[Math.floor((crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000) * X.length)]
}

generateEl.addEventListener("click", generatePassword)

saveEl.addEventListener("click", () => {
     const textarea = document.createElement("textarea")
     const passwd = passEl.textContent
     if (!passwd) {
         return
     }
     textarea.value = passwd
     document.body.appendChild(textarea)
     textarea.select()
     document.execCommand("copy")
     textarea.remove()
     paragraphEl.textContent = "Copied to clipboard!"
})