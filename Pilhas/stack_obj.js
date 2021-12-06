// classe Stack baseada em objeto

class Stack {
    constructor() {
        this.count = 0;
        this.items = { };
    }

    //adiciona novos elementos no topo da pilha.
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    //remove o último item adicionado.
    pop() {
        if(this.isEmpty()){
            return undefined;
        }

        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
        
    }

    //retorna o item que está no topo da pilha.
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }

    //retorna "True" se a pilha está vazia
    isEmpty() {
        return this.count === 0;
    }

    //retorna o tamanho da pilha
    size() {
        return this.count;
    }

    //esvazia a pilha
    clear() {
        this.items = {};
        this.count = 0;
    }

    toString() {
        if(this.isEmpty()){
            return '';
        }
        
        let objString = `${this.items[0]}`;

        for(let i = 1; i < this.count; i++){
            objString += `,${this.items[i]}`;
        }

        return objString;
    }
}


//Usando a classe Stack

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(11);

console.log(stack.peek());
stack.push(21);

console.log(stack.size());
console.log(stack.isEmpty());

stack.pop();
stack.pop();

console.log(stack.toString());