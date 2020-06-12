
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
    const tableItem=document.createElement('tbody');
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');
    // それぞれ作業中、削除という言葉をボタンに入れる
    addButton.innerText = '作業中';
    removeButton.innerText = '削除';
    //ボタンを押したら以下の作業をする
    removeButton.addEventListener('click', () => removeTask(removeButton));
    // IDを表示するspan要素を作成して tableItem に追加
    const idSpan = document.createElement('span');
    idSpan.innerText = id;
    tableItem.append(idSpan);
    const taskSpan = document.createElement('span');
    taskSpan.innerText = task;
    tableItem.append(task);

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
