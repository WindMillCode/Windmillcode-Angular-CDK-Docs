See the contents of this angular library

Create an Overview Installation Usage CSS Customization and Reference Section for this code
heres the readme for previous reference however be careful the code has updated since then optimzie the output as a page to be put a starlight astro website system for documentation purposes

# FileName: \README.md

# Overview

The Windmillcode Angular WML Accordion Zero library provides a set of components and services to create accordion functionalities in Angular applications. Central to the library is the WMLAccordionZeroComponent, designed to enable developers to implement accordion structures efficiently. This library facilitates the development of accordions with features like dynamic content loading, customizable sections, and animation controls, all grounded in the WMLUIProperty framework to ensure consistency in development practices.  By leveraging these components, developers can construct accordions that are responsive and adaptable to various content types and user interactions, enhancing the informational architecture of Angular-based web applications.

WMLAccordionZeroComponent is the container which is populated with WMLAccordionZeroItemComponent to populate the accordion. WMLAccordionZeroItemComponent is a dynamic component and by defuault is uses WMLAccordionZeroSampleComponent as the accordion body and WMLAccordionZeroTitleComponent as the title of the accordion. you will want to replace

# Installation
```bash
npm install -s @windmillcode/angular-wml-accordion
```

# Usage
Certainly! Below are some usage examples of the WML Accordion Zero library for various development needs:

### 1. Accordion Usage


at its very core this is all you need to get started with the accordion
as default parameters already exist to show you how to use the accordion
```typescript
import { WMLAccordionZeroComponent, WMLAccordionZeroProps } from '@windmillcode/angular-wml-accordion';

@Component({
  selector: 'app-example',
  template: `
    <wml-accordion-zero [props]="accordionProps"></wml-accordion-zero>
  `
})
export class AppComponent {
  accordionProps = new WMLAccordionZeroProps({})
}
```

This example demonstrates a simple accordion with two sections:

```typescript
import { WMLAccordionZeroComponent, WMLAccordionZeroProps } from '@windmillcode/angular-wml-accordion';

@Component({
  selector: 'app-example',
  template: `
    <wml-accordion-zero [props]="accordionProps"></wml-accordion-zero>
  `
})
export class AppComponent {
  accordionProps = new WMLAccordionZeroProps({
    items: [
      [
        new WMLAccordionZeroItemProps({
          title: 'Section 1',
          accordionBody: new WMLCustomComponent({
            cpnt: MyContentComponent1,
            props: new MyContentProps1({/* props */})
          })
        })
      ],
      [
        new WMLAccordionZeroItemProps({
          title: 'Section 2',
          accordionBody: new WMLCustomComponent({
            cpnt: MyContentComponent2,
            props: new MyContentProps2({/* props */})
          })
        })
      ]
    ]
  });
}
```

### 2. Accordion with Dynamic Content Loading

This example shows how to dynamically load content into the accordion sections:

```typescript
// Assume MyDynamicContentComponent can change its content based on provided props
accordionProps.items[0][0].updateAccordionBodySubj.next(new WMLCustomComponent({
  cpnt: MyDynamicContentComponent,
  props: new MyDynamicContentProps({contentId: 'dynamic-content-1'})
}));
```

### 3. Controlling Accordion State

Demonstrating how developers can programmatically open or close accordion sections:

```typescript
// Open the first section
accordionProps.items[0][0].toggleAccordionSubj.next({ val: false, emit: true });

// Close the first section
accordionProps.items[0][0].toggleAccordionSubj.next({ val: true, emit: true });
```

### 4. Custom Animation Timing

This example modifies the default animation timing for the opening and closing of accordion items:

```typescript
accordionProps.items.forEach(group => {
  group.forEach(item => {
    item.startHeight = '0rem';
    item.endHeight0 = '10rem'; // Adjust as needed
    item.animationDuration0 = '0.5s'; // Speed up the animation
    item.animationDuration1 = '0.25s'; // Speed up the closing animation
  });
});
```

## Customization
There are the [color pallete](./_color_pallete.scss)
and [media queries](./_media_queries.scss) that you can use to customize the accordion. in your css simply replace the values with the ones you want to use and the component will take on the look. the variables are very specific and even named after the component to avoid any overlapping issues

### CSS Customization

# CSS Customization
* to globally customize in your  css file

```py
.WMLAccordionZeroView {
  &MainPod {
    &Pod {
      &ItemMainPod {
        &ItemPod0 {
          &Icon0 {}
          &Title0 {}
        }
        &ItemPod1 {
          &ContentPod {}
        }
      }
    }
  }
}

```



#  Docs


## WMLAccordionZeroProps

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | An optional identifier for the accordion component. |
| `items` | `Array<WMLAccordionZeroItemProps[]>` | An array of accordion item parameters to define each section. |

## WMLAccordionZeroItemProps

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | An optional identifier for the accordion item. |
| `title` | `string` | The title text for the accordion item. |
| `isClosed` | `boolean` | Indicates whether the accordion item is initially closed. |
| `toggleAccordionEvent` | `Subject<boolean>` | An event that toggles the accordion item's open/close state. |
| `toggleAccordionSubj` | `Subject<{ val: boolean; emit: boolean }>` | Subject to programmatically toggle the accordion's state. |
| `accordionBody` | `WMLCustomComponent` | The component to render as the accordion item's body. |
| `updateAccordionBodySubj` | `Subject<WMLCustomComponent>` | Subject to dynamically update the content of the accordion body. |
| `startHeight` | `string` | CSS value for the starting height during the opening animation. |
| `endHeight0` | `string` | CSS value for the end height during the opening animation. |
| `endHeight1` | `string` | CSS value for the end height during the closing animation. |
| `animationDuration0` | `string` | Duration of the opening animation. |
| `animationDuration1` | `string` | Duration of the closing animation. |

## WMLAccordionZeroSampleProps

| Property | Type | Description | Default Value |
|----------|------|-------------|---------------|
| `id` | `string` | Identifier for the sample component. | `""` |

## WMLAccordionZeroTitleProps

| Property | Type | Description | Default Value |
|----------|------|-------------|---------------|
| `title` | `string` | Text for the accordion title. | `"My Accordion Title"` |


These tables provide an overview of the key elements within the WML Accordion Zero library that developers can interact with to customize and control accordion behavior in their Angular applications.


These examples illustrate the flexibility and capability of the WML Accordion Zero library in catering to a variety of accordion-related needs in Angular applications, from basic setups to more advanced and dynamic scenarios.


# Changelog

v0.0.1
* can specify multiple accordion with in the component and specifiy your child compoennt as well
* if you want the accordion body to be the same width as its header fintd the target accordion and specify its width
```css
  .WMLAccordionZeroPod0 wml-accordion-zero-item:nth-child(1){
    flex: 0 0 20%!;(string=
## v16.2.80
 * updated package to reflect the version  16.2.80 of @angular/core package)
    width: 20%!;(MISSING)
  }

```
v 0.0.2
* coorect dependencies

v 0.0.3
* end devs can now decide whether an accordion is open on init or not


v 16.2.5-0
* end devs can control animations values for the the accordion
here are the default values that get passed to the scss
```ts
  startHeight = "calc(0/10.6 * 1rem)"
  endHeight0 = "calc(20000/10.6 * 1rem)"
  endHeight1 = "calc(2000/10.6 * 1rem)"
  animationDuration0 = "10s"
  animationDuration1 = "1.25s"
```
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
 * updated package to reflect the version  ^17.2.1 of @angular/core package

## v17.2.1001 [2/21/24]
 * [UPDATE]  added WMLAccordionZeroItemProps.updateAccordionBodySubj to toggle the accordion body as needed,
 * [UPDATE]  you can customize the title via WMLAccordionZeroItemProps.accordionTitle
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
,
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


$wml-accordion-white: "255,255,255";
$wml-accordion-black: "0,0,0";
$wml-accordion-primary: "144,238,144";
$wml-accordion-secondary:"112,112,112";

$wml-accordion-primary-gradient:   radial-gradient(farthest-corner at 100% 0px,convert-to-rgb($wml-accordion-primary) 0%,convert-to-rgb($wml-accordion-secondary) 150%);
$wml-accordion-secondary-gradient: radial-gradient(farthest-corner at 100% 0px,grey 0%,convert-to-rgb($wml-accordion-black) 150%);


:root{
  --wml-accordion-white:#{$wml-accordion-white};
  --wml-accordion-black:#{$wml-accordion-black};
  --wml-accordion-primary:#{$wml-accordion-primary};
  --wml-accordion-secondary:#{$wml-accordion-secondary};

  --wml-accordion-primary-gradient: #{$wml-accordion-primary-gradient};
  --wml-accordion-secondary-gradient: #{$wml-accordion-secondary-gradient};

}

# FileName: \_common.scss

$wml-accordion-border-radius0:calc(8/16 * 1rem);
$wml-accordion-border-radius1:calc(10/16 * 1rem);
$wml-accordion-border-radius2:calc(20/16 * 1rem);

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
  --wml-accordion-mobile-font: #{$mobileFont};
  --wml-accordion-mobile: #{$mobile};
  --wml-accordion-small-mobile: #{$smallMobile};
  --wml-accordion-medium-mobile: #{$mediumMobile};
  --wml-accordion-tablet: #{$tablet};
  --wml-accordion-tablet-portrait: #{$tabletPortrait};
  --wml-accordion-tablet-portrait-down: #{$tabletPortraitDown};
  --wml-accordion-tablet-landscape: #{$tabletLandscape};
  --wml-accordion-small-desktop: #{$smallDesktop};
  --wml-accordion-tablet-landscape-down: #{$tabletLandscapeDown};
  --wml-accordion-desktop: #{$desktop};
  --wml-accordion-not-mobile: #{$notMobile};
  --wml-accordion-laptop: #{$laptop};
  --wml-accordion-laptop-down: #{$laptopDown};
  --wml-accordion-laptop-tablet: #{$laptopTablet};
  --wml-accordion-laptop-tablet-landscape: #{$laptopTabletLandscape};
  --wml-accordion-large-desktop: #{$largeDesktop};
  --wml-accordion-large-desktop-down: #{$largeDesktopDown};
  --wml-accordion-xl-desktop: #{$xlDesktop};
  --wml-accordion-xl-desktop-down: #{$xlDesktopDown};
  --wml-accordion-xxl-desktop: #{$xxlDesktop};
  --wml-accordion-xxxl-desktop: #{$xxxlDesktop};
  --wml-accordion-dekstop-down-for-campaigns: #{$dekstopDownForCampaigns};
  --wml-accordion-tablet-for-header: #{$tabletForHeader};
  --wml-accordion-tablet-landscape-for-header: #{$tabletLandscapeForHeader};
  --wml-accordion-tablet-landscape-down-for-header: #{$tabletLandscapeDownForHeader};
  --wml-accordion-desktop-for-header: #{$desktopForHeader};
  --wml-accordion-laptop-for-header: #{$laptopForHeader};
}

# FileName: \_spacing.scss

$wml-accordion-spacing0: calc(1/16* 1rem);
$wml-accordion-spacing1: calc(2/16* 1rem);
$wml-accordion-spacing2: calc(4/16* 1rem);
$wml-accordion-spacing3: calc(8/16* 1rem);
$wml-accordion-spacing4: calc(12/16* 1rem);
$wml-accordion-spacing5: calc(16/16* 1rem);
$wml-accordion-spacing6: calc(24/16* 1rem);
$wml-accordion-spacing7: calc(32/16* 1rem);
$wml-accordion-spacing8: calc(48/16* 1rem);
$wml-accordion-spacing9: calc(64/16* 1rem);
$wml-accordion-spacing10: calc(72/16* 1rem);
$wml-accordion-spacing11: calc(96/16* 1rem);
$wml-accordion-spacing12: calc(128/16* 1rem);
$wml-accordion-spacing13: calc(192/16* 1rem);
$wml-accordion-spacing14: calc(256/16* 1rem);
$wml-accordion-spacing15: calc(384/16* 1rem);
$wml-accordion-spacing16: calc(512/16* 1rem);




# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero\wml-accordion-zero.component.global.scss

#root wml-accordion-zero{

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero\wml-accordion-zero.component.html

<div [class]="classPrefix('MainPod')">
  <section [class]="classPrefix('Pod'+i) + ' ' +classPrefix('MainItem0')" *ngFor="let section of props.items;let i = index;">
    <wml-accordion-zero-item [class]="classPrefix('MainItem1') + ' ' +item.class"
    *ngFor="let item of section" [props]="item"></wml-accordion-zero-item>
  </section>
</div>

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero\wml-accordion-zero.component.phone.scss

#root wml-accordion-zero{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero\wml-accordion-zero.component.scss


@import '../../../../styles';

wml-accordion-zero {
  &.WMLAccordionZeroView{
    display: block;
    .WMLAccordionZero{
      &Main{

        &Item {
          &0 {
            display: flex;
            flex-flow: row wrap;
          }
          &1{
            flex:  1 0 auto;
            position: relative;
            max-width: 100%;
          }
        }

      }
      &Pod{


      }
    }
  }

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero\wml-accordion-zero.component.spec.ts

// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WMLAccordionZeroComponent, WMLAccordionZeroProps } from './wml-accordion-zero.component';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
import { WMLAccordionZeroItemProps } from '../wml-accordion-zero-item/wml-accordion-zero-item.component';


describe('WMLAccordionZeroComponent', () => {
  let cpnt: WMLAccordionZeroComponent;
  let fixture: ComponentFixture<WMLAccordionZeroComponent>;

  beforeEach(async () => {


    resetImports()
    resetProviders()
    await wmlTestUtils.configureTestingModuleForComponents(WMLAccordionZeroComponent);


    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(WMLAccordionZeroComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLAccordionZeroView ')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      let id
      cpnt.props.id = id = "id"
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)

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


describe("WMLAccordionZeroProps",()=>{

  let helper:WMLAccordionZeroProps
  beforeEach(()=>{
    helper = new WMLAccordionZeroProps()
  })
  describe("init",()=>{
    it("should create", () => {
      expect(helper).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(helper.id).toEqual('')
    })

    it("should have all properties be the correct class instance", () => {
      helper.items
      .forEach((group)=>{
        group.forEach((item)=>{
          expect(item).toBeInstanceOf(WMLAccordionZeroItemProps)
        })
      })
    })
  })
})

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero\wml-accordion-zero.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation, ViewContainerRef, ViewChild   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLCustomComponent, WMLUIProperty, addCustomComponent, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroSampleComponent, WMLAccordionZeroSampleProps } from '../wml-accordion-zero-sample/wml-accordion-zero-sample.component';
import { WMLAccordionZeroItemProps } from '../wml-accordion-zero-item/wml-accordion-zero-item.component';


// misc



@Component({

  selector: 'wml-accordion-zero',
  templateUrl: './wml-accordion-zero.component.html',
  styleUrls: ['./wml-accordion-zero.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class WMLAccordionZeroComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLAccordionZero')
  @Input('props') props: WMLAccordionZeroProps = new WMLAccordionZeroProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string;

  ngUnsub= new Subject<void>()

  ngOnInit(): void {
    this.myId = this.props.id
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroProps {
  constructor(props:Partial<WMLAccordionZeroProps & {propItems?:WMLAccordionZeroItemProps[]}>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
    if(props.propItems){
      this.items = props.propItems.map((item)=>{
        return [item]
      })
    }
  }

  id = ""
  items : WMLAccordionZeroItemProps[][] =[
    Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemProps()
    }),
    Array(3)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemProps()
    }),
    Array(2)
    .fill(null)
    .map((nullVal,index0)=>{
      return new WMLAccordionZeroItemProps()
    }),
  ]

}



# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-item\wml-accordion-zero-item.component.global.scss

#root wml-accordion-zero-item{

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-item\wml-accordion-zero-item.component.html

<div [class]="classPrefix('MainPod')">

  <div [class]="classPrefix('Pod0')">
    <div (click)="toggleAccordion()">
      <i *ngIf="props.isClosed" [class]="classPrefix('Pod0Icon0') + ' fa-solid fa-chervron-down'"></i>
      <i *ngIf="!props.isClosed" [class]="classPrefix('Pod0Icon0') + ' fa-solid fa-chervron-up'"></i>
    </div>
    <ng-template  #customAccordionTitle ></ng-template>


  </div>

  <div  [class]="classPrefix('Pod1') + ' '+ contentPod.class"
  [ngStyle]="{'display': contentPod.isPresent ? 'block' : 'none'}"
   (animationend)="triggerCloseAnimation()">
    <ng-template  #customAccordionBody ></ng-template>
  </div>
</div>

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-item\wml-accordion-zero-item.component.phone.scss

#root wml-accordion-zero-item{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-item\wml-accordion-zero-item.component.scss


@import '../../../../styles';


wml-accordion-zero-item {

    --wml-accordion-zero-startHeight: calc(0/10.6 * 1rem);
    --wml-accordion-zero-endHeight0 : calc(20000/10.6 * 1rem);
    --wml-accordion-zero-endHeight1 : calc(2000/10.6 * 1rem);
    --wml-accordion-zero-animationDuration0: 10s;
    --wml-accordion-zero-animationDuration1: 1.25s;

    @keyframes open-accordion {
      0%{
        max-height:var(--wml-accordion-zero-startHeight);
      }
      100%{
        max-height:var(--wml-accordion-zero-endHeight0);
      }
    }

    @keyframes close-accordion {
      0%{
        max-height:var(--wml-accordion-zero-endHeight1);
      }
      100%{
        max-height:var(--wml-accordion-zero-startHeight);
      }
    }

  &.WMLAccordionZeroItemView{
    display: block;
    .WMLAccordionZeroItem{
      &Main{

        &Pod{
          max-width: 100%;
          overflow: hidden;
          // display: inline-block;
        }

      }
      &Pod{

        &0{
          max-width: 100%;
          overflow: hidden;
          background: var(--wml-accordion-secondary-gradient);
          padding: $wml-accordion-spacing3;
          display: flex;
          align-items: center;

          &Icon {
            &0 {
              color: rgba(var(--wml-accordion-white));
              font-size: calc(20/10.6 * 1rem);
              cursor: pointer;
            }
          }

          &Title {
            &0 {
              margin: 0 0 0 $wml-accordion-spacing5;
            }
          }


        }
        &1{

          max-width: 100%;
          max-height: var(--wml-accordion-zero-endHeight0);
          animation: open-accordion var(--wml-accordion-zero-animationDuration0);
          background-color: rgba(var(--wml-accordion-white),.7);
          overflow: hidden;
          &Closing{
            max-height: var(--wml-accordion-zero-startHeight);
            animation: close-accordion var(--wml-accordion-zero-animationDuration1);
          }
        }
      }
    }
  }

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-item\wml-accordion-zero-item.component.spec.ts

// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WMLAccordionZeroItemComponent, WMLAccordionZeroItemProps } from './wml-accordion-zero-item.component';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
import { WMLCustomComponent, WMLUIProperty } from '@windmillcode/angular-wml-components-base';



let wmlComponetsBase = require("@windmillcode/angular-wml-components-base")


describe('WMLAccordionZeroItemComponent', () => {
  let cpnt: WMLAccordionZeroItemComponent;
  let fixture: ComponentFixture<WMLAccordionZeroItemComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()

    await wmlTestUtils.configureTestingModuleForComponents(WMLAccordionZeroItemComponent);


    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(WMLAccordionZeroItemComponent));
    fixture.detectChanges()
    spyOn(cpnt,"updateCssValues").and.callThrough()
    spyOn(cpnt,"toggleAccordion").and.callThrough()

    wmlTestUtils
    .spyOnForES6Imports(wmlComponetsBase,"addCustomComponent")
    .and.callThrough()

    spyOn(cpnt.el.nativeElement.style,"setProperty")
    spyOn(cpnt.cdref,"detectChanges")
    spyOn(cpnt.contentPod,"updateClassString")



  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLAccordionZeroItemView ')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
      expect(cpnt.contentPod).toBeInstanceOf(WMLUIProperty)
    })
  })

  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      let id
      cpnt.props.id = id = "id"
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)
      expect(wmlComponetsBase.addCustomComponent ).toHaveBeenCalledWith(
        cpnt.customAccordionBody,
        cpnt.props.accordionBody.cpnt,
        cpnt.props.accordionBody.props
      )
      expect(cpnt.updateCssValues).toHaveBeenCalled()


    })

    it(` when called |
    and (!this.props.isClosed) === true |
    does the required action `,()=>{
      // arrange
      let id
      cpnt.props.id = id = "id"
      cpnt.props.isClosed = false
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)
      expect(wmlComponetsBase.addCustomComponent ).toHaveBeenCalledWith(
        cpnt.customAccordionBody,
        cpnt.props.accordionBody.cpnt,
        cpnt.props.accordionBody.props
      )
      expect(cpnt.updateCssValues).toHaveBeenCalled()
      expect(cpnt.toggleAccordion).toHaveBeenCalledWith(
        cpnt.props.isClosed
      )


    })
  })

  describe("updateCssValues",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{

      // act
      cpnt.updateCssValues();
      // arrange
      [
        "startHeight",
        "endHeight0",
        "endHeight1",
        "animationDuration0",
        "animationDuration1",
      ]
      .forEach((val)=>{

      // assert
        expect(cpnt.el.nativeElement.style.setProperty).toHaveBeenCalledWith(
          '--wml-accordion-zero-'+val,
          cpnt.props[val]
        )
      })

      // assert
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()

    })


  })

  describe("toggleAccordion",()=>{
    describe("val",()=>{
      it(` when called |
      under normal conditions |
      does the required action `,()=>{
        // arrange
        let val = true
        // act
        cpnt.toggleAccordion(val)
        // assert
        expect(cpnt.contentPod.updateClassString).toHaveBeenCalledWith(
          cpnt.classPrefix('Pod1Closing')
        )
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()
        expect(cpnt.props.isClosed).toEqual(val)

      })

      it(` when called |
      under (val === false)  |
      does the required action `,()=>{
        // arrange
        let val = false
        // act
        cpnt.toggleAccordion(val)
        // assert
        expect(cpnt.contentPod.updateClassString).toHaveBeenCalledWith(
          cpnt.classPrefix('Pod1Closing'),"remove"
        )
        expect(cpnt.contentPod.isPresent).toEqual(true)
        expect(cpnt.cdref.detectChanges).toHaveBeenCalled()


      })
    })

  })

  describe("triggerCloseAnimation",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      cpnt.props.isClosed = true
      // act
      cpnt.triggerCloseAnimation()
      // assert
      expect(cpnt.contentPod.isPresent).toEqual(false)
      expect(cpnt.cdref.detectChanges).toHaveBeenCalled()

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


describe("WMLAccordionZeroItemProps",()=>{
  let cpnt:WMLAccordionZeroItemProps
  beforeEach(()=>{
    cpnt = new WMLAccordionZeroItemProps()
  })
  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.title).toEqual('My Accordion Item')
      expect(cpnt.isClosed).toEqual(true)
      expect(cpnt.startHeight).toEqual("calc(0/10.6 * 1rem)")
      expect(cpnt.endHeight0).toEqual("calc(20000/10.6 * 1rem)")
      expect(cpnt.endHeight1).toEqual("calc(2000/10.6 * 1rem)")
      expect(cpnt.animationDuration0).toEqual("10s")
      expect(cpnt.animationDuration1).toEqual("1.25s")
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.accordionBody).toBeInstanceOf(WMLCustomComponent)
    })
  })
})

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-item\wml-accordion-zero-item.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation, ViewChild, ViewContainerRef, ElementRef   } from '@angular/core';

// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { WMLCustomComponent, WMLUIProperty, addCustomComponent, generateClassPrefix } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroSampleComponent, WMLAccordionZeroSampleProps } from '../wml-accordion-zero-sample/wml-accordion-zero-sample.component';
import { WMLAccordionZeroTitleComponent, WMLAccordionZeroTitleProps } from '../wml-accordion-zero-title/wml-accordion-zero-title.component';
// misc

type toggleAccordionEventType = Partial<{
  val:boolean,
  emit:boolean
}>

@Component({

  selector: 'wml-accordion-zero-item',
  templateUrl: './wml-accordion-zero-item.component.html',
  styleUrls: ['./wml-accordion-zero-item.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None

})
export class WMLAccordionZeroItemComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
    public el:ElementRef
  ) { }

  classPrefix = generateClassPrefix('WMLAccordionZeroItem')
  @Input('props') props: WMLAccordionZeroItemProps = new WMLAccordionZeroItemProps()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  @HostBinding('id') myId!:string;
  @ViewChild("customAccordionBody", {read:ViewContainerRef,static:true}) customAccordionBody!:ViewContainerRef;
  @ViewChild("customAccordionTitle", {read:ViewContainerRef,static:true}) customAccordionTitle!:ViewContainerRef;
  ngUnsub= new Subject<void>()
  contentPod = new WMLUIProperty({isPresent:false})



  updateCssValues = ()=>{
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-startHeight',
      this.props.startHeight
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-endHeight0',
      this.props.endHeight0
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-endHeight1',
      this.props.endHeight1
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-animationDuration0',
      this.props.animationDuration0
    )
    this.el.nativeElement.style.setProperty(
      '--wml-accordion-zero-animationDuration1',
      this.props.animationDuration1
    )
    this.cdref.detectChanges()
  }

  toggleAccordion = (val:toggleAccordionEventType ={emit:true})=>{
    this.props.isClosed = val.val ?? !this.props.isClosed

    if(this.props.isClosed){
      this.contentPod.updateClassString(this.classPrefix('Pod1Closing'))
    }
    else {
      this.contentPod.isPresent = true
      this.contentPod.updateClassString(this.classPrefix('Pod1Closing'),"remove")
    }
    this.cdref.detectChanges()
    if(val.emit !== false){
      this.props.toggleAccordionEvent.next(this.props.isClosed)
    }
  }

  triggerCloseAnimation =()=>{
    if(this.props.isClosed){
      this.contentPod.isPresent = false;
      this.cdref.detectChanges();
    }
  }

  listenForToggle =()=>{
    return this.props.toggleAccordionSubj
    .pipe(
      takeUntil(this.ngUnsub),
      tap((val)=>this.toggleAccordion({
        ...val,
        val:!val.val
      }))
    )

  }

  listenForUpdateAccordionBody =()=>{
    return this.props.updateAccordionBodySubj
      .pipe(
        takeUntil(this.ngUnsub),
        tap((custom)=>{
          this.customAccordionBody.clear()
          this.props.accordionBody = custom
          addCustomComponent(
            this.customAccordionBody,
            custom.cpnt,
            custom.props
          )
          this.cdref.detectChanges()
        })
      )

  }


  updateAccordionBody() {
    addCustomComponent(
      this.customAccordionBody,
      this.props.accordionBody.cpnt,
      this.props.accordionBody.props
    );
  }

  ngOnInit(): void {
    this.myId = this.props.id
    this.updateAccordionBody();
    addCustomComponent(
      this.customAccordionTitle,
      this.props.accordionTitle.cpnt,
      this.props.accordionTitle.props
    )
    this.updateCssValues()
    this.listenForToggle().subscribe()
    this.listenForUpdateAccordionBody().subscribe()
    if(!this.props.isClosed){
      this.toggleAccordion({
        val:this.props.isClosed,
      })
    }

  }


  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroItemProps extends WMLUIProperty {
  constructor(props:Partial<WMLAccordionZeroItemProps>={}){
    super(props)
    let origProps = Object.entries(props)
      .filter(([key,val]) => {
        return !key.startsWith('prop');
      });
    Object.assign(this, { ...Object.fromEntries(origProps) });
    if(props.propTitle){
      this.accordionTitle.props.title = props.propTitle
    }
  }



  isClosed = true
  toggleAccordionEvent = new Subject<boolean>()
  toggleAccordionSubj = new Subject<{
    val:boolean,
    emit:boolean
  }>()
  propTitle = "My Accordion Title"
  accordionTitle = new WMLCustomComponent({
    cpnt:WMLAccordionZeroTitleComponent,
    props:new WMLAccordionZeroTitleProps()
  })
  /**
   * @deprecated use propTitle instead
  */
  get title(){
    return this.accordionTitle.props.title
  }
  /**
   * @deprecated use propTitle instead
  */
  set title(val){
    if(this.accordionTitle){
      this.accordionTitle.props.title = val
    }
  }
  accordionBody = new WMLCustomComponent({
    cpnt:WMLAccordionZeroSampleComponent,
    props:new WMLAccordionZeroSampleProps()
  })
  updateAccordionBodySubj = new Subject<WMLCustomComponent>()
  customTitle
  startHeight = "calc(0/10.6 * 1rem)"
  endHeight0 = "calc(20000/10.6 * 1rem)"
  endHeight1 = "calc(2000/10.6 * 1rem)"
  animationDuration0 = "10s"
  animationDuration1 = "1.25s"

}



# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-sample\wml-accordion-zero-sample.component.global.scss

#root wml-accordion-zero-sample{

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-sample\wml-accordion-zero-sample.component.html

<div [class]="classPrefix('MainPod')">
  <p>Replace WMLAccordionZeroItemProps.accordionBody with WMLCustomComponent class instantiated with the component and props as necessary</p>
</div>

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-sample\wml-accordion-zero-sample.component.phone.scss

#root wml-accordion-zero-sample{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-sample\wml-accordion-zero-sample.component.scss





  @import '../../../../styles';






  wml-accordion-zero-sample {



  &.WMLAccordionZeroSampleView{
    display: block;

    .WMLAccordionZeroSample{
      &Main{
        &Pod{

          background: var(--wml-accordion-primary-gradient);
          height: calc(300/10.6 * 1rem);

          p{
            font-size: calc(32/10.6 * 1rem);
            white-space:pre-wrap;
          }
        }
      }
      &Pod{

        &0{}
      }
    }
  }

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-sample\wml-accordion-zero-sample.component.spec.ts

// testing
import { ComponentFixture } from '@angular/core/testing';

// rxjs
import { Subject } from 'rxjs';

import { WMLAccordionZeroSampleComponent } from './wml-accordion-zero-sample.component';
import { wmlTestUtils } from '../test-utils/test-utils';
import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';




describe('WMLAccordionZeroSampleComponent', () => {
  let cpnt: WMLAccordionZeroSampleComponent;
  let fixture: ComponentFixture<WMLAccordionZeroSampleComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    await wmlTestUtils.configureTestingModuleForComponents(
      WMLAccordionZeroSampleComponent
    );


    ({fixture, cpnt} =  wmlTestUtils
      .grabComponentInstance(WMLAccordionZeroSampleComponent));
    fixture.detectChanges()
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLAccordionZeroSampleView ')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })

  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      let id
      cpnt.props.id = id = "id"
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)

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

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-sample\wml-accordion-zero-sample.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { generateClassPrefix } from '@windmillcode/angular-wml-components-base';


// misc



@Component({

  selector: 'wml-accordion-zero-sample',
  templateUrl: './wml-accordion-zero-sample.component.html',
  styleUrls: ['./wml-accordion-zero-sample.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,

  encapsulation:ViewEncapsulation.None




})
export class WMLAccordionZeroSampleComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLAccordionZeroSample')


  @Input('props') props: WMLAccordionZeroSampleProps = new WMLAccordionZeroSampleProps()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);


  @HostBinding('id') myId!:string

  ngUnsub= new Subject<void>()

  ngOnInit(): void {

    this.myId = this.props.id

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroSampleProps {
  constructor(props:Partial<WMLAccordionZeroSampleProps>={}){
    Object.assign(
      this,
      {
        ...props
      }
    )
  }

  id = ""

}



# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-title\wml-accordion-zero-title.component.global.scss

#root wml-accordion-zero-title{

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-title\wml-accordion-zero-title.component.html

<div [class]="classPrefix('MainPod')">
  <h2  [class]="classPrefix('Pod0Title0')">{{props.title | translate}}</h2>
</div>

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-title\wml-accordion-zero-title.component.phone.scss

#root wml-accordion-zero-title{
  @media #{$mobile}{

  }
}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-title\wml-accordion-zero-title.component.scss





  @import '../../../../styles';






  wml-accordion-zero-title {



  &.WMLAccordionZeroTitleView{
    display: block;
    height:100%;
    .WMLAccordionZeroTitle{
      &Main{
        &Pod{


          height:100%;
        }
      }
      &Pod{

        &0{
          &Title {
            &0 {
              margin: 0 0 0 $wml-accordion-spacing5;
            }
          }
        }
      }
    }
  }

}

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-title\wml-accordion-zero-title.component.spec.ts

// testing
import { ComponentFixture } from '@angular/core/testing';




import { resetImports } from '../test-utils/mock-imports';
import { resetProviders } from '../test-utils/mock-providers';
import { wmlTestUtils } from '../test-utils/test-utils';
import { resetDeclarations } from '../test-utils/mock-declarations';


// rxjs
import { Subject } from 'rxjs';

import { WMLAccordionZeroTitleComponent } from './wml-accordion-zero-title.component';


describe('WMLAccordionZeroTitleComponent', () => {
  let cpnt: WMLAccordionZeroTitleComponent;
  let fixture: ComponentFixture<WMLAccordionZeroTitleComponent>;

  beforeEach(async () => {
    resetImports()
    resetProviders()
    resetDeclarations()



    await wmlTestUtils.configureTestingModuleForComponents(WMLAccordionZeroTitleComponent);


    ({fixture, cpnt} =  wmlTestUtils.grabComponentInstance(WMLAccordionZeroTitleComponent));
    fixture.detectChanges()

    spyOn(cpnt.cdref,"detectChanges")
  })

  describe("init", () => {

    it("should create", () => {
      expect(cpnt).toBeTruthy()
    })

    it("should have all values initalize properly", () => {
      expect(cpnt.myClass).toEqual('WMLAccordionZeroTitleView ')
    })

    it("should have all properties be the correct class instance", () => {
      expect(cpnt.ngUnsub).toBeInstanceOf(Subject<void>)
    })
  })


  describe("ngOnInit",()=>{
    it(` when called |
    under normal conditions |
    does the required action `,()=>{
      // arrange
      let id
      cpnt.props.id = id = "id"
      // act
      cpnt.ngOnInit()
      // assert
      expect(cpnt.myId).toEqual(id)

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

# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero-title\wml-accordion-zero-title.component.ts

// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input  , ViewEncapsulation   } from '@angular/core';



// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// wml-components
import { generateClassPrefix, generateIdPrefix } from '@windmillcode/angular-wml-components-base';


// misc



@Component({

  selector: 'wml-accordion-zero-title',
  templateUrl: './wml-accordion-zero-title.component.html',
  styleUrls: ['./wml-accordion-zero-title.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,

  encapsulation:ViewEncapsulation.None

})
export class WMLAccordionZeroTitleComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

  ) { }

  classPrefix = generateClassPrefix('WMLAccordionZeroTitle')


  @Input('props') props: WMLAccordionZeroTitleProps = new WMLAccordionZeroTitleProps()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);


  @HostBinding('id') myId!:string

  ngUnsub= new Subject<void>()

  ngOnInit(): void {

    this.myId = this.props.id

  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class WMLAccordionZeroTitleProps {
  constructor(props:Partial<WMLAccordionZeroTitleProps>={}){
    let origProps = Object.entries(props)
    .filter(([key,val]) => {
      return !key.startsWith('prop');
    });
    Object.assign(this, { ...Object.fromEntries(origProps) })
  }

  id = ""
  title="My Accordion Title"
}



# FileName: \src\lib\wml-accordion-zero\wml-accordion-zero.module.ts




import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WMLAccordionZeroComponent } from './wml-accordion-zero/wml-accordion-zero.component';
import { CommonModule } from '@angular/common';
import { WMLNGXTranslateLoader, WMLNGXTranslateMockPipe, WMLNGXTranslatePipe } from '@windmillcode/angular-wml-components-base';
import { WMLAccordionZeroSampleComponent } from './wml-accordion-zero-sample/wml-accordion-zero-sample.component';
import { WMLAccordionZeroItemComponent } from './wml-accordion-zero-item/wml-accordion-zero-item.component';
import { WMLAccordionZeroTitleComponent } from './wml-accordion-zero-title/wml-accordion-zero-title.component';

let cpnts= [
  WMLAccordionZeroComponent,
  WMLAccordionZeroSampleComponent,
  WMLAccordionZeroItemComponent,
  WMLAccordionZeroTitleComponent,
]

@NgModule({
  declarations: [
    ...cpnts,
  ],
  imports: [
    WMLNGXTranslatePipe,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    ...cpnts
  ],
  providers:[
    {provide: WMLNGXTranslatePipe,useValue: WMLNGXTranslateMockPipe}
  ],
})
export class WMLAccordionZeroNGXTranslateModule {

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
    WMLAccordionZeroNGXTranslateModule
  ]
})
export class WMLAccordionZeroModule {

}




# FileName: \styles.scss

@import "spacing";
@import "media_queries";
@import "color_pallete";
@import "common";
@import "fontawesome";








