"use strict";
/**
 * This file contains a sample HtmlWriter that makes generating HTML code easier.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const templating_1 = require("@yellicode/templating");
// https://html.spec.whatwg.org/multipage/syntax.html#void-elements
const voidHtmlElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];
/**
 * A very basic CodeWriter for writing HTML. This HtmlWriter supports the Yellicode tutorial code.
 */
class HtmlWriter extends templating_1.CodeWriter {
    constructor(textWriter) {
        super(textWriter);
    }
    writeOpeningTag(tagName, options) {
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
                        if (value)
                            this.write(` ${key}`);
                    }
                    else
                        this.write(` ${key}="${options.attributes[key]}"`);
                }
            }
        }
        this.write('>');
    }
    writeElementFromCallback(tagName, options, innerHtml) {
        this.writeOpeningTag(tagName, options);
        this.writeEndOfLine();
        this.increaseIndent();
        if (innerHtml)
            innerHtml(this);
        this.decreaseIndent();
        this.writeLine(`</${tagName}>`);
    }
    ;
    writeElementFromString(tagName, options, innerHtml) {
        this.writeOpeningTag(tagName, options);
        if (innerHtml) {
            this.write(innerHtml);
        }
        if (innerHtml || voidHtmlElements.indexOf(tagName) === -1) {
            this.writeEndOfLine(`</${tagName}>`);
        }
        else
            this.writeEndOfLine(); // this is a void element
    }
    writeElement(tagName, options, contents) {
        if (!options)
            options = {};
        if (!contents || typeof contents == "string") {
            this.writeElementFromString(tagName, options, contents);
        }
        else {
            this.writeElementFromCallback(tagName, options, contents);
        }
    }
}
exports.HtmlWriter = HtmlWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbC13cml0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodG1sLXdyaXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsc0RBQStEO0FBRy9ELG1FQUFtRTtBQUNuRSxNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFL0o7O0dBRUc7QUFDSCxnQkFBd0IsU0FBUSx1QkFBVTtJQUN0QyxZQUFZLFVBQXNCO1FBQzlCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU8sZUFBZSxDQUFDLE9BQWUsRUFBRSxPQUFnQztRQUNyRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNwQixHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO3dCQUMzQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7NEJBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLENBQUM7b0JBQ0QsSUFBSTt3QkFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1RCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxPQUFlLEVBQUUsT0FBZ0MsRUFBRSxTQUF1QztRQUN2SCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUFBLENBQUM7SUFFTSxzQkFBc0IsQ0FBQyxPQUFlLEVBQUUsT0FBZ0MsRUFBRSxTQUFrQjtRQUNoRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELElBQUk7WUFBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7SUFDekQsQ0FBQztJQUlNLFlBQVksQ0FBQyxPQUFlLEVBQUUsT0FBdUMsRUFBRSxRQUFzQjtRQUNoRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksUUFBUSxDQUFDLENBQUEsQ0FBQztZQUMxQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0wsQ0FBQztDQUdKO0FBMURELGdDQTBEQyJ9