let sum_expenses = 0;
let expenses = [150,100,50,80];
for(let index in expenses){
	sum_expenses+=expenses[index];
}
console.log("total expenses spent this month: ", "#",sum_expenses);