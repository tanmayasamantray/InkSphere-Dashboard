import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HeaderComponent } from "./components/commonComponents/header/header.component";
import { FooterComponent } from "./components/commonComponents/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent, FooterComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // firestore = inject(AngularFirestore);
  title = 'InkSphere-dashboard';
  ngOnInit(): void {
    // this.firestore.collection('users').valueChanges().subscribe(data=>{
    //   console.log(data);
    // })
  }
}
