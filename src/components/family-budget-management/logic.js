export class FamilyBudgetLogic {

    income = []
    outcome = []
    currentBudget = 0 

    addEntry(value, type) {
        console.log(type)
       
            if (type === 'income') {
                this.income.push(value)
                this.currentBudget += Number(value)
            } else {
                this.outcome.push(value)
                this.currentBudget -= Number(value)
            }   
    }
}  