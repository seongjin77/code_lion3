class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
        this.length = 0
    }

    length(){
        return this.length
    }
    
    toString(){
        let 순회용현재노드 = this.head

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next

        let 출력데이터 = ''
        for(let i = 0; i < this.length; i++){
            출력데이터 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return 출력데이터
    }

    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
        this.length += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)