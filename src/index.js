import "./styles.css";

const onClickAdd = () => {
  // inputの値を取得して、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";
  // TODOテキスト作成
  const p = document.createElement("p");
  p.innerText = inputText;
  div.appendChild(p);
  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  div.appendChild(completeButton);
  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  div.appendChild(deleteButton);
  // liタグにdivを格納;
  const li = document.createElement("li");
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
  // 完了ボタンを押した時
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    const addTarget = completeButton.parentNode;
    console.log(addTarget.firstElementChild);
    const addText = addTarget.firstElementChild.innerText;
    addTarget.innerText = null;
    const p = document.createElement("p");
    p.innerText = addText;
    addTarget.appendChild(p);
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    addTarget.appendChild(backButton);
    const li = document.createElement("li");
    li.appendChild(addTarget);
    document.getElementById("complete-list").appendChild(li);
  });
  // 削除ボタンを押した時
  deleteButton.addEventListener("click", () =>
    deleteFromIncompleteList(deleteButton.parentNode.parentNode)
  );
};
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

// 追加ボタンを押した時
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
