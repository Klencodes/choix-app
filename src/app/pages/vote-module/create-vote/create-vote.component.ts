import { Component, OnInit } from '@angular/core';

declare var $: any
@Component({
  selector: 'app-create-vote',
  templateUrl: './create-vote.component.html',
  styleUrls: ['./create-vote.component.scss']
})
export class CreateVoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
			// SmartWizard initialize
			$('#smartwizard').smartWizard(); 
		});
  }

}
