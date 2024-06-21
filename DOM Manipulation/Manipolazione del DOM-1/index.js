const addProduct = () => {
  const input = document.getElementsByTagName("input")[0];
  const inputValue = input.value;

  const li = document.createElement("li");
  li.innerText = inputValue;

  const input1 = document.createElement("input");
  input1.type = "checkbox";

  li.appendChild(input1);

  const ul = document.getElementsByTagName("ul")[0];
  ul.appendChild(li);
};
