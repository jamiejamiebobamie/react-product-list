Nice work. 

I like the extras and stretch challenges you put in. 

The styles are looking good and mostly working well. 

A UI improvement that could be applied is to allow a category to be deselected.
Currently you can select a category and see the products listed in that category. 
Clicking again on a selected category does nothing. **It would be good if clicking
a category toggled it's state**. 

Nice work here: {(props.cartItems.length>0 ? items : noItems)}

In the cart pricebar you have: 

```
let productPricesArray = []
for (let i = 0; i < props.cartItems.length; i++){
        productPricesArray.push(parseFloat(props.cartItems[i].price))
    }
```

Why not use Array.map()?

In item.js you have: 

```
<h1 className="buyItem1">{props.description}</h1>
<h1 className="buyItem2">click to add to cart</h1>
```

You are using an h1 here. H1 is the most important heading on a page. Probably best to use h1 for the name and of a product. 
Use another tag like p for the description and button for the click to buy. It's a button amiright? 

With two h1s it's hard for automated services to understand what you are talking about. If you want the text to look large 
style it that way. 
