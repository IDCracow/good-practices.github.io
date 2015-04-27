# ID Good Practices
List of recommendations for Infusion Interactive Developers
####http://idcracow.github.io/good-practices.github.io/

###CODE READABILITY
For code readability you can indicate place where particular container is closed. You can do it like that:
```
<div class='element'>
  ...
</div>
<!-- /element -->

<div class='element'>
  ...
</div>
<!-- <div class='element'> -->
```
Developers will be grateful - he can use it to handle this element in javascript and conversly you can style it using .btn class without breaking popup functionality.

###DEFINE VARIABLES
While using pre-processors try to define variables. We recommend to remember about it especially when you are working with and defining:
* colours
* fonts size / face
* image paths
* media query breakpoints
Thanks to that you will follow DRY (Don’t repeat yourself ) approach what could significantly improve your code quality, make it easier to use and more flexible.

###IMPROVE LOADING TIME
You can improve loading time by using sprites or font icons. First one is highly recommended when you have a lot of small colour icons or colour graphic elements. The second one is for monochrome icons. Tools that may be useful for that:
* [Sprites generator](https://draeton.github.io/stitches)
* [Set of predefined icons](http://weloveiconfonts.com)
* [Create your own icon fonts](https://icomoon.io)

Sprites and icon fonts require only one HTTP request which is great for site performance. Icon fonts can be scaled smoothly to any size and styled easily using CSS.

###ASPECTS OF DOM
Use ui- or js- prefixes to decouple function aspects of DOM elements from CSS one.
```
<a class='btn js-popup'>Click me!</a>
```
Developers will be grateful - he can use it to handle this element in javascript and conversly you can style it using .btn class without breaking popup functionality.

###CSS SPECIFICITY
Keep the lowest specificity where possible - thanks to that your code will be flexible and easy to maintain.
* [Specificity strategy](https://css-tricks.com/strategies-keeping-css-specificity-low)

###FONTS
Remember about embedding fonts into your project, not everyone has Helvetica installed. Ask your graphic designer about web fonts. You should own proper licence for fonts that you are using.

###MEDIA QUERIES
Keep media queries in separate file and attach it to the 'basic' one.

###LIMITED TRUST...
Allow programmers to create their own styles but prepare separate file for that. The principle of limited trust applies not only on the road...

###STRUCTURE
* |- fonts
* |- variables
* |- mixins
* |- media queries
* |- layout
* |- content


###BEST METHODOLOGIES
* [BEM naming convention](https://en.bem.info/method/definitions)
* [Atomic CSS](http://bradfrost.com/blog/post/atomic-web-design )
We used BEM principles to create a set of front-end development techniques and tools, that allow us to build websites quickly and maintain them over a long time.

###CHECK BEFORE YOU START
Checklist before:
-[ ] make sure that you have all essential assets: comps, fonts and so on
-[ ] check if the design is prepared on grid
-[ ] ask your PM about device/browser requirements make sure that the design corresponds with it
-[ ] verify the design in terms of extreme cases for text, wrapping, elements shifting on other devices

###CHECK AFTER YOU FINISH
Checklist after:
-[ ] check if you added the favicon, the devil is in the detail
-[ ] turn off csses and see how you html is formated; if you did it properly you could easly use your page
-[ ] make sure that you put media queries in separate file
-[ ] remove all debug sections (alerts, logs), not everyone want to see your ‘dupa’
-[ ] care about validation, it’s hard to maintain it nowadays but try you are professional
-[ ] optimise images, doing it (with grunt, gulp or external apps) you can improve your site performance

###STYLEGUIDES TO FOLLOW
* [Mailchimp](http://ux.mailchimp.com/patterns)
* [Github](http://primercss.io/)
* [Airbnb](https://github.com/airbnb/javascript)
* [Bbc](http://www.bbc.co.uk/guidelines/futuremedia/technical/css.shtml)


###LINKS
Worth to know, follow good practices:
* https://css-tricks.com/efficiently-rendering-css
* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS
* http://www.smashingmagazine.com/2012/04/20/decoupling-html-from-css
* http://www.smashingmagazine.com/2008/05/02/improving-code-readability-with-css-styleguides
