import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];






@Component({
  selector: 'app-fiber',
  templateUrl: './fiber.component.html',
  styleUrls: ['./fiber.component.css']
})
export class FiberComponent implements OnInit {

  
  searchKey:string ='' ;
  editUsr: any;oldUsr: any;
  editdisabled:boolean=false;
  show:boolean= false;
  showNewRow:boolean=false;
  constructor(private titleService:Title, private note:NotificationService,private _bottomSheet: MatBottomSheet,private router:Router)
  // constructor(private dialog: MatDialog,public service:EmpService ,private titleService:Title ,private dialogService:DeleteServiceService )
  {
    //  this.searchKey='';
    this.titleService.setTitle("Fiber Service"); 
    
  }
 
  
  @ViewChild(MatSort) sort?:MatSort ;
  @ViewChild(MatPaginator) paginator?:MatPaginator ;
  displayedColumns: string[] = ['action','position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  // searchKey!:string;

  ngOnInit(){
    this.editUsr=0;
   
  }

  ngAfterViewInit() { 
  
    this.dataSource.sort = this.sort as MatSort;
    this.dataSource.paginator = this.paginator as MatPaginator;}

    onSearchClear(){
      this.searchKey ='';
      this.applyFilter();
    }
    applyFilter(){
      this.dataSource.filter=this.searchKey.trim().toLowerCase();
    }

//////////////import file
import(){
  this.show=true;

}
importEmpty(){
  this.show=true;

}
addNew(){
 

 this.router.navigate(['/fiberRequestForm']);
 
    



}



Upload(){
  this.show=false;
}




    onDelete(r:any){
     
      this.note.DeleteRow();
    }



///////////////////////////////tes2
editROw(r: any){
  

 
}
updateEdit(){
  //updateEdit
  this.cancelEdit();
  // this.userServ.updateUser(this.editUsr)
  //   .subscribe((data: any) => {
  //     this.editUsr= {};
  //     this.editdisabled = false;
  //     if(data.Data && data.Status==1){
  //       this.oldUsr= {};
  //       this.toastr.success(data.Message, 'Success!');
  //     }else{
  //       this.cancelEdit();
  //       this.toastr.error(data.Message, 'Error!');
  //     }
  //   }, err => {
  //       this.toastr.error("Please try after some time", 'Error!');
  //       this.editdisabled = false;
  //       this.cancelEdit();
  //   });
}
cancelEdit(){
  this.editdisabled = false;
  //cancel
  // this.editUsr= {};
  // if(this.oldUsr&& this.oldUsr.Id){
  //   this.dataListSubs = this.dataSource.usersData.pipe(
  //     distinctUntilChanged()
  //   ).subscribe((data)=>{
  //     if(data.length<=0){
  //     }else{
  //       let index = data.findIndex(item => item.Id === this.oldUsr.Id)
  //       data.splice(index, 1, this.oldUsr)
  //       this.dataSource.changeDataSource(data);
  //     }
  //   })
  //   this.dataListSubs.unsubscribe();
  //   console.log(this.oldUsr, 'this.oldUsr', this.dataSource.usersData)
  // }
}


}
