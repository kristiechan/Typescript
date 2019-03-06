import { Point } from './point';
import { LikeComponent } from './like.component';
let point = new Point(1,2);
point.draw();
let component = new LikeComponent(10,true);
component.onClick();
