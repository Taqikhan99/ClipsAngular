import { Component, OnInit,ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})
export class TabsContainerComponent implements OnInit,AfterContentInit {

//get the projected content, in our case Tab component
@ContentChildren(TabComponent) tabs : QueryList<TabComponent>=new QueryList()

  constructor() { }

  ngOnInit(): void {
    //check if u are grabbing the tab comnponetn
    console.log(this.tabs) //we receive an empty obj herre because projected content initializes in ng AfterContentInit lifecycle method
  }
  ngAfterContentInit(): void {

    //here we will get our both tabs component inside the result property.
    console.log('After: ',this.tabs) 
    
    const activeTabs= this.tabs.filter(
      tab=>tab.active
    )

    if(!activeTabs || activeTabs.length===0){
      this.selectTab(this.tabs!.first) //this operator tells compiler that atleast 1 tab is available
    }
    
  }

  selectTab(tab:TabComponent){
    this.tabs?.forEach(t=>{t.active=false})
    tab.active=true; 

    return false;

  }
}
