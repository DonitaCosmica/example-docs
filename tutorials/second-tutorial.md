## my second tutorial

asasaadasdsadasa sasas as  aq  sqa s

```js
//@ts-check

/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new Programmer({fullname: 'Ryan Ray'}, 'javascript');
 * newProgrammer.getInfo();
 * 
 * @see https://docs.github.com/es/rest/repos/repos#create-a-repository-using-a-template
 * 
 * @todo Implement the rest of methods
 */
class Programmer {

    /**
     * @param {{fullname: string}} user User's Information
     * @param {string} language A programming language
     */
    constructor(user, language) {
        this.fullname = user.fullname;
        this.language = language;
    }

    /**
     * Get Programmer Information
     * @returns {void}
     */
    getInfo() {
        console.log(`I'm ${this.fullname} and my favorite programming language is ${this.language}`);
    }
}

/**
 * Know more in {@link Programmer}
 */
const programmerOne = new Programmer({fullname: 'Rayn Ray'}, 'javascript');
const programmerTwo = new Programmer({fullname: 'Joe'}, 'go');

programmerOne.getInfo();
programmerTwo.getInfo();
```