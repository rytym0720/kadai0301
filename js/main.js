{
  document.addEventListener('DOMContentLoaded', function () {
    const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
    const addTaskTarget = document.getElementsByClassName('addTask-target')[0];
    const addTaskValue = document.getElementsByClassName('addTask-value')[0];
    let nextId = 0;
    const todos = [];

    //Taskとidを作成
    const addTask = (task, id, tableItem) => {
      let idSpanTd = document.createElement('td');
      let taskSpanTd = document.createElement('td');
      //要素内のHTML文章を変更する
      idSpanTd.innerText = id;
      taskSpanTd.innerText = task;
      //生成したテーブル要素をブラウザに表示する
      tableItem.append(idSpanTd);
      tableItem.append(taskSpanTd);
      addTaskTarget.append(tableItem);
      return (task, id)
    };
    //Button要素を生成する
    const addButton = (tableItem, removeButton, createButton) => {
      let createButtonTd = document.createElement('td');
      let removeButtonTd = document.createElement('td');
      //要素内のHTML文章を変更する
      createButton.innerText = '作業中';
      removeButton.innerText = '削除';
      //生成したテーブル要素をブラウザに表示する
      tableItem.append(createButtonTd);
      tableItem.append(removeButtonTd);
      addTaskTarget.append(tableItem);
      //生成したbutton要素を生成する
      createButtonTd.append(createButton);
      removeButtonTd.append(removeButton);
      return (tableItem, removeButton, createButton);
    };
    //追加ボタンをクリックした際にtd要素を追加する処理を行う
    addTaskTrigger.addEventListener('click', () => {
      const task = addTaskValue.value;
      const tableItem = document.createElement('tr');
      const removeButton = document.createElement('button');
      const createButton = document.createElement('button');
      addTask(task, nextId++, tableItem);
      addButton(tableItem, removeButton, createButton);
      addTaskValue.value = '';
      removeButton.addEventListener('click', delete_element, false);

      //ボタンを押したら作業中、完了中と変わる
      createButton.addEventListener('click', () => {
        if (createButton.textContent === "作業中") {
          createButton.textContent = "完了";
        } else {
          createButton.textContent = "作業中";
        }
      });
    })


    //チェックリスト用オブジェクト
    const todo = {
      task: 'taskSpanTd',
      status: '作業中'
    };
    todos.push(todo);

    // //削除ボタンを押した時にタスクを削除する
    function delete_element() {
      let tabletag = this.closest('tr');
      if (tabletag)
        tabletag.remove();
      updateId();

    }

    //　連番　再振り分け
    let updateId = () => {
      const tbody = document.getElementsByTagName("tbody")[0];
      const taskList = tbody.getElementsByTagName('tr');
      nextId = 0;
      Array.from(taskList, tr => {
        tr.getElementsByTagName('td')[0].textContent = nextId;
        nextId++

      });
    }
  });
}