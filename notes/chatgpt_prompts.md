See the contents of this angular library

Create an Overview Installation Usage CSS Customization and Reference Section for this code ensure in order

For the overview talk about all features of the compponent except for translation

Do not create a usage section with code just provide possible examples that developers many most commonly need to use and those that developers might have issues with ensure the component name is with ## the Usage section is with ### and each example is with #### acording to the example name not (example 1...) dont include example in the subsection. make sure to include a getting started
each usuage subsection should be in the format
```mdx
#### [Subsectiion placeholder]

<iframe src="[stackblits url placeholder]"></iframe>
```
where the placeholder is replace by empty space
 but DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES


# FileName: \README.md

# Changelog

## v1.0.0

    * ensured that there is support for ngx-translate and non ngx-translate features
    * to enable translation
```ts
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
    HttpClientModule,
    WMLChipsZeroModule
    .forChild(
      new WMLModuleForRootProps({
        ngxTranslateLoaderFactory:HttpLoaderFactory
      })
    ),
```
    * to disable translation
```ts
    WMLChipsZeroModule
```
## v1.0.1 -> v1.0.2
  * atteptimg to fix dependencies
## 2.0.0
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
WMLChipsZeroNGXTranslateModule
// for regular
WmlChipsModule
```

## 3.0.0
* MAJOR : reanme to angular-wml-chips-zero
%!(EXTRA string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package),
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
 * updated package to reflect the version  ^17.0.2 of @angular/core package
,
## v17.0.40
 * updated package to reflect the version  ^17.0.4 of @angular/core package,
## v17.0.50
 * updated package to reflect the version  ^17.0.5 of @angular/core package,
## v17.0.60
 * updated package to reflect the version  ^17.0.6 of @angular/core package,
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
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.8103
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.0.9001
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.0000
 * updated package to reflect the version  ^17.1.0 of @angular/core package,
## v17.1.2
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.1000
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.2000 [2/5/24]
 * updated package to reflect the version  ^17.1.2 of @angular/core package,
## v17.1.2001 [2/8/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v17.1.3000 [2/8/24]
 * updated package to reflect the version  ^17.1.3 of @angular/core package,
## v17.2.1000 [2/17/24]
 * updated package to reflect the version  ^17.2.1 of @angular/core package,
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
 * updated package to reflect the version  ^17.3.0 of @angular/core package,
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
 * updated package to reflect the version  ^17.3.5 of @angular/core package

## v17.3.5100 [4/23/24]
* [BREAKING CHANGE] - removed mat-autocomplete from chip control



## v17.3.5110 [4/27/24]
* [UPDATE] added wmlField so now formArray does not need to be specified and comes from wml-form
[UPDATE]
Updated chip styling in wml-chips-zero component for a more modern look and feel.

[PATCH]
Removed dependency on @angular/material in wml-chips-zero, reducing the package's dependency footprint
[UPDATE]
Introduced @windmillcode/angular-wml-button-zero in dependencies to enhance button functionalities in wml-chips-zero.
,
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
 * updated package to reflect the version  ^18.1.0 of @angular/core package,
## v18.1.6 [7/14/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.1000 [7/18/24]
 * updated package to reflect the version  ^18.1.1 of @angular/core package,
## v18.1.2000 [7/24/24]
 * updated package to reflect the version  ^18.1.2 of @angular/core package,
## v18.1.2300 [7/27/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.2301 [7/30/24]
 * updated package to conform with @windmillcode/angular-wml-components-base
,
## v18.1.3000-beta1 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.3000-beta2 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.3000-beta3 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
## v18.1.3000-beta4 [8/1/24]
 * updated package to conform with @windmillcode/angular-wml-components-base
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


$wml-chips-white: "255,255,255";
$wml-chips-black: "0,0,0";
$wml-chips-primary: "144,238,144";
$wml-chips-secondary:"112,112,112";

$wml-chips-primary-gradient:   radial-gradient(farthest-corner at 100% 0px,convert-to-rgb($wml-chips-primary) 0%,convert-to-rgb($wml-chips-secondary) 150%);
$wml-chips-secondary-gradient: radial-gradient(farthest-corner at 100% 0px,grey 0%,convert-to-rgb($wml-chips-black) 150%);


:root{
  --wml-chips-white:#{$wml-chips-white};
  --wml-chips-black:#{$wml-chips-black};
  --wml-chips-primary:#{$wml-chips-primary};
  --wml-chips-secondary:#{$wml-chips-secondary};

  --wml-chips-primary-gradient: #{$wml-chips-primary-gradient};
  --wml-chips-secondary-gradient: #{$wml-chips-secondary-gradient};

}

# FileName: \_common.scss

$wml-chips-border-radius0:calc(8/16 * 1rem);
$wml-chips-border-radius1:calc(10/16 * 1rem);
$wml-chips-border-radius2:calc(20/16 * 1rem);

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
  --wml-chips-mobile-font: #{$mobileFont};
  --wml-chips-mobile: #{$mobile};
  --wml-chips-small-mobile: #{$smallMobile};
  --wml-chips-medium-mobile: #{$mediumMobile};
  --wml-chips-tablet: #{$tablet};
  --wml-chips-tablet-portrait: #{$tabletPortrait};
  --wml-chips-tablet-portrait-down: #{$tabletPortraitDown};
  --wml-chips-tablet-landscape: #{$tabletLandscape};
  --wml-chips-small-desktop: #{$smallDesktop};
  --wml-chips-tablet-landscape-down: #{$tabletLandscapeDown};
  --wml-chips-desktop: #{$desktop};
  --wml-chips-not-mobile: #{$notMobile};
  --wml-chips-laptop: #{$laptop};
  --wml-chips-laptop-down: #{$laptopDown};
  --wml-chips-laptop-tablet: #{$laptopTablet};
  --wml-chips-laptop-tablet-landscape: #{$laptopTabletLandscape};
  --wml-chips-large-desktop: #{$largeDesktop};
  --wml-chips-large-desktop-down: #{$largeDesktopDown};
  --wml-chips-xl-desktop: #{$xlDesktop};
  --wml-chips-xl-desktop-down: #{$xlDesktopDown};
  --wml-chips-xxl-desktop: #{$xxlDesktop};
  --wml-chips-xxxl-desktop: #{$xxxlDesktop};
  --wml-chips-dekstop-down-for-campaigns: #{$dekstopDownForCampaigns};
  --wml-chips-tablet-for-header: #{$tabletForHeader};
  --wml-chips-tablet-landscape-for-header: #{$tabletLandscapeForHeader};
  --wml-chips-tablet-landscape-down-for-header: #{$tabletLandscapeDownForHeader};
  --wml-chips-desktop-for-header: #{$desktopForHeader};
  --wml-chips-laptop-for-header: #{$laptopForHeader};
}

# FileName: \_spacing.scss

$wml-chips-spacing0: calc(1/16* 1rem);
$wml-chips-spacing1: calc(2/16* 1rem);
$wml-chips-spacing2: calc(4/16* 1rem);
$wml-chips-spacing3: calc(8/16* 1rem);
$wml-chips-spacing4: calc(12/16* 1rem);
$wml-chips-spacing5: calc(16/16* 1rem);
$wml-chips-spacing6: calc(24/16* 1rem);
$wml-chips-spacing7: calc(32/16* 1rem);
$wml-chips-spacing8: calc(48/16* 1rem);
$wml-chips-spacing9: calc(64/16* 1rem);
$wml-chips-spacing10: calc(72/16* 1rem);
$wml-chips-spacing11: calc(96/16* 1rem);
$wml-chips-spacing12: calc(128/16* 1rem);
$wml-chips-spacing13: calc(192/16* 1rem);
$wml-chips-spacing14: calc(256/16* 1rem);
$wml-chips-spacing15: calc(384/16* 1rem);
$wml-chips-spacing16: calc(512/16* 1rem);




# FileName: \src\lib\wml-chips-zero\wml-chips-zero\wml-chips-zero.component.global.scss

#root wml-chips-zero{

}

# FileName: \src\lib\wml-chips-zero\wml-chips-zero\wml-chips-zero.component.html

<div (keydown.enter)="add($event)"  [class]="classPrefix('MainPod')">
  <ul [class]="classPrefix('Pod0')"  #chipGrid [attr.aria-label]="props.userInputsAriaLabel | translate">
    <li [class]="classPrefix('Pod0Item0')" *ngFor="let item of props.userInputs" (removed)="remove(item)">
      <span [class]="classPrefix('Pod0Text0')">{{item}}</span>
      <button
      [class]="classPrefix('Pod0Btn0')"
      (click)="remove(item)"
      [attr.aria-label]="props.removeChipAriaLabel | translate">
        <i
        [class]="'fa-solid fa-xmark'"
        ></i>
      </button>
    </li>
  </ul>
  <div [class]="classPrefix('Pod1')">
    <textarea
    #myTextArea
    (input)="resizeBasedOnTextContent()"
    [ngStyle]="textAreaStyle"
    rows =1
    [class]="classPrefix('Pod1Input0')"
    [placeholder]="props.placeholder | translate"  [formControl]="itemCtrl"
    ></textarea>

  </div>
  <section [class]="classPrefix('Pod2')">
    <wml-button-one [props]="props.clearBtn"></wml-button-one>
  </section>


</div>

# FileName: \src\lib\wml-chips-zero\wml-chips-zero\wml-chips-zero.component.phone.scss

#root wml-chips-zero{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-chips-zero\wml-chips-zero\wml-chips-zero.component.scss

@import '../../../../styles';




wml-chips-zero {


  $chipIconColor:lighten($color: $wml-chips-grey, $amount: 30);
  &.WMLChipsZeroView{
    display: block;
    .WMLChipsZero{
      &Main{
        &Pod{
          width:100%;
          padding: var(--wml-chips-spacing3) var(--wml-chips-spacing5);
          border-radius: calc(5/16 * 1rem);
          background-color: lighten($wml-chips-grey,$amount:80);
          @include FlexColumnCenter;
          align-items: flex-start;
        }
      }
      &Pod{

        &0{
          max-height: calc(250/16* 1rem);
          overflow: auto;
          display: flex;
          flex-flow:row wrap;

          &Item {
            &0 {
              background-color: $chipIconColor;
              padding: var(--wml-chips-spacing3);
              border-radius: calc(100/16 * 1rem);
              color: var(--wml-chips-dark);
              margin: 0 var(--wml-chips-spacing5) var(--wml-chips-spacing5) 0;
              word-break: break-all;
              display: flex;
              align-items: center;
              justify-content: space-between;



            }
          }

          &Text {
            &0 {
              // color:var(--wml-chips-dark)
            }
          }


          &Btn {
            &0 {
              cursor: pointer;
              border:none;
              width:  calc(18/10.6 * 1rem) !important;
              margin: 0 0 0 var(--wml-chips-spacing3);
              background-color:var(--wml-chips-grey);
              width: var(--wml-chips-spacing5);
              border-radius: calc(100/10.6 * 1rem);


              i{
                color:$chipIconColor;
              }
            }
          }
        }

        &1{
          width: 100%;
          &Input {
            &0 {
              padding: var(--wml-chips-spacing4);
              width: 100%;
              height: auto;
              min-height: calc(1/16 * 1rem);
              overflow: hidden;
              border:none;
              background-color: transparent;
              font-size: var(--wml-chips-font-size2);
              &::placeholder {
                margin:0;
                padding:0;
              }
            }
          }

        }

        &2{
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
      }
    }
  }

}

# FileName: \src\lib\wml-chips-zero\wml-chips-zero\wml-chips-zero.component.spec.ts

// testing
import { ComponentFixture } from '@angular/core/testing';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
// rxjs
import { Subject } from 'rxjs';

import { WMLChipsZeroComponent } from './wml-chips-zero.component';


describe('WMLChipsZeroComponent', () => {
  let cpnt: WMLChipsZeroComponent;
  let fixture: ComponentFixture<WMLChipsZeroComponent>;

  beforeEach(async () => {



    await wmlTestUtils.configureTestingModuleForComponents(WMLChipsZeroComponent);


    ({fixture, cpnt} = wmlTestUtils.grabComponentInstance(WMLChipsZeroComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLChipsZeroView')
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

# FileName: \src\lib\wml-chips-zero\wml-chips-zero\wml-chips-zero.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input, ElementRef, ViewChild, ViewEncapsulation   } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { WMLButtonOneProps } from '@windmillcode/angular-wml-button';
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';




// rxjs
import { Observable, Subject, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, takeUntil,tap } from 'rxjs/operators';

// misc

@Component({
  selector: 'wml-chips-zero',
  templateUrl: './wml-chips-zero.component.html',
  styleUrls: ['./wml-chips-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLChipsZeroComponent  {

  constructor (
    public cdref:ChangeDetectorRef,
  ) {
    this.filteredValues = this.itemCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this.filter(fruit) : this.props.suggestions.slice())),
    );
  }


  classPrefix = generateClassPrefix('WMLChipsZero')


  @Input('props') props: WMLChipsProps = new WMLChipsProps()
  @ViewChild("myTextArea", { static: true }) myTextArea!:ElementRef<HTMLInputElement>
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  itemCtrl = new FormControl('',Validators.required);
  filteredValues: Observable<string[]>;
  textAreaStyle:Partial<CSSStyleDeclaration>={}




  populateFields =()=>{
    this.props.formArray.value
    .forEach((userInput:string)=>{
      this.itemCtrl.setValue(userInput)
      this.add()
    })
  }


  initResizeTextArea() {
    return timer(300)
      .pipe(
        takeUntil(this.ngUnsub),
        tap(() => {
          this.resizeBasedOnTextContent();
        })
      )
  }

  updateFormArray= ()=>{
    if(this.props.formArray){
      this.props.formArray.clear()
      this.props.userInputs
      .forEach((chosen)=>{
        let result = this.props.updateFormArrayPredicate(chosen)
        this.props.formArray.push(new FormControl(result))
      })
      this.props.formArray.markAsDirty()
    }
  }

  remove(fruit: string): void {
    const index = this.props.userInputs.indexOf(fruit);

    if (index >= 0) {
      this.props.userInputs.splice(index, 1);
    }
    this.updateFormArray()
  }

  clear= ()=>{
    this.props.userInputs = []
    this.updateFormArray()
  }

  add(evt?:Event){
    evt?.preventDefault()
    if([undefined,null,''].includes(this.itemCtrl.value )){
      return
    }
    this.props.userInputs.push(this.itemCtrl.value as string)
    this.itemCtrl.setValue(null,{emitEvent:false})
    this.cdref.detectChanges()
    this.updateFormArray()
  }

  resizeBasedOnTextContent(){
    this.textAreaStyle.height = "0"
    this.textAreaStyle.height = (this.myTextArea.nativeElement.scrollHeight) + "px";
    this.cdref.detectChanges();
  }



  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.props.suggestions.filter(item => item.toLowerCase().includes(filterValue));
  }


  ngAfterViewInit(){
    if(this.props.wmlField){
      this.props.formArray = this.props.wmlField.getReactiveFormControl() as FormArray
    }
    this.props.clearBtn.click = this.clear
    this.props.userInputs = []
    this.populateFields()
    this.initResizeTextArea().subscribe();
  }
  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }


}


export class WMLChipsProps {
  constructor(props:Partial<WMLChipsProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  limit= Infinity
  wmlField!:WMLFieldZeroProps
  formArray = new FormArray<any>([])
  updateFormArrayPredicate:(val:string) => any =(val)=> val
  placeholder = "Type your value then press enter to see it appear"
  userInputsAriaLabel ="User Inputs"
  removeChipAriaLabel = "remove"
  userInputs:Array<string> = []
  suggestions:Array<string> =[
    "Please",
    "Provide",
    "Some",
    "Sample",
    "Values"
  ]
  clearBtn = new WMLButtonOneProps({
    text:"Clear"
  })
}



# FileName: \src\lib\wml-chips-zero\wml-chips-zero.module.ts

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { WMLChipsZeroComponent } from './wml-chips-zero/wml-chips-zero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader, WMLModuleForRootProps } from '@windmillcode/angular-wml-components-base';
import { WMLButtonOneNGXTranslateModule } from '@windmillcode/angular-wml-button';


let cpnts =[
  WMLChipsZeroComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
    WMLButtonOneNGXTranslateModule
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLChipsZeroNGXTranslateModule {

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
    WMLChipsZeroNGXTranslateModule
  ]
})
export class WMLChipsZeroModule {

}

# FileName: \styles.scss

@import "spacing";
@import "media_queries";
@import "color_pallete";
@import "common";
@import "fontawesome";
$wml-chips-dark: #212529;
$wml-chips-grey:rgb(64, 64, 64);
$wml-chips-spacing0: calc(1/16* 1rem);
$wml-chips-spacing1: calc(2/16* 1rem);
$wml-chips-spacing2: calc(4/16* 1rem);
$wml-chips-spacing3: calc(8/16* 1rem);
$wml-chips-spacing4: calc(12/16* 1rem);
$wml-chips-spacing5: calc(16/16* 1rem);
$wml-chips-spacing6: calc(24/16* 1rem);
$wml-chips-spacing7: calc(32/16* 1rem);
$wml-chips-spacing8: calc(48/16* 1rem);
$wml-chips-spacing9: calc(64/16* 1rem);
$wml-chips-spacing10: calc(72/16* 1rem);
$wml-chips-spacing11: calc(96/16* 1rem);
$wml-chips-spacing12: calc(128/16* 1rem);
$wml-chips-spacing13: calc(192/16* 1rem);
$wml-chips-spacing14: calc(256/16* 1rem);
$wml-chips-spacing15: calc(384/16* 1rem);
$wml-chips-spacing16: calc(512/16* 1rem);

$wml-chips-font-size0: calc(12/16* 1rem);
$wml-chips-font-size1: calc(16/16* 1rem);
$wml-chips-font-size2: calc(24/16* 1rem);
$wml-chips-font-size3: calc(32/16* 1rem);
$wml-chips-font-size4: calc(48/16* 1rem);
$wml-chips-font-size5: calc(72/16* 1rem);


@mixin FlexColumnCenter{
  display: flex;
  flex-direction: column;
  align-items: center;
}

wml-chips-zero{


  overflow: hidden;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    z-index:5;
    &:not(i.fa-solid){
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }


}













the readme is included for previous reference however be careful the code has updated since then optimize the output as a page to be put a starlight astro website system for documentation purposes

References should go over each property avaiable to the developer in markdown table format with  | Property       | Type                               | Description |
for all properties and methos

DONT NOT COPY OVER THE CHANGELOG!! DONT NOT COPY OVER THE CHANGELOG!!

DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES
