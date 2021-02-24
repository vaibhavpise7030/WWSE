function commented()
{
  let user_text = document.querySelector(".container").children[0].children[1].value;        

  let new_element = document.querySelector(".sample_commment").cloneNode(true);
  new_element.style.visibility="visible";
  let date = new Date();

  
  new_element.children[0].textContent= user_text;
  new_element.children[1].textContent= date.toDateString();


  let parent_element = document.querySelector(".container");
  parent_element.appendChild(new_element);      

  document.querySelector("#text1").value = "";
};