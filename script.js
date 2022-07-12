class Calculator{
    constructor(currentOperandTextElement, previousOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operand = undefined;
        this.updateDisplay();
    }

    appendNumber(number){
       // this.currentOperand = number;
        this.currentOperand += number;
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
    }

    compute() {
        this.result = 0;
        switch (this.operation) {
            case '+':
                return parseInt(this.previousOperand) + parseInt(this.currentOperand);
            case '-':
                return parseInt(this.previousOperand) - parseInt(this.currentOperand);
            case '*':
                return pareseInt(this.previousOperand) * parseInt(this.currentOperand);
            case '÷':
                if (this.currentOperand != 0)
                    return parseInt(this.previousOperand) / parseInt(this.currentOperand);
            default:
                return parseInt(this.currentOperand);
        }
    }

    selectOperation(operation) {
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
        console.log(typeof (operation));
    }
}



const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const currentOperandTextElement = document.querySelector('[data-output2]');
const previousOperandTextElement = document.querySelector('[data-output1]');


const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperation(button.innerText);
        console.log(button.innerText);
    })
})



allClearButton.addEventListener('click', () => {
    calculator.clear();
})

equalsButton.addEventListener('click', () => {
    calculator.previousOperand = calculator.compute();
    calculator.currentOperand = '';
    calculator.updateDisplay();
})