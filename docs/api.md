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

### HtmlWriter.writeElement(tagName, options, innerHtml) : this
Writes a HTML element with the specified tag name and optional inner HTML string.
Writes a HTML element with the specified tag name and optional callback function that writes the inner HTML.
* tagName: string

   The HTML tag name (without opening or closing brackets).
* options: [HtmlElementOptions](#html-element-options)

   Specifies any class names or HTML attributes to be added.
* innerHtml: string

   An optional HTML string containing the element's inner HTML.
### HtmlWriter.writeElement(tagName, options, innerHtml) : this
Writes a HTML element with the specified tag name and optional inner HTML string.
Writes a HTML element with the specified tag name and optional callback function that writes the inner HTML.
* tagName: string

   The HTML tag name (without opening or closing brackets).
* options: [HtmlElementOptions](#html-element-options)

   Specifies any class names or HTML attributes to be added.
* innerHtml: (writer: HtmlWriter) => void

   An optional callback function that writes the element's inner HTML.

