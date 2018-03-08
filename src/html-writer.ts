/**
 * This file contains a sample HtmlWriter that makes generating HTML code easier.
 */

import { TextWriter, CodeWriter } from '@yellicode/templating';
import * as opts from './options';

// https://html.spec.whatwg.org/multipage/syntax.html#void-elements
const voidHtmlElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];

/**
 * A very basic CodeWriter for writing HTML. This HtmlWriter supports the Yellicode tutorial code. 
 */
export class HtmlWriter extends CodeWriter {
    constructor(textWriter: TextWriter) {
        super(textWriter);
    }

    private writeOpeningTag(tagName: string, options: opts.HtmlElementOptions) {
        this.writeIndent();
        this.write(`<${tagName}`);
        if (options.classNames) {
            this.write(` class="${options.classNames}"`);
        }
        if (options.attributes) {
            for (const key in options.attributes) {
                if (options.attributes.hasOwnProperty(key)) {
                    const value = options.attributes[key];
                    if (typeof value == "boolean") {
                        if (value) this.write(` ${key}`);
                    }
                    else this.write(` ${key}="${options.attributes[key]}"`);
                }
            }
        }
        this.write('>');
    }

    private writeElementFromCallback(tagName: string, options: opts.HtmlElementOptions, innerHtml: (writer: HtmlWriter) => void): void {
        this.writeOpeningTag(tagName, options);
        this.writeEndOfLine();
        this.increaseIndent();
        if (innerHtml) innerHtml(this);
        this.decreaseIndent();
        this.writeLine(`</${tagName}>`);
    };

    private writeElementFromString(tagName: string, options: opts.HtmlElementOptions, innerHtml?: string): void {
        this.writeOpeningTag(tagName, options);
        if (innerHtml) {
            this.write(innerHtml);
        }
        if (innerHtml || voidHtmlElements.indexOf(tagName) === -1) {
            this.writeEndOfLine(`</${tagName}>`);
        }
        else this.writeEndOfLine(); // this is a void element
    }

    public writeElement(tagName: string, options: opts.HtmlElementOptions | null, innerHtml?: string): void;
    public writeElement(tagName: string, options: opts.HtmlElementOptions | null, innerHtml?: (writer: HtmlWriter) => void): void;
    public writeElement(tagName: string, options: opts.HtmlElementOptions | null, contents: any | string): void {
        if (!options) options = {};
        if (!contents || typeof contents == "string") {
            this.writeElementFromString(tagName, options, contents);
        }
        else {
            this.writeElementFromCallback(tagName, options, contents);
        }
    }


}