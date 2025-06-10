export declare type AttributeValueType = string | string[] | boolean | number;

/**
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
    attributes?: { [name: string]: AttributeValueType };
    /**
     * Indicates if the element's first child node is a text node. If so, the element's
     * opening tag does not end with a newline.
     */
    startsWithText?: boolean;
    /**
     * Indicates if the element's last child node is a text node. If so, no spacing is written 
     * before the element's closing tag.
     */
    endsWithText?: boolean;
    /**
     * Indicates if the element is followed by a text node. If so, the element's
     * closing tag won't end with a newline.
     */
    preceedsText?: boolean;
    /**
     * Indicates if the element follows a text node. If so, the element won't start
     * on a new line.
     */
    succeedsText?: boolean;
}
