See the contents of this angular library

Create an Overview Installation Usage CSS Customization and Reference Section for this code




# FileName: \_color_pallete.scss

@use "sass:string";

@function to-number($value) {
    @if type-of($value) == 'number' {
      @return $value;
    } @else if type-of($value) != 'string' {
      $_: log('Value for `to-number` should be a number or a string.');
    }

    $result: 0;
    $digits: 0;
    $minus: str-slice($value, 1, 1) == '-';
    $numbers: ('0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9);

    @for $i from if($minus, 2, 1) through str-length($value) {
      $character: str-slice($value, $i, $i);

      @if not (index(map-keys($numbers), $character) or $character == '.') {
        @return to-length(if($minus, -$result, $result), str-slice($value, $i))
      }

      @if $character == '.' {
        $digits: 1;
      } @else if $digits == 0 {
        $result: $result * 10 + map-get($numbers, $character);
      } @else {
        $digits: $digits * 10;
        $result: $result + map-get($numbers, $character) / $digits;
      }
    }

    @return if($minus, -$result, $result);;
  }

@function convert-to-rgb($color) {
  $channels: string.split($color, ",");
  @return rgb(to-number(nth($channels, 1)),to-number(nth($channels, 2)),to-number(nth($channels, 3)));
}


$wml-button-white: "255,255,255";
$wml-button-black: "0,0,0";
$wml-button-primary: "144,238,144";
$wml-button-secondary:"112,112,112";

$wml-button-primary-gradient:   radial-gradient(farthest-corner at 100% 0px,convert-to-rgb($wml-button-primary) 0%,convert-to-rgb($wml-button-secondary) 150%);
$wml-button-secondary-gradient: radial-gradient(farthest-corner at 100% 0px,grey 0%,convert-to-rgb($wml-button-black) 150%);


:root{
  --wml-button-white:#{$wml-button-white};
  --wml-button-black:#{$wml-button-black};
  --wml-button-primary:#{$wml-button-primary};
  --wml-button-secondary:#{$wml-button-secondary};

  --wml-button-primary-gradient: #{$wml-button-primary-gradient};
  --wml-button-secondary-gradient: #{$wml-button-secondary-gradient};

}

# FileName: \_common.scss

$wml-button-border-radius0:calc(8/16 * 1rem);
$wml-button-border-radius1:calc(10/16 * 1rem);
$wml-button-border-radius2:calc(20/16 * 1rem);

# FileName: \_media_queries.scss

/***********************************************
 Media query variables
***********************************************/

/* media queries */
$mobileFont:                  'only screen and (max-width: 600px)';
$mobile:              		    'only screen and (max-width: 767px)';
// $mobile:              		    'only screen and (max-width: 899px)';
$smallMobile:				    'only screen and (max-width: 320px)';
$mediumMobile:				    'only screen and (max-width: 374px)';
$tablet:              		    'only screen and (min-width: 768px) and (max-width: 1199px)';
$tabletPortrait:      		    'only screen and (min-width: 768px) and (max-width: 991px)';
$tabletPortraitDown:  		    'only screen and (max-width: 991px)';
$tabletLandscape:     		    'only screen and (min-width: 992px) and (max-width: 1199px)';
$smallDesktop:             	    'only screen and (min-width: 992px)';
$tabletLandscapeDown: 		    'only screen and (max-width: 1199px)';
$desktop:             		    'only screen and (min-width: 1200px)';
$notMobile:           		    'only screen and (min-width: 768px)';
$laptop:              		    'only screen and (min-width: 1200px) and (max-width: 1440px)';
$laptopDown:          		    'only screen and (max-width: 1440px)';
$laptopTablet:        		    'only screen and (min-width: 768px) and (max-width: 1440px)';
$laptopTabletLandscape:         'only screen and (min-width: 992px) and (max-width: 1440px)';
$largeDesktop:        		    'only screen and (min-width: 1441px)';
$largeDesktopDown:        	    'only screen and (max-width: 1599px)';
$xlDesktop:           		    'only screen and (min-width: 1600px)';
$xlDesktopDown:           	    'only screen and (max-width: 1919px)';
$xxlDesktop:           		    'only screen and (min-width: 1920px)';

$xxxlDesktop:           	    'only screen and (min-width: 2000px)';
$dekstopDownForCampaigns:	    'only screen and (max-width: 1250px)';

/* media queries for header */
$tabletForHeader:              	'only screen and (min-width: 768px) and (max-width: 1230px)';
$tabletLandscapeForHeader:     	'only screen and (min-width: 992px) and (max-width: 1230px)';
$tabletLandscapeDownForHeader: 	'only screen and (max-width: 1230px)';
$desktopForHeader:             	'only screen and (min-width: 1231px)';
$laptopForHeader:              	'only screen and (min-width: 1231px) and (max-width: 1440px)';


:root {
  --wml-button-mobile-font: #{$mobileFont};
  --wml-button-mobile: #{$mobile};
  --wml-button-small-mobile: #{$smallMobile};
  --wml-button-medium-mobile: #{$mediumMobile};
  --wml-button-tablet: #{$tablet};
  --wml-button-tablet-portrait: #{$tabletPortrait};
  --wml-button-tablet-portrait-down: #{$tabletPortraitDown};
  --wml-button-tablet-landscape: #{$tabletLandscape};
  --wml-button-small-desktop: #{$smallDesktop};
  --wml-button-tablet-landscape-down: #{$tabletLandscapeDown};
  --wml-button-desktop: #{$desktop};
  --wml-button-not-mobile: #{$notMobile};
  --wml-button-laptop: #{$laptop};
  --wml-button-laptop-down: #{$laptopDown};
  --wml-button-laptop-tablet: #{$laptopTablet};
  --wml-button-laptop-tablet-landscape: #{$laptopTabletLandscape};
  --wml-button-large-desktop: #{$largeDesktop};
  --wml-button-large-desktop-down: #{$largeDesktopDown};
  --wml-button-xl-desktop: #{$xlDesktop};
  --wml-button-xl-desktop-down: #{$xlDesktopDown};
  --wml-button-xxl-desktop: #{$xxlDesktop};
  --wml-button-xxxl-desktop: #{$xxxlDesktop};
  --wml-button-dekstop-down-for-campaigns: #{$dekstopDownForCampaigns};
  --wml-button-tablet-for-header: #{$tabletForHeader};
  --wml-button-tablet-landscape-for-header: #{$tabletLandscapeForHeader};
  --wml-button-tablet-landscape-down-for-header: #{$tabletLandscapeDownForHeader};
  --wml-button-desktop-for-header: #{$desktopForHeader};
  --wml-button-laptop-for-header: #{$laptopForHeader};
}

# FileName: \_spacing.scss

$wml-button-spacing0: calc(1/16* 1rem);
$wml-button-spacing1: calc(2/16* 1rem);
$wml-button-spacing2: calc(4/16* 1rem);
$wml-button-spacing3: calc(8/16* 1rem);
$wml-button-spacing4: calc(12/16* 1rem);
$wml-button-spacing5: calc(16/16* 1rem);
$wml-button-spacing6: calc(24/16* 1rem);
$wml-button-spacing7: calc(32/16* 1rem);
$wml-button-spacing8: calc(48/16* 1rem);
$wml-button-spacing9: calc(64/16* 1rem);
$wml-button-spacing10: calc(72/16* 1rem);
$wml-button-spacing11: calc(96/16* 1rem);
$wml-button-spacing12: calc(128/16* 1rem);
$wml-button-spacing13: calc(192/16* 1rem);
$wml-button-spacing14: calc(256/16* 1rem);
$wml-button-spacing15: calc(384/16* 1rem);
$wml-button-spacing16: calc(512/16* 1rem);




# FileName: \src\lib\models.ts

export type WMLButtonIconType = "img" |"icon"
export enum WMLButtonPropsTypeEnum{
  PRIMARY,SECONDARY,TERTIARY
}

# FileName: \src\lib\wml-button-one\wml-button-one\wml-button-one.component.global.scss

#root wml-button-one{

}

# FileName: \src\lib\wml-button-one\wml-button-one\wml-button-one.component.html

<button  *ngIf="props.btnIsPresent && !props.link && !props.routerLink"  (click)="props.click($event)" [class]="props.btnClass" [ngStyle]="props.btnStyle">
  <ng-container *ngIf="props.iconIsPresent" >
    <img *ngIf="props.iconType === 'img'" [src]=props.iconSrc [alt]="props.iconAlt" [class]="props.iconClass" />
    <i *ngIf="props.iconType === 'icon'"  [class]="props.iconClass"></i>
  </ng-container>
  <span [ngStyle]="props.style" [class]="props.class">{{ props.text | translate}}</span>
</button>

<a [href]="props.link" *ngIf="props.btnIsPresent && props.link"    [class]="props.btnClass + ' ' + classPrefix('MainLink0')" [ngStyle]="props.btnStyle">
  <ng-container *ngIf="props.iconIsPresent" >
    <img *ngIf="props.iconType === 'img'" [src]=props.iconSrc [alt]="props.iconAlt" [class]="props.iconClass" />
    <i *ngIf="props.iconType === 'icon'"  [class]="props.iconClass"></i>
  </ng-container>
  <span [ngStyle]="props.style" [class]="props.class">{{ props.text | translate}}</span>
</a>

<a [routerLink]="props.routerLink" *ngIf="props.btnIsPresent && props.routerLink"    [class]="props.btnClass + ' ' + classPrefix('MainLink0')" [ngStyle]="props.btnStyle">
  <ng-container *ngIf="props.iconIsPresent" >
    <img *ngIf="props.iconType === 'img'" [src]=props.iconSrc [alt]="props.iconAlt" [class]="props.iconClass" />
    <i *ngIf="props.iconType === 'icon'"  [class]="props.iconClass"></i>
  </ng-container>
  <span [ngStyle]="props.style" [class]="props.class">{{ props.text | translate}}</span>
</a>



# FileName: \src\lib\wml-button-one\wml-button-one\wml-button-one.component.phone.scss

#root wml-button-one{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-button-one\wml-button-one\wml-button-one.component.scss

@import "../../../../styles.scss";


.WMLButtonOne{
  &Main{


    &Button,&Link {
      @for $i from 0 through 2 {
        &#{$i} {

          @include WMLButtonMainButton0;
          @include WMLCursorPointer0;
          transition:  all $wml-transition-0;
        }
      }
    }
  }
}



// :host {

  .WMLButtonOneView{
    display: block;

    .WMLButtonOne{
      &Main{
        &Pod{

        }

        &Link {
          &0 {
            display: inline-block;
            text-align: center;
            text-decoration: none;
            border: none; /* Ensure there is no border */

            // hope this does not change for some reason
            span{
              font-size: calc((10.6/10.6 *(13.3 / 10.6)) * 1em) ;
            }
          }
        }

        &Button {


          &0 {
            background: rgba(var(--wml-button-primary));
            border:calc(3/16 * 1rem) solid rgba(var(--wml-button-black));
            &:hover{
              background: rgba(var(--wml-button-secondary));
              border:calc(3/16 * 1rem) solid rgba(var(--wml-button-white));
              .WMLButtonOneMainButton0Text0 {
                color:rgba(var(--wml-button-white))
              }
            }

            &Text {
              &0 {
                color:rgba(var(--wml-button-black))
              }
            }

          }

          &1 {
            background: $wml-gradient-0;

            border:calc(3/16 * 1rem) solid rgba(var(--wml-button-white));

            &Text {
              &0 {
                color:rgba(var(--wml-button-white))
              }
            }

            &:hover{
              background: rgba(var(--wml-button-primary));
              border:calc(3/16 * 1rem) solid rgba(var(--wml-button-black));
              .WMLButtonOneMainButton1Text0 {
                color:rgba(var(--wml-button-black));
              }
            }


          }

          &2 {
            background-color: rgba(var(--wml-button-black));
            border:calc(3/16 * 1rem) solid rgba(var(--wml-button-primary));
            &Text {
              &0 {
                color:rgba(var(--wml-button-primary))
              }
            }
            &:hover{
              background: rgba(var(--wml-button-secondary));
              border:calc(3/16 * 1rem) solid rgba(var(--wml-button-primary));
              .WMLButtonOneMainButton2Text0 {
                color:rgba(var(--wml-button-primary))
              }
            }
          }
        }

      }
      &Pod{

        &0{}
      }
    }
  }

// }

# FileName: \src\lib\wml-button-one\wml-button-one\wml-button-one.component.spec.ts

// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLButtonOneComponent } from './wml-button-one.component';
import { resetDeclarations } from '../test-utils/mock-declarations';


describe('WMLButtonOneComponent', () => {
  let cpnt: WMLButtonOneComponent;
  let fixture: ComponentFixture<WMLButtonOneComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    resetDeclarations()


    await wmlTestUtils.configureTestingModuleForComponents(WMLButtonOneComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLButtonOneComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLButtonOneView')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnDestroy",()=>{

    beforeEach(()=>{
      spyOn(cpnt.ngUnsub,'next')
      spyOn(cpnt.ngUnsub,'complete')
    })

    it(` when called |
     as appropriate |
     does the required action `,()=>{
        // act
        cpnt.ngOnDestroy();

        // assert
        expect(cpnt.ngUnsub.next).toHaveBeenCalled();
        expect(cpnt.ngUnsub.complete).toHaveBeenCalled();
    })
  })
});

# FileName: \src\lib\wml-button-one\wml-button-one\wml-button-one.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ViewEncapsulation   } from '@angular/core';
import { WMLButton, generateClassPrefix, updateClassString } from '@windmillcode/angular-wml-components-base';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import { WMLButtonIconType, WMLButtonPropsTypeEnum } from '../../models';

// misc
@Component({
  selector: 'wml-button-one',
  templateUrl: './wml-button-one.component.html',
  styleUrls: ['./wml-button-one.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLButtonOneComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
  ) { }

  classPrefix = generateClassPrefix('WMLButtonOne')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId?:string
  @Input('props') props: WMLButtonOneProps = new WMLButtonOneProps({})
  ngUnsub= new Subject<void>()

  listenForUpdate = ()=>{
    return this.props.updateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLButtonOneProps({
          ...this.props,
          ...(res ?? this.props)
        })
        this.cdref.detectChanges()
      })
    )

  }

  ngOnInit(): void {
    this.listenForUpdate().subscribe()
    this.props.cdref = this.cdref
    this.myId = this.props.id

    this.props.updateClassString = (...args)=>{
      updateClassString(this.props,"_class","_classList")(...args)
      this.cdref.detectChanges()
    }

    this.props.updateBtnClassString = (...args)=>{
      updateClassString(this.props,"_btnClass","_btnClassList")(...args)
      this.cdref.detectChanges()
    }

    this.props.updateIconClassString = (...args)=>{
      updateClassString(this.props,"_iconClass","_iconClassList")(...args)
      this.cdref.detectChanges()
    }


  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


// @ts-ignore
export class WMLButtonOneProps extends WMLButton {
  constructor(props:Partial<WMLButtonOneProps>={}){
    super()
    Object.assign(
      this,
      {
        ...props
      }
    )
    // TODO this needs to be here because typescript decided to be a pain
    // @ts-ignore
    if([null,undefined].includes( this.type) ){
      this.type = WMLButtonPropsTypeEnum.PRIMARY
    }
    this.updateBtnClasses(this.type)

  }

  private override  buttonClass =""
  private _btnClass:string = ""
  private _btnClassList:string[] = []
  get btnClass (){
    return this._btnClass
  }
  set btnClass(val){
    this.updateBtnClassString(val)
  }
  btnStyle:Partial<CSSStyleDeclaration> = {}
  btnIsPresent = true
  private _type =WMLButtonPropsTypeEnum.PRIMARY
  // @ts-ignore
  override get type(){
    return this._type
  }
  override set type(value:WMLButtonPropsTypeEnum){
    this.updateBtnClasses(value)
    this._type = value
  }
  iconType:WMLButtonIconType = "img"

  override text = "Click Me"

  updateBtnClassString=updateClassString(this,"_btnClass","_btnClassList")
  private updateBtnClasses(value:WMLButtonPropsTypeEnum){
    let val = {
      [WMLButtonPropsTypeEnum.PRIMARY]:"0",
      [WMLButtonPropsTypeEnum.SECONDARY]:"1",
      [WMLButtonPropsTypeEnum.TERTIARY]:"2"
    }[value]
    this.updateBtnClassString("WMLButtonOneMainButton"+val);
    this.class = "WMLButtonOneMainButton" + val +"Text0"
  }
  override click =(evt?)=>{
    alert("This button was clicked")
  }
  updateSubj = new Subject<Partial<WMLButtonOneProps>>()

  link?:string
  routerLink?: string
}



# FileName: \src\lib\wml-button-one\wml-button-one.module.ts




import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLButtonOneComponent } from './wml-button-one/wml-button-one.component';
import { RouterModule } from '@angular/router';

let cpnts= [
  WMLButtonOneComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLButtonOneNGXTranslateModule {

}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {

        provide: TranslateLoader,
        useFactory: ()=> new WMLNGXTranslateLoader(),
      }
    }),
  ],
  exports:[
    WMLButtonOneNGXTranslateModule
  ]
})
export class WMLButtonOneModule {

}




# FileName: \src\lib\wml-button-zero\wml-button-zero\wml-button-zero.component.global.scss

#root wml-button{

}

# FileName: \src\lib\wml-button-zero\wml-button-zero\wml-button-zero.component.html

<button [attr.id]="props.button.id"  (click)="props.button.click($event)" [class]="props.button.class" [ngStyle]="props.button.style">
  <ng-container *ngFor="let icon of props.icons">
    <ng-container *ngIf="icon.isPresent" >
      <img [attr.id]="icon.id" *ngIf="icon.type === 'img'" [src]=icon.src [alt]="icon.alt" [class]="icon.class" [ngStyle]="icon.style"/>
      <i   [attr.id]="icon.id" *ngIf="icon.type === 'icon'"  [class]="icon.class" [ngStyle]="icon.style"></i>
    </ng-container>
  </ng-container>
  <span
  *ngIf="props.text.isPresent"
  [attr.id]="props.text.id" [ngStyle]="props.text.style" [class]="props.text.class">{{ props.text.text! | translate}}</span>
</button>


# FileName: \src\lib\wml-button-zero\wml-button-zero\wml-button-zero.component.phone.scss

#root wml-button{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-button-zero\wml-button-zero\wml-button-zero.component.scss

@import "../../../../styles.scss";


:host {

  &.WMLButtonZeroView{
    display: block;

    .WMLButtonZero{
      &Main{
        &Pod{


        }

        &Button {
          @for $i from 0 through 2 {
            &#{$i} {
              @include WMLButtonMainButton0;
              @include WMLCursorPointer0;
              transition:  all $wml-transition-0;
            }
          }

          &0 {
            background: $wml-primary;
            border:calc(3/16 * 1rem) solid $wml-black;
            &:hover{
              background: $wml-secondary;
              border:calc(3/16 * 1rem) solid $wml-white;
              .WMLButtonZeroMainButton0Text0 {
                color:$wml-white
              }
            }

            &Text {
              &0 {
                color:$wml-black
              }
            }

          }

          &1 {
            background: $wml-gradient-0;
            border:calc(3/16 * 1rem) solid $wml-white;

            &Text {
              &0 {
                color:$wml-white
              }
            }

            &:hover{
              background: $wml-primary;
              border:calc(3/16 * 1rem) solid $wml-black;
              .WMLButtonZeroMainButton1Text0 {
                color:$wml-black;
              }
            }


          }

          &2 {
            background-color: $wml-black;
            border:calc(3/16 * 1rem) solid $wml-primary;
            &Text {
              &0 {
                color:$wml-primary
              }
            }
            &:hover{
              background: $wml-secondary;
              border:calc(3/16 * 1rem) solid $wml-primary;
              .WMLButtonZeroMainButton2Text0 {
                color:$wml-primary
              }
            }
          }
        }

      }
      &Pod{

        &0{}
      }
    }
  }

}

# FileName: \src\lib\wml-button-zero\wml-button-zero\wml-button-zero.component.spec.ts

// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLButtonZeroComponent } from './wml-button-zero.component';


describe('WMLButtonZeroComponent', () => {
  let cpnt: WMLButtonZeroComponent;
  let fixture: ComponentFixture<WMLButtonZeroComponent>;

  beforeEach(async () => {



    await wmlTestUtils.configureTestingModuleForComponents(WMLButtonZeroComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLButtonZeroComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLButtonZeroView')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnDestroy",()=>{

    beforeEach(()=>{
      spyOn(cpnt.ngUnsub,'next')
      spyOn(cpnt.ngUnsub,'complete')
    })

    it(` when called |
     as appropriate |
     does the required action `,()=>{
        // act
        cpnt.ngOnDestroy();

        // assert
        expect(cpnt.ngUnsub.next).toHaveBeenCalled();
        expect(cpnt.ngUnsub.complete).toHaveBeenCalled();
    })
  })
});

# FileName: \src\lib\wml-button-zero\wml-button-zero\wml-button-zero.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';




// rxjs
import { Subject, from } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';
import {WMLUIProperty,WMLButton2, WMLImage, WMLButton, generateClassPrefix} from "@windmillcode/angular-wml-components-base"
// misc
import {WMLButtonIconType, WMLButtonPropsTypeEnum} from '../../models';


@Component({
  selector: 'wml-button-zero',
  templateUrl: './wml-button-zero.component.html',
  styleUrls: ['./wml-button-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,

})
export class WMLButtonZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }


  classPrefix = generateClassPrefix('WMLButtonZero')


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId?:string
  @Input('props') props: WMLButtonZeroProps = new WMLButtonZeroProps()
  ngUnsub= new Subject<void>()

  listenForUpdate = ()=>{
    return this.props.updateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((res?)=>{
        this.props = new WMLButtonZeroProps({
          ...this.props,
          ...(res ?? this.props)
        })
        this.cdref.detectChanges()
      })
    )

  }

  checkPropsInstance = ()=>{
    return this.props.constructor.name
  }
  ngOnInit(): void {
    this.listenForUpdate().subscribe()
    this.props.cdref = this.cdref
    this.myId = this.props.id

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLButtonZeroProps extends WMLButton2 {
  constructor(props:Partial<WMLButtonZeroProps >={}){
    super();

    Object.assign(
      this,
      {
        ...props
      }
    )
    this.updateBtnClasses(this.type)
    this.icons = this.icons.map((icon)=>{
      icon.type = icon.type ?? "img"
      return icon
    })


  }
  id?:string
  cdref?:ChangeDetectorRef
  updateSubj = new Subject<Partial<WMLButtonZeroProps>>()
  private _type =WMLButtonPropsTypeEnum.PRIMARY
  get type(){
    return this._type
  }
  set type(value:WMLButtonPropsTypeEnum){
    this.updateBtnClasses(value)
    // @ts-ignore
    this._type = value
  }
  private updateBtnClasses(value:WMLButtonPropsTypeEnum){
    let val = {
      [WMLButtonPropsTypeEnum.PRIMARY]:"0",
      [WMLButtonPropsTypeEnum.SECONDARY]:"1",
      [WMLButtonPropsTypeEnum.TERTIARY]:"2"
    }[value]
    this.button.class = "WMLButtonZeroMainButton"+val;
    this.text.class = "WMLButtonZeroMainButton" + val +"Text0"
  }
  override text = new WMLUIProperty({
    text:"Click Me",
  })
  override button = new WMLUIProperty({
    click:()=>{
      alert("This button was clicked")
    }
  })
  // @ts-ignore
  override icons = [new WMLImage<any,WMLButtonIconType>({
    isPresent:false,
    class:'fa-solid'
  })]


}



# FileName: \src\lib\wml-button-zero\wml-button-zero.module.ts




import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLButtonZeroComponent } from './wml-button-zero/wml-button-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { RouterModule } from '@angular/router';

let cpnts= [
  WMLButtonZeroComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLButtonZeroNGXTranslateModule {

}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {

        provide: TranslateLoader,
        useFactory: ()=> new WMLNGXTranslateLoader(),
      }
    }),
  ],
  exports:[
    WMLButtonZeroNGXTranslateModule
  ]
})
export class WMLButtonZeroModule {

}




# FileName: \styles.scss

@import "spacing";
@import "media_queries";
@import "color_pallete";
@import "common";


$wml-white: rgba(255,255,255);
$wml-black: rgba(0,0,0);
$wml-primary: #90ee90;
$wml-secondary:#707070;
$wml-gradient-0: radial-gradient(farthest-corner at 100% 0px,grey 0%,#000 150%);
$wml-overlay-0:rgba(0,0,0,.7);
$wml-border-radius0:calc(8/16 * 1rem);
$wml-border-radius1:calc(10/16 * 1rem);
$wml-border-radius2:calc(20/16 * 1rem);
$wml-transition-0:1s;

@mixin WMLCursorPointer0{
  &:hover{
    cursor: pointer;
  }
}
@mixin WMLButtonMainButton0{
  border-radius: $wml-border-radius0;
  padding:$wml-button-spacing3;
  display:flex;
  align-items: center;
  justify-content: center;

  &Text{
    &0{
      flex: 1 1 auto;
      max-width: 100%;
      white-space: break-spaces;
      img + &, i + & {
        margin: 0 0 0 $wml-button-spacing3;
      }
    }
  }
  img{
    display: inline;
    width: calc(29/16 * 1rem);
    height: auto;
  }
  i{
    font-size: calc(20/16 * 1rem);
  }
  img,i{
    flex:0 1 10%
  }
}






heres the readme for previous reference however be careful the code has updated since then optimzie the output as a page to be put a starlight astro website system for documentation purposes



# Overview

The `wml-button` library is an Angular-focused toolkit designed to provide developers with versatile and customizable button components. Its primary goal is to offer a streamlined approach to implementing interactive buttons within Angular applications, addressing common challenges such as dynamic content loading, user interaction handling, and flexible styling. By delivering a set of modular and adaptable components, the library aims to enhance the development workflow and enrich the user experience across diverse application scenarios.

Within this library, WmlButtonZeroComponent stands as the central component, offering a comprehensive suite of customization options. It's built to cater to developers seeking to implement buttons with specific behaviors, styles, and functionalities, providing a deep level of control over the component's properties. On the other hand, WmlButtonOneComponent serves as a simpler alternative, designed for use cases that demand a straightforward button with less complexity in customization. While it retains core interactive features, it's streamlined for easier implementation, making it suitable for scenarios where a basic button suffices. This structural differentiation within the library ensures that developers have access to both detailed and simplified button components, aligning with varied application requirements and developer preferences.


# Installation

```bash
npm install -d @windmillcode/angular-wml-button
```
## WmlButtonZeroProps

### Properties

| Property       | Type                               | Description |
| -------------- | ---------------------------------- | ----------- |
| `id`           | `string`                           | The unique identifier for the button component. |
| `cdref`        | `ChangeDetectorRef`                | Optional. Angular's `ChangeDetectorRef` associated with the component for triggering change detection manually. |
| `updateSubj`   | `Subject<Partial<WmlButtonZeroProps>>` | Subject to emit updates for the component. Useful for reactive programming patterns. |
| `type`         | `WMLButtonPropsTypeEnum`          | The type of the button, which determines its styling. Can be `PRIMARY`, `SECONDARY`, or `TERTIARY`. |
| `text`         | `WMLUIProperty`                    | Overrides the `text` property to set the button's display text. |
| `button`       | `WMLUIProperty`                    | Overrides the `button` property to customize click behavior. |
| `icons`        | `Array<WMLImage<any, WMLButtonIconType>>` | Overrides the `icons` property to customize the button's icons. |

### Methods

- `constructor(props: Partial<WmlButtonZeroProps> = {})`: Initializes a new instance of the `WmlButtonZeroProps` class with optional parameters for customization.
- `updateBtnClasses(value: WMLButtonPropsTypeEnum)`: Updates the button's classes based on the specified type (`PRIMARY`, `SECONDARY`, or `TERTIARY`).

### Example Usage

```typescript
let wmlButtonZeroProps = new WmlButtonZeroProps({
  type: WMLButtonPropsTypeEnum.PRIMARY,
  text: new WMLUIProperty({ text: "Click Me" }),
  button: new WMLUIProperty({
    click: () => {
      alert("This button was clicked");
    }
  }),
  // Assuming WMLImage and WMLButtonIconType are defined elsewhere
  icons: [new WMLImage<any, WMLButtonIconType>({ isPresent: false, class: 'fa-solid' })]
});
```

## WmlButtonOneProps

### Properties

| Property      | Type                               | Description |
| ------------- | ---------------------------------- | ----------- |
| `btnClass`    | `string`                           | Gets or sets the button's primary CSS class. |
| `btnStyle`    | `Partial<CSSStyleDeclaration>`     | Partial CSS styles for the button. |
| `btnIsPresent`| `boolean`                          | Indicates whether the button is present in the DOM. |
| `type`        | `WMLButtonPropsTypeEnum`          | The type of the button, influencing its styling. Can be `PRIMARY`, `SECONDARY`, or `TERTIARY`. |
| `iconType`    | `WMLButtonIconType`                | The type of icon used in the button. |
| `text`        | `string`                           | The display text of the button. |
| `updateSubj`  | `Subject<Partial<WmlButtonOneProps>>` | Subject to emit updates for the component. |

### Methods

- `constructor(props: Partial<WmlButtonOneProps> = {})`: Initializes a new instance of the `WmlButtonOneProps` class with optional parameters for customization.
- `updateBtnClassString(value: string)`: Updates the button's primary CSS class.
- `updateBtnClasses(value: WMLButtonPropsTypeEnum)`: Updates the button's classes based on the specified type (`PRIMARY`, `SECONDARY`, or `TERTIARY`).
- `click(evt?)`: Custom click handler for the button.

### Example Usage

```typescript
let wmlButtonOneProps = new WmlButtonOneProps({
  type: WMLButtonPropsTypeEnum.SECONDARY,
  text: "Click Me",
  click: (evt?) => {
    alert("This button was clicked");
  }
});
```


# CSS Customization
* to globally customize in your  css file
&[number] represents the button
&Text&0 represents the btn text
```py
.WmlButtonOneMainButton{
  &0 {
    &Text {
      &0 {

      }
    }
  }

  &1 {
    &Text {
      &0 {

      }
    }
  }

  &2 {
    &Text {
      &0 {

      }
    }
  }
}
```


# Changelog
  * v0.0.1
    button is ready to be used
  * v0.0.2
    include cursor pointer for the button view
  * v0.0.3
    gave hover functionality to the button
  * 1.0.0
    BREAKING change  WmlButtonZeroProps.icon changed to WmlButtonZeroProps.icons to represent the multiple icons one can have on the button
    WmlButtonZeroProps.icons[number] which is a WMLImage now has type of img or icon, if a type is not specified an img is used
    the icon comes before the text and not after the text
  * 2.0.0
    BREAKING CHANGE
    WmlButtonZeroPropsTypeEnum renamed to WMLButtonPropsTypeEnum
    created wml-button-one component which leverages wmlButton for easier button creation
  * 2.1.0
    * full support for wml-button-one
  * 2.1.1
    * add WmlButtonOneProps.btnIsPresent to show and hide buttons
  * 3.0.0
    * ensured that there is support for ngx-translate and non ngx-translate features
    * to enable translation
```ts
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

    HttpClientModule,
    WmlButtonZeroModule
    .forChild(
      new WMLModuleForRootProps({
        ngxTranslateLoaderFactory:HttpLoaderFactory
      })
    ),
```
    * to disable translation
```ts
    WmlButtonZeroModule
```

## 4.0.1
  * fixed major problems concerning ngx-translate
```ts
// translate
// first make sure to have ONLY ONE in the imports for AppModule
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }),
// then
WmlButtonZeroNGXTranslateModule
// for regular
WmlButtonZeroModule
```
## 4.0.5
* added css id support, and made cdref available on the props

## 4.0.7
* add id support on the selector element itself

## 16.2.70
* for wmlbuttonzero, added additional wmluiproperty to button zero

,
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package,
## v16.2.90
 * updated package to reflect the version  16.2.90 of @angular/core package,
## v16.2.91
 * updated package to reflect the version  16.2.91 of @angular/core package,
## v16.2.93
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.100
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.110
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v16.2.120
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.10
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.11
 * updated package to conform with @windmillcode/angular-wml-components-base for unit testing features  ,
## v17.0.20
 * updated package to reflect the version  ^17.0.2 of @angular/core package,
## v17.0.40
 * updated package to reflect the version  ^17.0.4 of @angular/core package,
## v17.0.50
 * updated package to reflect the version  ^17.0.5 of @angular/core package,
## v17.0.60
 * updated package to reflect the version  ^17.0.6s of @angular/core package,
## v17.0.70
 * updated package to reflect the version  ^17.0.7 of @angular/core package,
## v17.0.7100
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7200
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.7300
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.80
 * updated package to reflect the version  ^17.0.8 of @angular/core package,
## v17.0.8100
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.8102
 * updated package to conform with @windmillcode/angular-wml-components-base
## v17.0.8103
 * [FIX] ensured that change detection was working for buttons
,
## v17.0.8103
 * updated package to conform with @windmillcode/angular-wml-components-base

## v17.0.8104
  * [FIX] toggle margin between icon and text for wml-button-one when iconIsPresent is set to true
,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9001
 * updated package to conform with @windmillcode/angular-wml-components-base
## v17.0.9002
  * updated WmlButtonOneProps.click to have optional evt paramaeter
,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package,
## v17.1.2
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.1000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.2000 [2/5/24]
 * updated package to reflect the version  ^17.1.2 of @angular/core package,
## v17.1.2001 [2/8/24]
 * updated package to conform with @windmillcode/angular-wml-components-base
## v17.1.2002 [2/8/24]
* corrected code so no text should wrap if the text overflows the button
,
## v17.1.3000 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.2.1000 [2/17/24]
 * updated package to reflect the version  ^17.2.1 of @angular/core package

## 17.2.1001 [2/21/24]
* [UPDATE] added WmlButtonZeroProps.listenForUpdate amd WmlButtonOneProps.listenForUpdate so changes that dont reflect by assignment would reflect this way

,
## v17.2.2000 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.2001 [2/23/24]
 * updated package to reflect the version  ^17.2.2 of @angular/core package,
## v17.2.3000 [2/28/24]
 * updated package to reflect the version  ^17.2.3 of @angular/core package,
## v17.2.3001 [3/2/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.3002 [3/5/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4000 [3/8/24]
 * updated package to reflect the version  ^17.2.4 of @angular/core package,
## v17.2.4001 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4002 [3/12/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4003 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.2.4004 [3/13/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.0 [3/17/24]
 * updated package to reflect the version  ^17.3.0 of @angular/core package
,
## v17.3.1000 [3/22/24]
 * updated package to reflect the version  ^17.3.1 of @angular/core package,
## v17.3.2000 [3/28/24]
 * updated package to reflect the version  ^17.3.2 of @angular/core package,
## v17.3.3000 [4/4/24]
 * updated package to reflect the version  ^17.3.3 of @angular/core package,
## v17.3.4000 [4/11/24]
 * updated package to reflect the version  ^17.3.4 of @angular/core package,
## v17.3.4001 [4/16/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.5000 [4/20/24]
 * updated package to reflect the version  ^17.3.5 of @angular/core package,
## v17.3.5110 [5/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.3.6000 [5/1/24]
 * updated package to reflect the version  ^17.3.6 of @angular/core package,
## v17.3.7000 [5/9/24]
 * updated package to reflect the version  ^17.3.7 of @angular/core package,
## v17.3.8000 [5/9/24]
 * updated package to reflect the version  ^17.3.8 of @angular/core package,
## v17.3.9000 [5/16/24]
 * updated package to reflect the version  ^17.3.9 of @angular/core package,
## v18.0.0 [5/22/24]
 * updated package to reflect the version  ^18.0.0 of @angular/core package,
## v18.0.1 [5/22/24]
 * updated package to reflect the version  ^18.0.0 of @angular/core package,
## v18.0.4 [5/25/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.1000 [5/29/24]
 * updated package to reflect the version  ^18.0.1 of @angular/core package,
## v18.0.2000 [6/6/24]
 * updated package to reflect the version  ^18.0.2 of @angular/core package,
## v18.0.3000 [6/13/24]
 * updated package to reflect the version  ^18.0.3 of @angular/core package,
## v18.0.3010 [6/18/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.4000 [6/23/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.0.5000 [6/26/24]
 * updated package to reflect the version  ^18.0.5 of @angular/core package,
## v18.0.6000 [7/5/24]
 * updated package to reflect the version  ^18.0.6 of @angular/core package,
## v18.1.0 [7/10/24]
 * updated package to reflect the version  ^18.1.0 of @angular/core package,
## v18.1.3 [7/13/24]
 * updated package to reflect the version  ^18.1.0 of @angular/core package,
## v18.1.4 [7/13/24]
 * updated package to reflect the version  ^18.1.0 of @angular/core package
## v18.1.5 [7/13/24]
 * [FIX] - fixed a bug with the default type not showing
,
## v18.1.6 [7/14/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.1000 [7/18/24]
 * updated package to reflect the version  ^18.1.1 of @angular/core package,
## v18.1.2000 [7/24/24]
 * updated package to reflect the version  ^18.1.2 of @angular/core package

## v18.1.2300
[7/26/2024 4:05:00 PM EST]

[UPDATE] Updated wml-button-one.component.html, added conditional links for props.link and props.routerLink
[UPDATE] Updated wml-button-one.component.scss, added styles for links and removed unnecessary comments
[BREAKING CHANGE] Added encapsulation: ViewEncapsulation.None in wml-button-one.component.ts
[UPDATE] Added RouterModule to imports in wml-button-zero.module.ts
,
## v18.1.2300 [7/27/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.2301 [7/30/24]
 * updated package to conform with @windmillcode/angular-wml-components-base
,
## v18.1.3000-beta0 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.3000-beta1 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.3000-beta2 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.3000-beta3 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.3000-beta4 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base

