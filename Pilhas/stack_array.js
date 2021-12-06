// classe Stack baseada em array

class Stack {
    constructor() {
        this.items = [];
    }

    //adiciona novos elementos no topo da pilha.
    push(element) {
        this.items.push(element);
    }

    //remove o último item adicionado.
    pop() {
        return this.items.pop();
    }

    //retorna o item que está no topo da pilha.
    peek() {
        return this.items[this.items.length - 1];
    }

    //retorna "True" se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    //retorna o tamanho da pilha
    size() {
        return this.items.length;
    }

    //esvazia a pilha
    clear() {
        this.items = [];
    }
}


//Usando a classe Stack

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(5);
stack.push(19);
stack.push(11);

console.log(stack.peek());
stack.push(21);

console.log(stack.size());
console.log(stack.isEmpty());

stack.pop();
stack.pop();

console.log(stack.size());