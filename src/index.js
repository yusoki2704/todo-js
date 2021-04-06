import "./styles.css";

const onClickAdd = () => {
  ///　テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li作成
  const li = document.createElement("li");

  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // p作成
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(text));
  p.className = "todo-item";

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了から削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // li作成
    const li = document.createElement("li");

    // p作成
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(text));
    p.className = "todo-item";

    // buttonタグ作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    // liの子要素にdivを設定
    li.appendChild(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了から削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  //　未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
