class Calculator{
    constructor(currentOperandTextElement, previousOperandTextElement){
        this.currentOperandTextElement = currentOperandTextElement;
        this.previousOperandTextElement = previousOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
        this.updateDisplay();
    }

    appendNumber(number){
       // this.currentOperand = number;
        this.currentOperand += number;
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != undefined)
            this.previousOperandTextElement.innerText = this.previousOperand + ' ' + this.operation;
        else
            this.previousOperandTextElement.innerText = this.previousOperand;
        console.log('while updating :' + this.previousOperand);
    }

    compute() {
        this.result = 0;
        const temp = this.operation;
        this.operation = undefined;
        console.log('temp: ' + temp)
        switch (temp) {
            case '+':
                return parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
            case '-':
                return parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
            case '*':
                return parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
            case '÷':
                if (this.currentOperand != 0)
                    return parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
            default:
                return parseFloat(this.currentOperand);
        }
    }

    selectOperation(operation) {
        if (this.operation == undefined) {
            
            this.operation = operation;
            if (this.previousOperand != '') {
                console.log('previousOperand non null...proceeding');
            
              
                console.log('before update : ' + this.previousOperand);

                this.updateDisplay();
                console.log('after update : ' + this.previousOperand);
        }
            else {
                this.previousOperand = this.currentOperand; 
                this.currentOperand = '';
            console.log('before update : ' + this.previousOperand);
            this.updateDisplay();
            console.log('after update : ' + this.previousOperand);
        }
    }
        
    
    
}
deleteNumber(){
    this.currentOperand = this.currentOperand.slice(0, this.currentOperand.length - 1);
    this.updateDisplay();
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
    })
})

deleteButton.addEventListener('click', () => {
    console.log('deleting');
    calculator.deleteNumber();
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
})

equalsButton.addEventListener('click', () => {
    calculator.previousOperand = calculator.compute();
    calculator.currentOperand = '';
    calculator.operation = undefined;
    calculator.updateDisplay();
})