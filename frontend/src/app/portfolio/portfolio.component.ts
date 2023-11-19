import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  data:any[]=[];
  frameworks:any[]=[];
  hobbies:any[]=[];

  constructor(private ApiService: ApiService){

  }

  ngOnInit(){
    this.fillData();
  }

  fillData(){
    this.ApiService.getData().subscribe(data=>{
      console.log(data);
      this.data = data;
      this.frameworks = data[0].frameworks;
      this.hobbies = data[0].hobbies;
    })
  }

  calculateWidth(name: string): string {
    const numericValue = parseFloat(name);
  
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
      return `${numericValue}%`;
    } else {

      return '0%';
    }
  }

}
