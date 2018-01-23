import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', () => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.ev(index, function(err, window) {
            const h1 = window.document.GetElementByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello World!");
            window.close();
        });
    })
})