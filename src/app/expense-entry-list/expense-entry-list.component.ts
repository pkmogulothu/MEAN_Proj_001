import { Component } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css']
})
export class ExpenseEntryListComponent {
  getExpenseEntries() : ExpenseEntry[] { 
    let mockExpenseEntries : ExpenseEntry[] = [ 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "Mcdonald", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "KFC", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1,
          item: "Pizza",
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "Mcdonald", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "KFC", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
       { id: 1, 
          item: "Pizza", 
          amount: Math.floor((Math.random() * 10) + 1), 
          category: "Food", 
          location: "KFC", 
          spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
          createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) 
       }, 
    ]; 
    return mockExpenseEntries; 
 }

 titles: string; 
expenseEntries: ExpenseEntry[]; 
selectedEntry : ExpenseEntry;

displayedColumns: string[] = ['item', 'amount', 'category', 'location', 'spendOn' ];

constructor(private restService : ExpenseEntryService) { } 
ngOnInit() { 
   this.titles = "Expense Entry List"; 
   // this.expenseEntries = this.getExpenseEntries(); 
   this.getExpenseItems();
}

getExpenseItems() {
   this.restService.getExpenseEntries()
   .subscribe( data => {this.expenseEntries = data ;
   console.log(data) });
}
isId=0;
UserClicked(entry: ExpenseEntry){
   this.selectedEntry = entry;

   alert(JSON.stringify(entry));
   alert(entry);
   alert('hello');
   var selectedEntryDiv = document.getElementById("selectedItem");
   selectedEntryDiv.innerHTML = entry.id + "<br>"   + entry.location + "<br>" + entry.amount + entry.item ;
   return entry.id;
}
}

