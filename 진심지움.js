// fetch('http://test.api.weniv.co.kr/mall')
//     .then(data=>data.json())
//     .then(data=>{
//         data.forEach(element => {
//             console.log(element.productName);
//         });
//         return data
//     })
//     .then(data => {
//         data.map(element => {
//             if(element.price>= 10000) console.log(element);
//         })
//         return data
//     })
//     .then(data => {
//         const main = document.createElement('main');
//         document.body.appendChild(main);

//         data.map(element => {
//             const h2 = document.createElement('h2');
//             const p = document.createElement('p');
//             h2.innerText = element.productName;
//             p.innerText = element.price;
//             main.appendChild(h2);
//             main.appendChild(p);
//         })

//     })

// 1. 추가 then을 사용하여 7개의 항목 productName만 출력해보세요.(console.log)
// 2. 추가 then을 사용하여 7개의 항목 중 price가 10000원 이상 되는 product를 출력하는 코드를 작성해주세요.(console.log)
// 3. 추가 then을 사용하여 7개의 항목의 productName과 price를 각각 h2와 p태그로 생성하여(DOM) 화면에 출력해주세요.
// 4. error 처리를 해주세요.

// 간단한 투두 리스트기능 구현해보기
// 1. 해야할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.)
// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.
// 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스 (할일 목록을 프로퍼티로 가집니다.)
// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.

// class Todo {
//     constructor(내용,상태){
//         this.내용 = 내용,
//         this.상태 = 상태
//     }

//     changeState() {
//         this.상태 = !this.상태;
//     }
// }

// class TodoManager {
//     constructor(){
//         this.todoList = [];
//     }
//     addItem(내용,상태=false ){
//         const todo = new Todo(내용,상태)
//         this.todoList.push(todo)
//     }
//     getItems(){
//         return this.todoList;
//     }
//     getLeftTodoCount(){
//         return this.todoList.filter( item => {
//             item.상태 === false
//         }).length;
//     }
// }

// let user = new TodoManager();

// user.addItem('점심먹기');
// user.addItem('자기');

// user.getItems()

// user.getItems()[0].changeState();

// console.log(user.getLeftTodoCount());

class Todo {
    constructor(item, finished) {
        this.item = item;
        this.finished = finished;
    }

    changeState() {
        this.finished = !this.finished;
    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    addItem(item, finished = false) {
        const todo = new Todo(item, finished);
        this.todoList.push(todo);
    }

    getItems() {
        return this.todoList;
    }

    getLeftTodoCount() {
        return this.todoList.filter((item) => item.finished === false).length;
    }
}

let user = new TodoManager();

user.addItem("잠자기");
user.addItem("점심먹기");

console.log(user.getLeftTodoCount());
