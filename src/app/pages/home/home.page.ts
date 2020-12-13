import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	imagePlay = 'assets/images/icon/play.png';

  	constructor(private router: Router) {
  	
  	}

  	// Controller Functions
	onPress($event) {
		if(this.imagePlay == 'assets/images/icon/play_focus.png')
			this.imagePlay = 'assets/images/icon/play.png';
		else
	    	this.imagePlay = 'assets/images/icon/play_focus.png';
	}

	goToPlay(){
		this.imagePlay = 'assets/images/icon/play_focus.png';
		this.router.navigate(['/game'])
	}


}
