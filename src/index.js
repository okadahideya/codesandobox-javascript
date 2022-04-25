const onClickaAdd = () => {
  // テキストBoxの値取得、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createInNolist(inputText);
};

//未完了list指定の要素を削除
const deleteFromlist = (target) => {
  document.getElementById("no-list").removeChild(target);
};

//未完了listに追加する関数
const createInNolist = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // buutonの完了、削除
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグを未完了listから削除
    deleteFromlist(completeButton.parentNode);
    // const deleteTarget = completeButton.parentNode;
    // document.getElementById("no-list").removeChild(deleteTarget);

    //完了listに追加する要素
    const addTarget = completeButton.parentNode;

    //Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //押された戻すボタン
      const deleteTarget = backbutton.parentNode;
      document.getElementById("yes-list").removeChild(deleteTarget);

      //テクスト取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createInNolist(text);
    });

    //divダグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了listに追加
    document.getElementById("yes-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを未完了listから削除
    deleteFromlist(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("no-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のTODO追加
  document.getElementById("no-list").appendChild(div);
};

//追加ボタン
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickaAdd());
