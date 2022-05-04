import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleMenu(){
			$('.menu-tabs .nav-link').on('click',function(){
				if($(this).hasClass('open'))
				{
					$(this).removeClass('open');
					$('.fixed-content-box').removeClass('active');
					$('.hamburger').show();
				}else{
					$('.menu-tabs .nav-link').removeClass('open');
					$(this).addClass('open');
					$('.fixed-content-box').addClass('active');
					$('.hamburger').hide();
				}
				//$('.fixed-content-box').toggleClass('active');
			});
			$('.close-fixed-content').on('click',function(){
				$('.fixed-content-box').removeClass('active');
				$('.hamburger').removeClass('is-active');
				$('#main-wrapper').removeClass('menu-toggle');
				$('.hamburger').show();
			});
		}

    handleNavigation = function() {
      $(".nav-control").on('click', function() {
  
        $('#main-wrapper').toggleClass("menu-toggle");
  
        $(".hamburger").toggleClass("is-active");
      });
    }
}
