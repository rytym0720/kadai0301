  
        document.addEventListener('DOMContentLoaded', function() {
            const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
            const addTaskTarget = document.getElementsByClassName('addTask-target')[0];
            const addTaskValue = document.getElementsByClassName('addTask-value')[0];  
            let nextId = 0;

        const addTask = (task,id) => {
            //テーブル要素を生成する　td要素を作る
            const tableItem = document.createElement('tr');
            const addButtonTd = document.createElement('td');
            const idSpanTd = document.createElement('td');
            const taskSpanTd = document.createElement('td');
            const removeButtonTd = document.createElement('td');

            //Button要素を生成する
            const addButton = document.createElement('button')
            const removeButton = document.createElement('button')

            //要素内のHTML文章を変更する
            addButton.innerText = '作業中';
            removeButton.innerText = '削除';
            idSpanTd.innerText = id;
            taskSpanTd.innerText = task;

            //生成したテーブル要素をブラウザに表示する
            tableItem.append(idSpanTd);
            tableItem.append(taskSpanTd);
            tableItem.append(addButtonTd);
            tableItem.append(removeButtonTd);
            addTaskTarget.appendChild(tableItem);

            //生成したbutton要素を生成する
            addButtonTd.append(addButton);
            removeButtonTd.append(removeButton);       
        };

        const todos = [
            {task: "test", status: "作業中"},
            {task: "test2", status: "作業中"},
            {task: "test3", status: "作業中"},
        ];
        const todo = {
            task: "入力されたタスクの内容",
            status: "作業中"
        };
        todos.push(todo);

        addTaskTrigger.addEventListener('click',() => {
            const task = addTaskValue.value;
            addTask(task,nextId ++);
            addTaskValue.value = '';
        });
});