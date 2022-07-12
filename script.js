class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement
        this.previousOperandTextElement = previousOperandTextElement;
    }

    clear() {
        this.currentOperandTextElement = '';
        this.previousOperandTextElement = '';
        this.operation = undefined;
    }

    delete() {
        
    }

    appendNumber() {
        
    }

    chooseOperation(operation) {
        
    }

    compute() {
        
    }

    updateDisplay() {
        
    }
}






const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equansButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-ac]');
const previousOperandTextElement = document.querySelector('[data-output1]')
const currentOperandTextElement = document.querySelector('[data-output2]')

const calculator = new Calculator