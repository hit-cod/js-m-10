(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6U4H":function(e){e.exports=JSON.parse('[{"id":"XWaQXcbk0","name":"Baked potatoes","description":"Fragrant, nourishing, sizzling homemade potatoes stuffed with sour cream and bacon filling are a very simple and very effective way to feed a large number of people, spending practically no time or effort on cooking. If desired, you can replace ordinary potatoes with sweet potatoes, and add, for example, corn or sweet red pepper to the filling.","image":"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg","price":100,"ingredients":["Potato","Garlic","Sour cream","Bacon","Cheese","Green onions"]},{"id":"pkXzyRp1P","name":"Tomato Soup","description":"Maghreb tomato soup is especially common in Morocco and Tunisia. It is very easy to prepare and light in itself - based on tomatoes and chicken broth. In addition to them, the soup contains only the necessary spices, honey and lemon, which all together convey the same oriental flavor. The taste of the soup depends entirely on the quality of the tomatoes. The dish is complemented with fresh cilantro and individual lemon wedges.","image":"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg","price":150,"ingredients":["Tomatoes","Chicken bouillon","Honey","Parsley","Cilantro","Paprika"]},{"id":"QMom9q4Ku","name":"Pumpkin cream soup","description":"A portrait of this orange stew adorns the cover of Paul Bocuse\'s La Cuisine du Marché. Bocuse, who invented the so-called new cuisine, considered pumpkin as one of the foundations of this world order, and pumpkin soup as a kind of amniotic fluid of gastronomy.","image":"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png","price":100,"ingredients":["Pumpkin","Parsley","Cream","Brandy","Chicken bouillon"]},{"id":"k2k0UrjZG","name":"Red bean salad with curd cheese","description":"Tuscan salad, aged in the colors of the Italian flag. Just a few spoons are enough for a pleasant heaviness in the stomach. A very useful thing from the point of view of the morning, when it is difficult to cram large doses of biomass into yourself, but you still want to eat.","image":"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg","price":150,"ingredients":["Beans","Salt","Garlic","Olive oil","Cottage cheese","Red onion"]},{"id":"j2k8U1jZd","name":"Classic Greek salad","description":"This is a recipe from an old cookbook brought back from Greece. The secret of the salad is the freshest vegetables and good feta. Only olive oil is used for the salad, and spices such as oregano and basil are the hallmark of Greek cuisine.","image":"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg","price":350,"ingredients":["Olive oil","Lemon juice","Garlic","Tomatoes","Red onion","Chees Feta","Olives"]},{"id":"X2aQ7cvkd","name":"Muffins with blueberry and nutmeg","description":"The iconic berry, which they learned to produce all year round, in combination with a loose dough, is an absolutely safe option. Blueberry muffins have become a popular dessert in England and America, although they are of French origin. Anyway, these little sweet muffins, as we know them now, were meant to be like ordinary bread and tasted neutral.","image":"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg","price":170,"ingredients":["Olive oil","Wheat flour","Blueberry","Vanilla extract","Nutmeg"]},{"id":"nk3zy1pf8","name":"Azu","description":"One of the few dishes that, in the Soviet food tradition, have been awarded with personalized slicing. And to this day, in cookery and supermarkets, you can find beef that is cut into strips and sold as a basics. As for the dish itself, there are still disputes about how and with what to cook: use beef or lamb, ghee or ordinary butter, stew in a cauldron or stewpan with a thick bottom.","image":"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg","price":270,"ingredients":["Beef","Salted cucumbers","Potato","Meat broth","Garlic"]},{"id":"b7k2U13fd","name":"Fried rice with egg (chinese style)","description":"Fried rice is a fairly common ingredient in East Asian cuisine - in fact, you can cook from the leftovers of yesterday\'s dinner. Only well-cooled, pre-cooked rice, ideally standing overnight in the refrigerator, will not creep into a porridge when it gets into a hot wok and will not turn the contents of the pan into a clumsy, shapeless lump.","image":"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg","price":240,"ingredients":["Round rice","Mini zucchini","Grated ginger","Shiitake mushrooms","Soy sauce","Sesame oil"]}]')},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO");var a=t("xg7B"),o=t.n(a),i=t("6U4H"),s=document.querySelector(".theme-switch__toggle"),r=document.querySelector("body"),l="light-theme",c="dark-theme",d=localStorage.getItem("theme");d===c&&(s.checked=!0),r.classList.add(d),s.addEventListener("change",(function(){r.classList.toggle(l),r.classList.toggle(c),r.classList.contains(l)?localStorage.setItem("theme",l):localStorage.setItem("theme",c)}));var u=document.querySelector(".js-menu"),h=o()(i);u.insertAdjacentHTML("beforeend",h)},xg7B:function(e,n,t){var a=t("mp5j");e.exports=(a.default||a).template({1:function(e,n,t,a,o){var i,s,r=null!=n?n:e.nullContext||{},l=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="menu__item">\r\n    <article class="card">\r\n        <img src="'+d(typeof(s=null!=(s=u(t,"image")||(null!=n?u(n,"image"):n))?s:l)===c?s.call(r,{name:"image",hash:{},data:o,loc:{start:{line:4,column:18},end:{line:4,column:27}}}):s)+'" alt="'+d(typeof(s=null!=(s=u(t,"name")||(null!=n?u(n,"name"):n))?s:l)===c?s.call(r,{name:"name",hash:{},data:o,loc:{start:{line:4,column:34},end:{line:4,column:42}}}):s)+'" class="card__image" />\r\n        <div class="card__content">\r\n            <h2 class="card__name">'+d(typeof(s=null!=(s=u(t,"name")||(null!=n?u(n,"name"):n))?s:l)===c?s.call(r,{name:"name",hash:{},data:o,loc:{start:{line:6,column:35},end:{line:6,column:43}}}):s)+'</h2>\r\n            <p class="card__price">\r\n                $'+d(typeof(s=null!=(s=u(t,"price")||(null!=n?u(n,"price"):n))?s:l)===c?s.call(r,{name:"price",hash:{},data:o,loc:{start:{line:9,column:17},end:{line:9,column:26}}}):s)+'\r\n            </p>\r\n\r\n            <p class="card__descr">\r\n                '+d(typeof(s=null!=(s=u(t,"description")||(null!=n?u(n,"description"):n))?s:l)===c?s.call(r,{name:"description",hash:{},data:o,loc:{start:{line:13,column:16},end:{line:13,column:31}}}):s)+'\r\n            </p>\r\n\r\n            <ul class="tag-list">\r\n'+(null!=(i=u(t,"each").call(r,null!=n?u(n,"ingredients"):n,{name:"each",hash:{},fn:e.program(2,o,0),inverse:e.noop,data:o,loc:{start:{line:17,column:16},end:{line:19,column:25}}}))?i:"")+'            </ul>\r\n        </div>\r\n\r\n        <button class="card__button button">\r\n            Add to Cart\r\n        </button>\r\n    </article>\r\n</li>\r\n'},2:function(e,n,t,a,o){return'                <li class="tag-list__item">'+e.escapeExpression(e.lambda(n,n))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,o){var i;return null!=(i=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:29,column:9}}}))?i:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.d4e318bf41c5d96a22a8.js.map