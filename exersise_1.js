// 9.2. JSON vs XML
// Задание 1

const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const list = xmlDOM.querySelector("list");
const studentNode = list.querySelectorAll("student");
const nameNode = list.querySelectorAll("name");
const firstNode = list.querySelectorAll("first");
const secondNode = list.querySelectorAll("second");
const ageNode = list.querySelectorAll("age");
const profNode = list.querySelectorAll("prof");

const langAttr1 = nameNode[0].getAttribute('lang');
const langAttr2 = nameNode[1].getAttribute('lang');

let result = { list: [
    {
      name: firstNode[0].textContent + " " + secondNode[0].textContent,
      age: Number(ageNode[0].textContent),
      prof: profNode[0].textContent,
      leng: langAttr1
    },
    {
      name: firstNode[1].textContent + " " + secondNode[1].textContent,
      age: Number(ageNode[1].textContent),
      prof: profNode[1].textContent,
      leng: langAttr2
    }
  ]}
  
console.log(result)