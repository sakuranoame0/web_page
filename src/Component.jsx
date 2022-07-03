import React from "react";

const Component = () => {
  return (
    <>
      <div>
        <h1>お問い合わせフォーム</h1>
      </div>
      <div>
        お名前
        <span class="require">必須</span>
      </div>
      <div>
        <p>
          <input name="name" />
        </p>
      </div>
      <div>
        メールアドレス
        <span class="require">必須</span>
      </div>
      <div>
        <p>
          <input name="e-mail" />
        </p>
      </div>
      <div>
        会社名
        <span class="require">必須</span>
      </div>
      <div>
        <p>
          <input name="org_name" />
        </p>
      </div>
      <div>
        お問い合わせカテゴリ
        <span class="require">必須</span>
      </div>
      <div>
        <select>
          <option>お問い合わせ</option>
          <option>その他</option>
        </select>
      </div>
      <div>
        お問い合わせ内容
        <span class="require">必須</span>
      </div>
      <div>
        <p>
          <textarea cols="30" rows="5"></textarea>
        </p>
      </div>
      <div>
        <butten type="submit">送信</butten>
      </div>
    </>
  );
};

export default Component;
