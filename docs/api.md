## Contents
* [HtmlElementOptions](#html-element-options) interface
* [HtmlWriter](#html-writer) class
## <a name="html-element-options"></a> HtmlElementOptions interface
Defines the options for html elements.

### HtmlElementOptions.attributes: { [name: string]: string | boolean; }
Optional: contains a dictionary of all attributes to be added to the element.
### HtmlElementOptions.classNames: string
Optional: a string containing the exact value of the 'class' attribute (so, provide multiple 
class names separated by a space).

## <a name="html-writer"></a> HtmlWriter class
A very basic CodeWriter for writing HTML.

### HtmlWriter.writeElement(tagName, options, innerHtml) : void
* tagName: string
* options: [HtmlElementOptions](#html-element-options)
* innerHtml: string
### HtmlWriter.writeElement(tagName, options, innerHtml) : void
* tagName: string
* options: [HtmlElementOptions](#html-element-options)
* innerHtml: (writer: HtmlWriter) => void

