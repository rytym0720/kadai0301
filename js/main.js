
'use strict';
document.addEventListener('DOMContentLoaded', function() {
    // 必要なDOM要素を取得。
          const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
          const addTaskTarget = document.getElementsByClassName('addTask-target')[0];
          const addTaskValue = document.getElementsByClassName('addTask-value')[0];  
          //ID用のインデックスを定義
    let nextId = 0;
    const addTask = (task,id) => {
        // 表のタグを生成する
        const tableItem=document.createElement('thead');
        const addButton = document.createElement('button');
        const removeButton = document.createElement('button');
        addButton.style.margin = "5px"; 
        removeButton.style.margin ="5px"; 
        // それぞれ作業中、削除という言葉をボタンに入れる
        addButton.innerText = '作業中';
        removeButton.innerText = '削除';
        //ボタンを押したら以下の作業をする
        removeButton.addEventListener('click', () => removeTask(removeButton));
        // IDを表示するspan要素を作成して tableItem に追加
        const idSpan = document.createElement('span');
        idSpan.innerText = id;
        idSpan.style.marginRight = "20px"; 
        tableItem.append(idSpan);
    
        const taskSpan = document.createElement('span');
        taskSpan.style.width = "60px";  
        taskSpan.style.display = "inline-block";
        taskSpan.style.overflow = "hidden"; 
        taskSpan.style.textOverflow = "ellipsis";
        taskSpan.innerText = task;
        taskSpan.title = task; 
        tableItem.append(taskSpan);
        
    
         //入力タスクを表示
         addTaskTarget.appendChild(tableItem);   
        // 作業中ボタンを追加
        tableItem.appendChild(addButton);    
        // 削除ボタンを追加
        tableItem.appendChild(removeButton);
    
    };
    // 追加ボタンに対して、タスク登録イベントを設定
    addTaskTrigger.addEventListener('click', event => {
        const task = addTaskValue.value;
        addTask(task,nextId ++);
        addTaskValue.value = '';
    });
});