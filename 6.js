class Person {
    constructor(name) {
        this.name = name;
    }
    showPerson() {
        console.log(`Name of Person is ${this.name}`);
    }
}
class Student extends Person {//inheritance 
    // private balance using #
    #balance = 0;

    constructor(name, branch, id) {
        super(name);    
        this.branch = branch;
        this.id = id;
    }

    showStudent() {
        console.log(`Name of Student -> ${this.name}, Branch of student -> ${this.branch}, id is -> ${this.id}`);
    }

    deposit(amount) {
        this.#balance += amount;
        console.log(`${this.name} deposited ₹${amount}. Balance: ₹${this.#balance}`);
    }

    buybook(price) {
        if (price <= this.#balance) {
            this.#balance -= price;
            console.log(`${this.name} bought a book for ₹${price}. Remaining balance: ₹${this.#balance}`);
        } else {
            console.log(`${this.name} does not have enough balance to buy the book.`);
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const studentsdetails = new Student("Arpit Singh", "CSE", 1);
studentsdetails.showStudent();

const p1 = new Person("Ankush");
p1.showPerson();

studentsdetails.deposit(500);   
studentsdetails.buybook(200);   
studentsdetails.buybook(400);   
console.log("Final Balance:", studentsdetails.getBalance());

