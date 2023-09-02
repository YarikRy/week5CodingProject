class ShoppingList{
    constructor(name){ //Made a constructor to hold the name of the new Shopping List and added an empty array to hold new products added to the list
        this.name = name
        this.cart = []
    }

    addProduct(product){ //Made a method to add new products to the list 
        this.cart.push(product)
    }

    decribe(){ //Made a method to describe what you have in the list so far 
        let cartContent = ''

        for(let i = 0; i < this.cart.length; i++){
            cartContent += this.cart[i].name + "\n"
        }
        return cartContent
    }
}

class Menu{ //Made a new class Menu that has a empty shopping list array and the selected shopping list which is set to null
    constructor(){
        this.shoppingList = []
        this.selectedShoppingList = null
    }
    start(){ //The start method is 
        let selection = this.showMainMenuOptions() 

        while (selection != 0) { //gives the user options to pick from and calls on the method to which a number is assigned to
            switch(selection){
                case '1' :
                    this.createShoppingList()
                    break
                case '2' : 
                    this.viewShoppingList()
                    break
                case '3' :
                    this.deleteShoppingList()
                    break
                case '4' :
                    this.displayShoppingList()
                    break
                case '5' :
                    this.addToShoppingList()
                    break
                default :
                    selection = 0
            }
            selection = this.showMainMenuOptions();
        }

        alert('Thank you for shopping with us!') //if the user doesnt pick anything or leaves it tells the "Thank you for shopping with us!"
    }

    showMainMenuOptions(){ //shows the prompt to select from the options below
        return prompt(`
         0) Exit
         1) Create Shopping List
         2) View Shopping List
         3) Delete Shopping List
         4) Display Shopping List
        `)
    }

    displayShoppingList(){ //makes an empty string and adds the name of each shopping list that was created and alerts the user at the end with all the shopping lists
        let shoppingList = ''
        for (let i = 0; i < this.shoppingList.length; i++){
            shoppingList += i + ') ' + this.shoppingList[i].name + '\n'
        }
        alert(shoppingList)
    }

    createShoppingList(){ //prompts the user to enter a name for the new shopping list then using the ShoppingList class that was previously created makes a new object with the name given and pushes it to the empty shoppinglist array in the menu object
        let name = prompt('Enter name for the new shopping list.')
        this.shoppingList.push(new ShoppingList(name))
    }

    viewShoppingList(){ // prompts the user to enter the number of the list the user wants to look at and gives them the shopping list name
        let index = prompt('Enter the number of the shopping list you wish to view:')
        if (index > -1 && index < this.shoppingList.length){
            this.selectedShoppingList = this.shoppingList[index]
            let description = 'Shopping List Name: ' + this.selectedShoppingList.name + '\n'
            return alert(description)
        }
    }

    deleteShoppingList(){ // prompts the user to enter the number of the shopping list that they want to delete and deletes it from the shopping list array
        let index = prompt('Enter the number of the shopping list you wish to delete:')
        if (index > -1 && index < this.shoppingList.length){
            this.selectedShoppingList = this.shoppingList[index]
            this.shoppingList.splice(index, 1)
        }
    }
}

let menu = new Menu()
menu.start()
