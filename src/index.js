import "./styles.css";

const onClickAdd = () => {
  ///　テキストぼっくの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li作成
  const li = document.createElement("li");

  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // p作成
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(inputText));
  p.className = "todo-item";

  // divタグの子要素に各要素を設定
  div.appendChild(p);

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  console.log(div);

  //　未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
