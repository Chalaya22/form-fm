var form=document.querySelector(".js-form");form.addEventListener("submit",onSubmit);var container=document.querySelector(".js-container");function onSubmit(e){e.preventDefault();var t=e.currentTarget.elements,n=t.num,o=t.typeList,s=(t.configList,t.colorsList),c=t.typeWashbasinList,a=t.bowlsrsList,l=(t.addOptions,{length:n.value,type:o.value,config:s.value,size:c.value,numOfBowls:a.value,addOptions:getCheckedCheckBoxes()});console.log(l),console.log(l.numOfBowls),console.log(l.config)}function getCheckedCheckBoxes(){var e=document.getElementsByClassName("checkbox");console.log(e);for(var t=[],n=0;n<e.length;n++)e[n].checked&&(t.push(e[n].value),console.log(e[n].value));return t}var typeWashbasinSelect=document.getElementById("typesWashbasin");document.addEventListener("change",(function(e){var t=e.target;"SELECT"==t.tagName&&("typesWashbasin3"===t.options[t.selectedIndex].id?document.getElementById("selectionSize").hidden=!1:document.getElementById("selectionSize").hidden=!0)}));
//# sourceMappingURL=index.f9be12ad.js.map