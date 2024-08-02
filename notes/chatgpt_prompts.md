See the contents of this angular library

Create an Overview Installation Usage  and Reference Section for this code ensure in order

All hearders must start with  two hearders such as this ##

For the overview talk about all features of the compponent except for translation

Do not create a usage section with code just provide possible examples that developers many most commonly need to use and those that developers might have issues with ensure the component name is with ## the Usage section is with ### and each example is with #### acording to the example name not (example 1...) dont include example in the subsection. make sure to include a getting started
each usuage subsection should be in the format
```mdx
### [Subsectiion placeholder]

<iframe src="[stackblits url placeholder]"></iframe>
```
where the placeholder is replace by empty space
 but DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLESDONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES


# FileName: \README.md

# WMLForm

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Code scaffolding

Run `ng generate component component-name --project WML-form` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project WML-form`.
> Note: Don't forget to add `--project WML-form` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build WML-form` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build WML-form`, go to the dist folder `cd dist/wml-form` and run `npm publish`.

## Running unit tests

Run `ng test WML-form` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
,
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
 * updated package to conform with @windmillcode/angular-wml-components-base   ,
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


$wml-form-white: "255,255,255";
$wml-form-black: "0,0,0";
$wml-form-primary: "144,238,144";
$wml-form-secondary:"112,112,112";

$wml-form-primary-gradient:   radial-gradient(farthest-corner at 100% 0px,convert-to-rgb($wml-form-primary) 0%,convert-to-rgb($wml-form-secondary) 150%);
$wml-form-secondary-gradient: radial-gradient(farthest-corner at 100% 0px,grey 0%,convert-to-rgb($wml-form-black) 150%);


:root{
  --wml-form-white:#{$wml-form-white};
  --wml-form-black:#{$wml-form-black};
  --wml-form-primary:#{$wml-form-primary};
  --wml-form-secondary:#{$wml-form-secondary};

  --wml-form-primary-gradient: #{$wml-form-primary-gradient};
  --wml-form-secondary-gradient: #{$wml-form-secondary-gradient};

}

# FileName: \_common.scss

$wml-form-border-radius0:calc(8/16 * 1rem);
$wml-form-border-radius1:calc(10/16 * 1rem);
$wml-form-border-radius2:calc(20/16 * 1rem);

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
  --wml-form-mobile-font: #{$mobileFont};
  --wml-form-mobile: #{$mobile};
  --wml-form-small-mobile: #{$smallMobile};
  --wml-form-medium-mobile: #{$mediumMobile};
  --wml-form-tablet: #{$tablet};
  --wml-form-tablet-portrait: #{$tabletPortrait};
  --wml-form-tablet-portrait-down: #{$tabletPortraitDown};
  --wml-form-tablet-landscape: #{$tabletLandscape};
  --wml-form-small-desktop: #{$smallDesktop};
  --wml-form-tablet-landscape-down: #{$tabletLandscapeDown};
  --wml-form-desktop: #{$desktop};
  --wml-form-not-mobile: #{$notMobile};
  --wml-form-laptop: #{$laptop};
  --wml-form-laptop-down: #{$laptopDown};
  --wml-form-laptop-tablet: #{$laptopTablet};
  --wml-form-laptop-tablet-landscape: #{$laptopTabletLandscape};
  --wml-form-large-desktop: #{$largeDesktop};
  --wml-form-large-desktop-down: #{$largeDesktopDown};
  --wml-form-xl-desktop: #{$xlDesktop};
  --wml-form-xl-desktop-down: #{$xlDesktopDown};
  --wml-form-xxl-desktop: #{$xxlDesktop};
  --wml-form-xxxl-desktop: #{$xxxlDesktop};
  --wml-form-dekstop-down-for-campaigns: #{$dekstopDownForCampaigns};
  --wml-form-tablet-for-header: #{$tabletForHeader};
  --wml-form-tablet-landscape-for-header: #{$tabletLandscapeForHeader};
  --wml-form-tablet-landscape-down-for-header: #{$tabletLandscapeDownForHeader};
  --wml-form-desktop-for-header: #{$desktopForHeader};
  --wml-form-laptop-for-header: #{$laptopForHeader};
}

# FileName: \_spacing.scss

$wml-form-spacing0: calc(1/16* 1rem);
$wml-form-spacing1: calc(2/16* 1rem);
$wml-form-spacing2: calc(4/16* 1rem);
$wml-form-spacing3: calc(8/16* 1rem);
$wml-form-spacing4: calc(12/16* 1rem);
$wml-form-spacing5: calc(16/16* 1rem);
$wml-form-spacing6: calc(24/16* 1rem);
$wml-form-spacing7: calc(32/16* 1rem);
$wml-form-spacing8: calc(48/16* 1rem);
$wml-form-spacing9: calc(64/16* 1rem);
$wml-form-spacing10: calc(72/16* 1rem);
$wml-form-spacing11: calc(96/16* 1rem);
$wml-form-spacing12: calc(128/16* 1rem);
$wml-form-spacing13: calc(192/16* 1rem);
$wml-form-spacing14: calc(256/16* 1rem);
$wml-form-spacing15: calc(384/16* 1rem);
$wml-form-spacing16: calc(512/16* 1rem);




# FileName: \src\lib\wml-form-zero\wml-form-zero\wml-form-zero.component.global.scss

#root wml-form{

}

# FileName: \src\lib\wml-form-zero\wml-form-zero\wml-form-zero.component.html

<div [class]="classPrefix('MainPod')" (ngSubmit)="silenceSubmitAction($event)">
  <section [style]="section.style"  [class]="classPrefix('Pod0')" *ngFor="let section of props.displayFields">
    <div [class]="classPrefix('Pod0Item0')" *ngFor="let field of section.value">
      <div [class]="classPrefix('Pod0Item1') + ' glassmorphism'" *ngIf="field.self.type === 'wml-card'">
        <wml-field-zero [props]="field"></wml-field-zero>
      </div>
      <wml-field-zero [props]="field" *ngIf="field.self.type === 'standalone'"></wml-field-zero>
    </div>
  </section>
</div>

# FileName: \src\lib\wml-form-zero\wml-form-zero\wml-form-zero.component.phone.scss

#root wml-form{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-form-zero\wml-form-zero\wml-form-zero.component.scss

@import "../../../../styles.scss";


:host {

  &.WMLFormView{
    // display: flex;
    .WMLForm{
      &Main{
        &Pod{
          width: 100%;
        }
      }
      &Pod{
        &0{
          &Item {
            &0 {
              margin: 0 0 $wml-form-spacing5 0;
            }
            &1{
              padding:$wml-form-spacing7
            }
          }
        }
      }
    }
  }

}

# FileName: \src\lib\wml-form-zero\wml-form-zero\wml-form-zero.component.spec.ts


// @ts-nocheck
// testing
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Type, NO_ERRORS_SCHEMA, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Route } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';

// rxjs
import { Subject } from 'rxjs';

import { WMLFormZeroProps, WMLFormZeroComponent } from './wml-form-zero.component';
import { wmlTestUtils } from '../../test-utils/test-utils';
export class ChangeDetectorRefExtension extends ChangeDetectorRef{
  constructor(){
    super()
  }
  reattach(): void {

  }
  markForCheck(): void {

  }
  checkNoChanges(): void {

  }
  detectChanges(): void {

  }
  detach(): void {

  }
}

export  let mockTranslateService = {
  get:()=> new Subject(),
  onTranslationChange:new Subject(),
  onLangChange:new Subject(),
  onDefaultLangChange:new Subject(),
}

export let mockRenderer2 =(()=>{
  let createElementResult = {}
  return {
    appendChild:()=>{},
    removeChild:()=>{},
    createElementResult,
    createElement:()=> createElementResult,
  }
})()


export let mockHttpClient = {
  get:()=> new Subject(),
  post:()=> new Subject(),
}
export let mockActivatedRoute ={

}
export let mockCdref = new ChangeDetectorRefExtension()
export let mockStore = {}
@Component({
  template: `<router-outlet></router-outlet>`,
  standalone:true,
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})


export let mockStoreRootModule = {}

let mockProviders = [
  // calendarDate,
  {provide:Renderer2,useValue: mockRenderer2},
  // {provide:Store,useValue:mockStore},
  {provide:TranslateService,useValue:mockTranslateService},
  {provide:HttpClient,useValue:mockHttpClient},
  {provide:ChangeDetectorRef,useValue:mockCdref},
  {provide:ActivatedRoute,useValue:mockActivatedRoute}
]


let configureTestingModuleForComponents = async (
  targetcomponent:Type<any>,
  myProviders:Partial<{
    mockTranslateService:any
    mockCdref:any,
    mockHttpClient:any,
    mockStore:any
  }> = {},
  routes:Route[] =[]
)=>{



  let imports:any[] = [
    RouterTestingModule,
    TranslateModule,
    HttpClientModule,
  ]

  if(routes.length !== 0){
    imports.push(
      RouterTestingModule.withRoutes(routes)
    )
  }

  await TestBed.configureTestingModule({
    imports,
    declarations: [
      targetcomponent
    ],
    providers:mockProviders,
    schemas:[
      NO_ERRORS_SCHEMA
    ]

  }).compileComponents();


}

export function grabComponentInstance(targetcomponent: Type<any>) {
  let fixture = TestBed.createComponent(targetcomponent);
  let component = fixture.componentInstance;
  if(component.hasOwnProperty("renderer2")){
    component.renderer2 = mockRenderer2
  }
  return { fixture,  component };
}




describe('WMLFormZeroComponent', () => {
  let cpnt: WMLFormZeroComponent;
  let fixture: ComponentFixture<WMLFormZeroComponent>;

  beforeEach(async () => {
    await wmlTestUtils.configureTestingModuleForComponents(WMLFormZeroComponent,{mockTranslateService});
    ({fixture,  cpnt} = wmlTestUtils.grabComponentInstance(WMLFormZeroComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('View')
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

  describe("updateFields",()=>{
    it('should set displayFields to an empty array when props.fields is empty', () => {
      // Arrange;
      cpnt.props = new WMLFormZeroProps({ fields: [] });

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(0);
    });

    it('should set displayFields to an array of length one when props.fieldSections is an array of length one', () => {
      // Arrange
      cpnt.props = new WMLFormZeroProps({
        fields: [new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" })],
        fieldSections: [3],
      });

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(1);
      expect(cpnt.displayFields[0].length).toBe(3);
    });

    it('should set displayFields to an array of arrays of fields with the correct lengths', () => {
      // Arrange
      cpnt.props = new WMLFormZeroProps({
        fields: [new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" })],
        fieldSections: [2, 1, 3],
      });

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(3);
      expect(cpnt.displayFields[0].length).toBe(2);
      expect(cpnt.displayFields[1].length).toBe(1);
      expect(cpnt.displayFields[2].length).toBe(3);
    });

    it('should update displayFields when props.fields is updated', () => {
      // Arrange
      cpnt.props = new WMLFormZeroProps({
        fields: [new WMLFieldZeroProps({ type:"default" })],
        fieldSections: [2],
      });
      cpnt.updateFields();
      cpnt.props.fields = [new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" }), new WMLFieldZeroProps({ type:"default" })];

      // Act
      cpnt.updateFields();

      // Assert
      expect(cpnt.displayFields.length).toBe(1);
      expect(cpnt.displayFields[0].length).toBe(3);
    });
  })
});

# FileName: \src\lib\wml-form-zero\wml-form-zero\wml-form-zero.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input, OnInit, SimpleChanges } from '@angular/core';

// rxjs
import { ReplaySubject, Subject, takeUntil, tap } from 'rxjs';

// wml components
import { generateClassPrefix, WMLUIProperty, WMLView } from '@windmillcode/angular-wml-components-base';
import { WMLFieldZeroProps } from '@windmillcode/angular-wml-field';

@Component({
  selector: 'wml-form-zero',
  templateUrl: './wml-form-zero.component.html',
  styleUrls: ['./wml-form-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class WMLFormZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef
  ) { }

  classPrefix = generateClassPrefix('WMLForm')
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @Input("props") props:WMLFormZeroProps = new WMLFormZeroProps({})

  ngUnsub=new Subject<void>()

  updateFields = ()=>{
    let displayFields:Array<WMLFieldZeroProps> =  [...this.props.fields]

    this.props.displayFields = []
    let expectedFieldsCount = this.props.fieldSections.reduce((acc,val)=>acc+val)
    let actualFieldsCount = displayFields.length
    if(expectedFieldsCount !== actualFieldsCount && actualFieldsCount !==0){
      throw new Error(`
      so the amount of fields you passed to WMLFormZeroProps.updateFields
      is not the same amount as the sum of all fields
      in WMLFormZeroProps.fieldSections, these are used for layout purposes check the 2 properties and try again

      or it might be that we have made a miscalcuation internally
      if you are using updateFields method in a complex manner
      either way contact @windmillcode with the issue
      `)
    }
    this.props.fieldSections
    .forEach((count)=>{
      let section:Array<WMLFieldZeroProps> =[]
      while(count-- !== 0){
        // @ts-ignore
        section.push(displayFields.shift())
      }

      this.props.displayFields.push(new WMLUIProperty({value:section}))

      this.props.fieldsUpdatedEvent.next()
    })
  }
  updateFieldsWrapper = (props= new WMLFormFieldsUpdateSubjProps())=>{


    this.props.fields = props.fields ?? this.props.fields
    if(props.resetFieldSections){
      this.props.resetFieldSections()
    }
    this.updateFields()
    this.cdref.detectChanges()

  }
  ngOnChanges(changes:SimpleChanges){

    this.updateFields()
  }

  listenForChangesInFields = ()=>{
    return this.props.fieldsUpdateSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap(this.updateFieldsWrapper)
    )
  }

  silenceSubmitAction =($event)=>{
    $event.preventDefault()
  }

  ngOnInit(): void {
    this.listenForChangesInFields().subscribe()

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }




}

export class WMLFormZeroProps{
  constructor(props:Partial<WMLFormZeroProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
    if(props.fieldSections){
      this.fieldSectionsIsPresent = true
    }
    this.resetFieldSections()

  }
  view!:WMLView
  displayFields:Array<WMLUIProperty<WMLFieldZeroProps[]>>=[]
  fields:Array<WMLFieldZeroProps> =[]
  fieldSections!:Array<number>
  fieldSectionsIsPresent=false
  fieldsUpdateSubj=new ReplaySubject<WMLFormFieldsUpdateSubjProps>()
  readonly updateFields=(fields:Array<WMLFieldZeroProps>)=>{
    this.fieldsUpdateSubj.next(new WMLFormFieldsUpdateSubjProps({
        fields
      })
    )
  }
  readonly fieldsUpdatedEvent = new Subject<void>()
  resetFieldSections=()=>{
    if(!this.fieldSectionsIsPresent ){
      this.fieldSections = [this.fields.length]
    }
  }
}

export class WMLFormFieldsUpdateSubjProps {
  constructor(props:Partial<WMLFormFieldsUpdateSubjProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }
  resetFieldSections= true
  fields?:Array<WMLFieldZeroProps>

}

# FileName: \src\lib\wml-form-zero\wml-form-zero.module.ts

import { NgModule } from '@angular/core';
import { WMLFormZeroComponent } from './wml-form-zero/wml-form-zero.component';


import { CommonModule } from '@angular/common';
import { WMLFieldZeroModule,WMLFieldZeroNGXTranslateModule } from '@windmillcode/angular-wml-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WMLNGXTranslatePipe, WMLNGXTranslateMockPipe, WMLNGXTranslateLoader } from '@windmillcode/angular-wml-components-base';

let cpnts =[
  WMLFormZeroComponent
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    WMLFieldZeroNGXTranslateModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLFormZeroNGXTranslateModule {

}

@NgModule({
  imports: [
    WMLFieldZeroModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {

        provide: TranslateLoader,
        useFactory: ()=> new WMLNGXTranslateLoader(),
      }
    }),
  ],
  exports:[
    WMLFormZeroNGXTranslateModule
  ]
})
export class WMLFormZeroModule {

}

# FileName: \styles.scss

@import "spacing";
@import "media_queries";
@import "color_pallete";
@import "common";




.glassmorphism {
  border-radius: calc(8/10.6 * 1rem);
  -webkit-backdrop-filter: blur(calc(4/10.6 * 1rem));
  backdrop-filter: blur(calc(4/10.6 * 1rem));
  box-shadow: 0 calc(8/10.6 * 1rem) calc(32/10.6 * 1rem) 0 rgba(0,0,0,0.4);
  border: calc(1/10.6 * 1rem) solid #ffffff2e;
}













the readme is included for previous reference however be careful the code has updated since then optimize the output as a page to be put a starlight astro website system for documentation purposes

References should go over each property avaiable to the developer in markdown table format with  | Property       | Type                               | Description |
for all properties and methos

DONT NOT COPY OVER THE CHANGELOG!! DONT NOT COPY OVER THE CHANGELOG!!

DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES DONT WRITE ANY FUCKING CODE I WILL PROVIDE THE EXAMPLES
