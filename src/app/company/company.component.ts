import { Component, OnInit } from '@angular/core';
import { Company } from './company.domain';
import { CompanyService } from './company.service';
import { CompanyGlobalVar } from '../globals';
import { State } from './company.domain';
import { city_state } from '../city_state';
import { status } from './company_status';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  error: boolean = false;
  errorMessage: string = "";
  success: boolean = true;
  company: Company = new Company();

  //state Code logic - begin
  states: any[] = [];
  selectedStateDistricts: String[] = [];
  selectedStateCode: string = "";
  selectedStateName: string = "";
  selectedState: State = new State();
  selectedCity: String = "";
  //state Code logic - end
  newCompany: string = ""

  constructor(private route: ActivatedRoute, private companyService: CompanyService,
    public companyGlobalVar: CompanyGlobalVar) {
    this.route.params.subscribe(params => {
      this.newCompany = params['newCompany']
      console.log(this.newCompany);
    });
  }

  ngOnInit() {
    //state Code logic - begin
    this.states = city_state.states;
    //this.getStates();
    //state Code logic - end
    this.success = false;
    this.error = false;
    if (this.newCompany === "selected") {
      this.getCompany();
    }

  }

  getCompany(): void {
    this.success = false;
    this.error = false;
    this.companyService.getCompany()
      .subscribe(
        company => {
          this.company = company;
          //State Code logic - begin
          if (company) {
            this.selectedStateName = company.state;
            if (company.state) {
              this.selectedState = this.states.find(states => states.state === company.state);
              this.selectedStateDistricts = this.selectedState.districts;
            }
            this.selectedStateCode = company.stateCode;
            this.selectedCity = company.city;
          }
          //state Code logic - end

          if (this.company.gstNo != "") {
            this.companyGlobalVar.gstNo = this.company.gstNo;
          } else {
            this.companyGlobalVar.gstNo = "";
          }
        },
        err => {
          this.error = true;
          this.errorMessage = "Error occured please contact administrator";
        }
      )

  }


  submitCompany(): void {

    this.success = false;
    this.error = false;
    //state Code logic - begin
    this.company.state = this.selectedStateName;
    this.company.stateCode = this.selectedStateCode;
    this.company.city = this.selectedCity;
    //state Code logic - end

    this.companyService.save(this.company)
      .subscribe(
        company => {
          this.company = company;
          this.getCompany();
          this.success = true;
        },
        err => {
          this.error = true;
          this.errorMessage = "Error occured please contact administrator";
        }
      )
  }


  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var fileContents: string = "";
    let self = this;
    myReader.readAsDataURL(file);
    myReader.onloadend = function (e) {
      self.company.logoImg = myReader.result as string;
    }
  }

  onFileChange($event): void {
    this.readThis($event.target);
  }


  //state Code logic
  getStates(): void {
    this.success = false;
    this.error = false;
    this.companyService.getStateCodes()
      .subscribe(
        resp => {
          this.states = resp.states;
          //console.log(this.states);
        },
        err => {
          this.error = true;
          this.errorMessage = "Error occured please contact administrator";
        }
      )

  }

  //state Code logic
  loadSelectedStates(): void {
    let selectedState;
    //console.log(this.selectedStateName);
    selectedState = this.states.find(states => states.state === this.selectedStateName);
    //console.log(selectedState);
    if (selectedState) {
      this.selectedState = selectedState;
      this.selectedStateCode = selectedState.code;
      this.selectedStateDistricts = selectedState.districts;
    }

  }


}
