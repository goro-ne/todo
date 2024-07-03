import './style.css'

const onClickAdd = () => {
  // テキストボックスの内容を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 未完了リストに追加
  createIncompleteTodo(inputText);
};
/**
 * 未完了リストに追加
 * @param {*} todo string
 */
const createIncompleteTodo = (todo) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 対象を完了リストを移動
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  });
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    // 対象を未完了リストから削除
    const deleteTarget = deleteButton.closest("li");
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });
  deleteButton.innerText = "削除";

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);