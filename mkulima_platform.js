 class Mkulima{
constructor(farms,products,orders){
  this.farms=farms
  this.products=products
  this.orders=orders
 }
addFarm(farmId,name,farmer,phoneNumber,address){
 var shamba={
    farmId:farmId,
    name:name,
    farmer:farmer,
    phoneNumber:phoneNumber,
    address:address
 }
    this.farms.unshift(shamba);
    return this.farms;
}
removeFarm(farmId){
    var shamba2=this.farms.find(shamba2=>shamba2.farmId==farmId)
 
   return delete this.farms[shamba2]
}
updateFarm(farmId,name,farmer,phoneNumber,address){
    var newShamba=this.farms.find(newShamba=>newShamba.address=="Nyeri")
    newShamba={
        farmId:farmId,
        name:name,
        farmer:farmer,
        phoneNumber:phoneNumber,
        address:address
    }
    return newShamba;
}
getFarm(farmId){
    var shamba3=this.farms.find(shamba3=>shamba3.farmId==farmId);
    return shamba3;
}

addProduct(productId,name,price){
    var items={
        productId:productId,
        name:name,
        price:price
    }
    this.products.unshift(items);
    return this.products;
}

removeProduct(productId){
    var items2=this.products.find(items2=>items2.productId==productId);
    return delete this.products[items2];  
}
updateProduct(productId,name,price){
    var newItems=this.products.find(newItems=>newItems.price==5400);
    newItems={
        productId:productId,
        name:name,
        price:price
    }
    return newItems;
}

getProduct(productId){
    var items3=this.products.find(items3=>items3.productId==productId);

    return items3;
}
printProduct(){
    for(var product of this.products){
        console.log(`${product.name},${product.price}`);
    }
}
calculateOrderCost(productId,quantity){
    var cost=this.products.find(cost=>cost.productId==productId);
    return cost.price*quantity;
}
    }

let farm=new Mkulima([],[],[],[])
console.log(farm.addFarm(3456,"Greens","Mwangi","0724690145","Nyeri"))
console.log(farm.addFarm(3570,"Nature","Maina","073568932","Kinangop"))
console.log(farm.addFarm(4598,"Fresh","Maina","073568932","Naivasha"))
console.log(farm.addFarm(3098,"Jiji","Maina","073568932","Nairobi"))

console.log(farm.removeFarm(3098))

console.log(farm.updateFarm(1234,"Salama","Meshack","0789654321","Molo"))

console.log(farm.getFarm(4598))

console.log(farm.addProduct(457,"Tomatoes",1000))
console.log(farm.addProduct(367,"Cabbages",5400))
console.log(farm.addProduct(789,"Kales",3000))
console.log(farm.addProduct(768,"Potatoes" ,4500))

console.log(farm.removeProduct(367))

console.log(farm.updateProduct(780,"Onions",3500))

console.log(farm.getProduct(789))

farm.printProduct()

console.log(farm.calculateOrderCost(789,5))
