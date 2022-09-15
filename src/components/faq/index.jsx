import React from "react";

const data = [
  {
    title: "> Легко",
    text: "делаем все в обход университетской бюрократии",
  },
  {
    title: "> Гибко",
    text: 'нет ничего "утвержденного", подстраиваемся под конкретные нужды и потребности менти',
  },
  {
    title: "> Душевно",
    text: "качественные ментор-менти отношения в неформальном стиле",
  },
  {
    title: "> Преемственно",
    text: "знания и опыт передаются от старшекурсников и выпускников к младшекурсникам",
  },
  {
    title: "> Понятно",
    text: "дельные, индивидуальные советы и компасное направление, которое внесёт ясность в то, что, как и зачем нужно делать ",
  },
];

export const FAQ = () => {
  return (
    <>
      <div className="faq">
        <h1>How it works?</h1>
        {data.map((item) => (
          <div className="faq-item">
            <div className="faq-item-title">{item.title}</div>
            <div className="faq-item-text">{item.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};
