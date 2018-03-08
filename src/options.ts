﻿/**
 * Defines the options for html elements.
 */
export interface HtmlElementOptions {
    /**
     * Optional: a string containing the exact value of the 'class' attribute (so, provide multiple 
     * class names separated by a space).
     */
    classNames?: string;
    /**
     * Optional: contains a dictionary of all attributes to be added to the element.
     */
    attributes?: { [name: string]: string | boolean };
}
