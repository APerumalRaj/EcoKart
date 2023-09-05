import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  feeatureData = [ {
  id : 0,
  src : "https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=BdklqnfGUvf02-2CxYsw-AnrbE3e-B5zhE9JQILEEW4=",
  color :"#f6e3ff"
  }
 ,
 {
  id : 1,
  src: "https://media.istockphoto.com/id/1249496770/photo/running-shoes.jpg?s=612x612&w=0&k=20&c=b4MahNlk4LH6H1ksJApfnlQ5ZPM3KGhI5i_yqhGD9c4=",
  color :"#0281ff"
}
,
{
  id : 2,
  src: "https://media.istockphoto.com/id/623270836/photo/modern-sport-shoes.jpg?s=612x612&w=0&k=20&c=D7xOiyV3TMQgUuIqlVvutPo49gyMG9f5U82mcvuDc0Y=",
  color :"#b5d102"
}
,
{
  id : 3,
  src : "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg",
  color : "#3c988b"
}
];


}
