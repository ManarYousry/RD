import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-fiber-form',
  templateUrl: './fiber-form.component.html',
  styleUrls: ['./fiber-form.component.css']
})
export class FiberFormComponent implements OnInit {

  constructor(private notificationService : NotificationService) { }

  ngOnInit(): void {
  }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    NameofSalesManager: new FormControl(''),
    Contact: new FormControl(''),
    ContactName: new FormControl('', Validators.required),
    CompanyName: new FormControl('', Validators.required),
    OtherInformation: new FormControl(''),
    Email: new FormControl('', Validators.email),
    Mobile: new FormControl('',[Validators.required, Validators.minLength(11)]),
    NumberofCircuits: new FormControl('', Validators.required),
    FullAddress: new FormControl('', Validators.required),
    ExchangeName: new FormControl('', Validators.required),
    NearestFixedLineNumber: new FormControl('', Validators.required),
    ExpectedUpgrades: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
    Signature: new FormControl('', Validators.required),
    ContractPeriod: new FormControl(''),
    CircuitProtection: new FormControl('1'),
    PathProtection: new FormControl('1'),
    PromisingArea: new FormControl('1'),
    E1: new FormControl(false),
    E3: new FormControl(false),
    DS3: new FormControl(false),
    STM1: new FormControl(false),
    STM4: new FormControl(false),
    STM16: new FormControl(false),
    Ethernet: new FormControl(false),
    IPLC: new FormControl(false),
    DOMESTIC: new FormControl(false),
   
  });
 



 
  onClear(){
    // this.service.form.reset();
    // this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
  }
  onSubmit(){
    // if(this.service.form.valid){
     
    //   this.service.form.reset();
    // this.service.initializeFormGroup();
     this.notificationService.success();
    this.onClose();

    }
  
  onClose(){
     //this.service.form.reset();
    // this.service.initializeFormGroup();
    // this.dialogRef.close();
    this.form.reset();
   //this._bottomSheetRef.dismiss();
    //event.preventDefault();

  }

}
