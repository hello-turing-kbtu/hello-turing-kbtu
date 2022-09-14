import React from "react";

const data = [
    {
        title: "> Легко",
        text: "делаем все в обход университетской бюрократии"
    },
    {
        title: "> Гибко",
        text: 'нет ничего "утвержденного", подстраиваемся под конкретные нужды и потребности менти'
    }
]

export const FAQ = () => {
  return (
    <>
      <div className="faq">
        <h1>How it works?</h1>
        <div className="faq-items"></div>
      </div>
    </>
  );
};
