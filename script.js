const inputsContainer = document.querySelector("#inputsContainer")
const resultsContainer = document.querySelector("#resultsContainer")

const mathInput = document.createElement('input')
mathInput.placeholder = 'Math'
mathInput.type = 'number'
const mathResult = document.createElement('p')
mathInput.id = 'mathInput'
mathResult.innerText = 'Math'

const banglaInput = document.createElement('input')
banglaInput.placeholder = 'Bangla'
banglaInput.type = 'number'
const banglaResult = document.createElement('p')
banglaResult.innerText = 'Bangla'

const englishInput = document.createElement('input')
englishInput.placeholder = 'English'
englishInput.type = 'number'
const englishResult = document.createElement('p')
englishResult.innerText = 'English'

const scienceInput = document.createElement('input')
scienceInput.placeholder = 'Science'
scienceInput.type = 'number'
const scienceResult = document.createElement('p')
scienceResult.innerText = 'Science'

const socialInput = document.createElement('input')
socialInput.placeholder = 'Social Science'
socialInput.type = 'number'
const socialResult = document.createElement('p')
socialResult.innerText = 'Social Science'

const religionInput = document.createElement('input')
religionInput.placeholder = 'Region'
religionInput.type = 'number'
const religionResult = document.createElement('p')
religionResult.innerText = 'Religion'

const nextLine = document.createElement('br')

const resultButton = document.createElement('button')
resultButton.id = 'resultButton'
resultButton.innerText = 'Result'

inputsContainer.appendChild(mathInput)
resultsContainer.appendChild(mathResult)

inputsContainer.appendChild(banglaInput)
resultsContainer.appendChild(banglaResult)

inputsContainer.appendChild(englishInput)
resultsContainer.appendChild(englishResult)

inputsContainer.appendChild(scienceInput)
resultsContainer.appendChild(scienceResult)

inputsContainer.appendChild(socialInput)
resultsContainer.appendChild(socialResult)

inputsContainer.appendChild(religionInput)
resultsContainer.appendChild(religionResult)

inputsContainer.appendChild(nextLine)
resultsContainer.appendChild(resultButton)

function gradeOfMath() {
    const mathValue = mathInput.valueAsNumber
    if (mathValue>0 && mathValue<=32) {
        mathResult.innerText = 'GPA: 0.00 Grade: F'
    } else if (mathValue>=33 && mathValue<=39) {
        mathResult.innerText = 'GPA: 1.00 Grade: D'
    } else if (mathValue>=40 && mathValue<=49) {
        mathResult.innerText = 'GPA: 2.00 Grade: C'
    } else if (mathValue>=50 && mathValue<=59) {
        mathResult.innerText = 'GPA: 3.00 Grade: B'
    } else if (mathValue>=60 && mathValue<=69) {
        mathResult.innerText = 'GPA: 3.50 Grade: A-'
    } else if (mathValue>=70 && mathValue<=79) {
        mathResult.innerText = 'GPA: 4.00 Grade: A'
    } else if (mathValue>=80 && mathValue<=100) {
        mathResult.innerText = 'GPA: 5.00 Grade: A+'
    } else {
        mathResult.innerText = 'Absent Grade: F'
    }
}

function gradeOfBangla() {
    const banglaValue = banglaInput.valueAsNumber
    if (banglaValue>0 && banglaValue<=32) {
        banglaResult.innerText = 'GPA: 0.00 Grade: F'
    } else if (banglaValue>=33 && banglaValue<=39) {
        banglaResult.innerText = 'GPA: 1.00 Grade: D'
    } else if (banglaValue>=40 && banglaValue<=49) {
        banglaResult.innerText = 'GPA: 2.00 Grade: C'
    } else if (banglaValue>=50 && banglaValue<=59) {
        banglaResult.innerText = 'GPA: 3.00 Grade: B'
    } else if (banglaValue>=60 && banglaValue<=69) {
        banglaResult.innerText = 'GPA: 3.50 Grade: A-'
    } else if (banglaValue>=70 && banglaValue<=79) {
        banglaResult.innerText = 'GPA: 4.00 Grade: A'
    } else if (banglaValue>=80 && banglaValue<=100) {
        banglaResult.innerText = 'GPA: 5.00 Grade: A+'
    } else {
        banglaResult.innerText = 'Absent Grade: F'
    }
}

function gradeOfEnglish() {
    const englishValue = englishInput.valueAsNumber
    if (englishValue>0 && englishValue<=32) {
        englishResult.innerText = 'GPA: 0.00 Grade: F'
    } else if (englishValue>=33 && englishValue<=39) {
        englishResult.innerText = 'GPA: 1.00 Grade: D'
    } else if (englishValue>=40 && englishValue<=49) {
        englishResult.innerText = 'GPA: 2.00 Grade: C'
    } else if (englishValue>=50 && englishValue<=59) {
        englishResult.innerText = 'GPA: 3.00 Grade: B'
    } else if (englishValue>=60 && englishValue<=69) {
        englishResult.innerText = 'GPA: 3.50 Grade: A-'
    } else if (englishValue>=70 && englishValue<=79) {
        englishResult.innerText = 'GPA: 4.00 Grade: A'
    } else if (englishValue>=80 && englishValue<=100) {
        englishResult.innerText = 'GPA: 5.00 Grade: A+'
    } else {
        englishResult.innerText = 'Absent Grade: F'
    }
}

function gradeOfScience() {
    const scienceValue = scienceInput.valueAsNumber
    if (scienceValue>0 && scienceValue<=32) {
        scienceResult.innerText = 'GPA: 0.00 Grade: F'
    } else if (scienceValue>=33 && scienceValue<=39) {
        scienceResult.innerText = 'GPA: 1.00 Grade: D'
    } else if (scienceValue>=40 && scienceValue<=49) {
        scienceResult.innerText = 'GPA: 2.00 Grade: C'
    } else if (scienceValue>=50 && scienceValue<=59) {
        scienceResult.innerText = 'GPA: 3.00 Grade: B'
    } else if (scienceValue>=60 && scienceValue<=69) {
        scienceResult.innerText = 'GPA: 3.50 Grade: A-'
    } else if (scienceValue>=70 && scienceValue<=79) {
        scienceResult.innerText = 'GPA: 4.00 Grade: A'
    } else if (scienceValue>=80 && scienceValue<=100) {
        scienceResult.innerText = 'GPA: 5.00 Grade: A+'
    } else {
        scienceResult.innerText = 'Absent Grade: F'
    }
}

function gradeOfSocialScience() {
    const scoialValue = socialInput.valueAsNumber
    if (scoialValue>0 && scoialValue<=32) {
        socialResult.innerText = 'GPA: 0.00 Grade: F'
    } else if (scoialValue>=33 && scoialValue<=39) {
        socialResult.innerText = 'GPA: 1.00 Grade: D'
    } else if (scoialValue>=40 && scoialValue<=49) {
        socialResult.innerText = 'GPA: 2.00 Grade: C'
    } else if (scoialValue>=50 && scoialValue<=59) {
        socialResult.innerText = 'GPA: 3.00 Grade: B'
    } else if (scoialValue>=60 && scoialValue<=69) {
        socialResult.innerText = 'GPA: 3.50 Grade: A-'
    } else if (scoialValue>=70 && scoialValue<=79) {
        socialResult.innerText = 'GPA: 4.00 Grade: A'
    } else if (scoialValue>=80 && scoialValue<=100) {
        socialResult.innerText = 'GPA: 5.00 Grade: A+'
    } else {
        socialResult.innerText = 'Absent Grade: F'
    }
}

function gradeOfReligion() {
    const religionValue = religionInput.valueAsNumber
    if (religionValue>0 && religionValue<=32) {
        religionResult.innerText = 'GPA: 0.00 Grade: F'
    } else if (religionValue>=33 && religionValue<=39) {
        religionResult.innerText = 'GPA: 1.00 Grade: D'
    } else if (religionValue>=40 && religionValue<=49) {
        religionResult.innerText = 'GPA: 2.00 Grade: C'
    } else if (religionValue>=50 && religionValue<=59) {
        religionResult.innerText = 'GPA: 3.00 Grade: B'
    } else if (religionValue>=60 && religionValue<=69) {
        religionResult.innerText = 'GPA: 3.50 Grade: A-'
    } else if (religionValue>=70 && religionValue<=79) {
        religionResult.innerText = 'GPA: 4.00 Grade: A'
    } else if (religionValue>=80 && religionValue<=100) {
        religionResult.innerText = 'GPA: 5.00 Grade: A+'
    } else {
        religionResult.innerText = 'Absent Grade: F'
    }
}

function callAllFunctions() {
    gradeOfMath()
    gradeOfBangla()
    gradeOfEnglish()
    gradeOfScience()
    gradeOfSocialScience()
    gradeOfReligion()
}

resultButton.addEventListener("click", callAllFunctions)