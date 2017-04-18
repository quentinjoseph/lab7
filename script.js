var list = [
{
  name:'bread',
  price:2.55,
},
{
  name:'cheese',
  price:2.25,
},
{
  name:'steak',
  price:15.65,
},
{
  name:'apples',
  price:2.55,
},
{
  name:'potatoes',
  price:3.49,
},
{
  name:'oranges',
  price:5.00,
},
{
  name:'chicken',
  price:9.54,
},
{
  name:'popcorn',
  price:6.89,
},
{
  name:'eggs',
  price:2.55,
},
{
  name:'notepad',
  price:3.50,
},
]
var total=0;
var totalTax=0;
list.forEach(function(itm){
  console.log(itm.name + " " +itm.price);
  total+=itm.price;
  totalTax+=itm.price*1.06;

});
  console.log("sub-total " + total);
  console.log("your total after tax " + totalTax.toFixed(2));
  console.log("The total tax you paid is " + (totalTax-total).toFixed(2));
