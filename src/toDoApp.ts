
interface ToDoItem {
    id: number,
    title: string,
    complete: boolean
}

enum filterInput {
    All = "All",
    Pending = "Pending",
    Done = "Done"
}


class ToDoList {
    
    public taskList: ToDoItem[]=[];

    ToDoList () {
        this.taskList=[];
    }

    addTask(task: ToDoItem):void {
        this.taskList.push(task);
        return;
    }

    removeTask(task: ToDoItem):void {
        this.taskList = this.taskList.filter((i)=> i.id !== task.id)
        return;
    }

    markAsRead(task: ToDoItem): void {
        this.taskList = this.taskList.map((i) => {
            if(task.id === i.id)
                return {
                    id: i.id,
                    title: i.title,
                    complete: !i.complete
                }
            return i;
        })
    }

    showTask  (arg: filterInput): ToDoItem[] {
        if(arg == "Pending")
            return this.taskList.filter((i)=>i.complete===false)

        else if(arg === "Done")
            return this.taskList.filter((i)=>i.complete===true)
        
        else 
            return this.taskList
    }

}

const obj:ToDoList = new ToDoList();

obj.addTask({
    id:1,
    title: "todo 1",
    complete: false
})

obj.addTask({
    id:2,
    title: "todo 2",
    complete: true
})

obj.addTask({
    id:2,
    title: "todo 2",
    complete: false
})

console.log(
    obj.showTask(filterInput.Done)
)
