## Yellicode HTML

### HTML package for Yellicode

Yellicode lets you build your own code generators with TypeScript. It consists of a Node.js CLI (Command Line Interface) as well as extensible APIs, making it easy for developers to create, share and re-use code generators.

Check out [our website](https://www.yellicode.com) for more.

This extension contains a HtmlWriter class and other utilities that make is easier to generate HTML code from a Yellicode template.

License: MIT

## Using the HTML package
### Prerequisites
In order to run a code generation template, you must have the CLI installed (@yellicode/cli) globally and have a valid *codegenconfig.json* file in your working directory. Please refer to the [installation instructions](https://www.yellicode.com/docs/installation) and the [quick start](https://www.yellicode.com/docs/quickstart) for more.

You should also have the *@yellicode/model* package installed in your working directory:
```
npm install @yellicode/model --save-dev
```

### Installation
Open a terminal/command prompt in your working directory and install this package as a dev dependency:

```
npm install @yellicode/html --save-dev
```

### Sample template
This basic example generates a HTML file containing a Bootstrap form for each class in the model. For a more advanced example with Angular support, check out
the Yellicode [bookstore tutorial](https://www.yellicode.com/docs/tutorial/bookstore).

```ts
import * as model from '@yellicode/model';
import { Generator, TextWriter, NameUtility } from '@yellicode/templating';
import { HtmlWriter } from '@yellicode/html';

/**
 * Generates the contents of a Bootstrap form-group for the provided property. 
 */
const formGroupTemplate  = (writer: HtmlWriter, att: model.Property) => {
    const htmlInputId = NameUtility.camelToKebabCase(att.name);     
    const isRequired = att.isRequiredAndSinglevalued();

    // Common attributes
    const htmlAttributes = {
        id: htmlInputId,
        name: att.name,
        required: isRequired
    };

    // Label 
    writer.writeElement('label', { attributes: { for: htmlInputId } }, att.name);
    
    // Input
    let htmlInputType: string;
    if (model.isPrimitiveBoolean(att.type)) {
        htmlInputType = 'checkbox';
    }
    else if (model.isPrimitiveInteger(att.type)) {
        htmlInputType = 'number';
    }
    else htmlInputType = 'text'; 
    htmlAttributes['type'] = htmlInputType;

    writer.writeElement('input', {classNames: 'form-control', attributes: htmlAttributes});
}

/**
 * Generates a Bootstrap form for the provided model Class. 
 */
const formTemplate = (writer: HtmlWriter, c: model.Class) => {
    const allAttributes = c.ownedAttributes;    
    writer.writeElement('form', {}, () => { 
        allAttributes.forEach((att) => {
            writer.writeElement('div', { classNames: 'form-group' }, () => {
                formGroupTemplate(writer, att);
            });
        });

        // Action buttons
        writer.writeElement('button', {
            classNames: 'btn btn-primary float-right',
            attributes: {
                type: 'submit'
            }
        }, 'Save');

        writer.writeElement('button', {
            classNames: 'btn btn-danger',
            attributes: {
                type: 'submit'
            }
        }, 'Delete');
    });
}

Generator.getModel().then((pack: model.Package) => {
    pack.getAllClasses().forEach((eachClass) => {
        Generator.generate({ outputFile: `${eachClass.name}.html` }, (textWriter: TextWriter) => {
            const htmlWriter = new HtmlWriter(textWriter);
            formTemplate(htmlWriter, eachClass);
        });
    });
})
```

### API Documentation
For all HtmlWriter functions and options, check out the [API documentation](https://github.com/yellicode/yellicode-html/blob/master/docs/api.md).