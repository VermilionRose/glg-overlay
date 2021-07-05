glg-overlay is a [NodeCG](http://github.com/nodecg/nodecg) bundle. 
It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `^1.1.1`
You will need to have an appropriate version of NodeCG installed to use it.

**Installing NodeCG** <br>
This package requires NodeCG and npm to use <br>
NodeCG should be set-up in a familiar directory for ease of use <br>
https://www.nodecg.dev/docs/installing

**Downloading and extracting the bundle** <br>
Within the NodeCG directory, this package goes within the "bundles" directory

**Bundle Layout** <br>
*Ignore any non-directory file within the bundle when making edits*

- the "dashboard" directory contains the Controller files, layout, design, and backend used in the localhost browser
- the "extension" directory contains the index.js file containing all the backend const and Replicants used in the package
- the "graphics" directory contains the character graphics used and shown in any streaming broadcast using localhost webpages.
  - "deskads" is a directory containing all the graphics used as slideshow ads within the *desk* graphic in the bottom-left corner
  - "images" contains static pngs sources such as backgrounds, gradients, people, and templates for reference and use
  - "maps" contains pngs used in the maps section of the "desk" and are autofit to their containers
  - "masks" contains the alpha masks used to constrain the team color boxes containing names and series win tick marks on the *desk* graphic
  - "scripts" contains all the scripts, including all the backend, in the package. It also contains the autofit and animation script
  - "typefaces" contains all the typefaces in ttf or otf format used in the package
  - ALL OTHER FILES WITHIN ARE THE HTML AND CSS COMPONENTS OF GENERATING THE GRAPHICS

**Editing Desk Ads**
The bare mininum ads shown on the *desk* graphics do not reflect any sponsors or special events commands

- To edit desk ads, they must first be generated outside the package in a photo editor of choice and exported as a png to the "graphics" > "deskads" directory
- Open the *desk* html graphic in text-editor of choice and navigate to the *advertisements* div (approximately line 105 as of 2021-07-05)
- Locate the images of class "slideshow" and change or add any desk ads as needed


**Licensing**
Licensed for the personal use of Jacob Pochron <br>
Licensed for the commercial use of GLG for authorized users
