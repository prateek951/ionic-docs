/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import '@stencil/router';
import '@stencil/state-tunnel';
import 'ionicons';
import {
  ColorVariable,
} from './components/color-gen/color-variables';
import {
  Link,
  MenuItems,
  Page,
  ReferenceKeys,
} from './definitions';
import {
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface DocsButton {
    'href': string;
    'round': boolean;
  }
  interface DocsButtonAttributes extends StencilHTMLAttributes {
    'href'?: string;
    'round'?: boolean;
  }

  interface DocsCard {
    'header': string;
    'href': string;
    'icon': string;
    'img': string;
  }
  interface DocsCardAttributes extends StencilHTMLAttributes {
    'header'?: string;
    'href'?: string;
    'icon'?: string;
    'img'?: string;
  }

  interface DocsCards {}
  interface DocsCardsAttributes extends StencilHTMLAttributes {}

  interface CodeColor {
    'display': string;
    'mode': string;
    'value': string;
  }
  interface CodeColorAttributes extends StencilHTMLAttributes {
    'display'?: string;
    'mode'?: string;
    'value'?: string;
  }

  interface DocsCode {
    'language': string;
  }
  interface DocsCodeAttributes extends StencilHTMLAttributes {
    'language'?: string;
  }

  interface ColorAccordion {}
  interface ColorAccordionAttributes extends StencilHTMLAttributes {}

  interface ColorGenerator {}
  interface ColorGeneratorAttributes extends StencilHTMLAttributes {
    'onDemoMessage'?: (event: CustomEvent) => void;
  }

  interface ColorGenCssText {
    'cssText': string;
  }
  interface ColorGenCssTextAttributes extends StencilHTMLAttributes {
    'cssText'?: string;
    'onCssTextChange'?: (event: CustomEvent) => void;
  }

  interface ColorGenPreview {
    'cssText': string;
    'demoMode': string;
  }
  interface ColorGenPreviewAttributes extends StencilHTMLAttributes {
    'cssText'?: string;
    'demoMode'?: string;
  }

  interface ColorGenSelectColors {
    'colors': ColorVariable[];
  }
  interface ColorGenSelectColorsAttributes extends StencilHTMLAttributes {
    'colors'?: ColorVariable[];
  }

  interface ColorGenVariableSelector {
    'editable': boolean;
    'isParentOpen': boolean;
    'name': string;
    'property': string;
    'value': string;
  }
  interface ColorGenVariableSelectorAttributes extends StencilHTMLAttributes {
    'editable'?: boolean;
    'isParentOpen'?: boolean;
    'name'?: string;
    'onColorChange'?: (event: CustomEvent) => void;
    'property'?: string;
    'value'?: string;
  }

  interface CommandCursor {
    'blink': boolean;
  }
  interface CommandCursorAttributes extends StencilHTMLAttributes {
    'blink'?: boolean;
  }

  interface CommandLine {
    'nobuttons': boolean;
  }
  interface CommandLineAttributes extends StencilHTMLAttributes {
    'nobuttons'?: boolean;
  }

  interface CommandOutput {}
  interface CommandOutputAttributes extends StencilHTMLAttributes {}

  interface CommandPrompt {}
  interface CommandPromptAttributes extends StencilHTMLAttributes {}

  interface ContributorList {
    'contributors': string[];
    'link': any;
  }
  interface ContributorListAttributes extends StencilHTMLAttributes {
    'contributors'?: string[];
    'link'?: any;
  }

  interface DocsDemo {
    'source': string;
    'url': string;
  }
  interface DocsDemoAttributes extends StencilHTMLAttributes {
    'source'?: string;
    'url'?: string;
  }

  interface DocsDropdown {
    'align': 'left' | 'right' | 'center';
    'close': () => void;
    'label': string;
    'open': () => void;
    'toggle': () => void;
  }
  interface DocsDropdownAttributes extends StencilHTMLAttributes {
    'align'?: 'left' | 'right' | 'center';
    'label'?: string;
  }

  interface FileTreeDirectory {
    'collapsed': boolean;
    'name': string;
  }
  interface FileTreeDirectoryAttributes extends StencilHTMLAttributes {
    'collapsed'?: boolean;
    'name'?: string;
  }

  interface FileTreeFile {
    'name': string;
  }
  interface FileTreeFileAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface FileTree {}
  interface FileTreeAttributes extends StencilHTMLAttributes {}

  interface DocsHeader {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsHeaderAttributes extends StencilHTMLAttributes {
    'onToggleClick'?: (e: Event) => void;
  }

  interface LayeredColorsSelect {}
  interface LayeredColorsSelectAttributes extends StencilHTMLAttributes {}

  interface DocsMenu {
    'onToggleClick': (e: Event) => void;
  }
  interface DocsMenuAttributes extends StencilHTMLAttributes {
    'onToggleClick'?: (e: Event) => void;
  }

  interface DocsMenuToggle {}
  interface DocsMenuToggleAttributes extends StencilHTMLAttributes {}

  interface DocsNav {
    'items': MenuItems;
  }
  interface DocsNavAttributes extends StencilHTMLAttributes {
    'items'?: MenuItems;
  }

  interface DocsPageFooter {
    'page': Page;
  }
  interface DocsPageFooterAttributes extends StencilHTMLAttributes {
    'page'?: Page;
  }

  interface DocsPage {
    'history': RouterHistory;
    'path': string;
  }
  interface DocsPageAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'path'?: string;
  }

  interface DocsPagination {
    'page': Page;
  }
  interface DocsPaginationAttributes extends StencilHTMLAttributes {
    'page'?: Page;
  }

  interface DocsReference {
    'data': any[];
    'keys': ReferenceKeys;
  }
  interface DocsReferenceAttributes extends StencilHTMLAttributes {
    'data'?: any[];
    'keys'?: ReferenceKeys;
  }

  interface DocsRoot {}
  interface DocsRootAttributes extends StencilHTMLAttributes {}

  interface DocsSearch {}
  interface DocsSearchAttributes extends StencilHTMLAttributes {}

  interface SmsForm {}
  interface SmsFormAttributes extends StencilHTMLAttributes {}

  interface SteppedColorGenerator {}
  interface SteppedColorGeneratorAttributes extends StencilHTMLAttributes {}

  interface DocsTableOfContents {
    'basepath': string;
    'label': string;
    'links': Link[];
  }
  interface DocsTableOfContentsAttributes extends StencilHTMLAttributes {
    'basepath'?: string;
    'label'?: string;
    'links'?: Link[];
  }

  interface DocsTabs {
    'initial': string;
    'tabs': string;
  }
  interface DocsTabsAttributes extends StencilHTMLAttributes {
    'initial'?: string;
    'tabs'?: string;
  }

  interface WistiaVideo {
    'id': string;
  }
  interface WistiaVideoAttributes extends StencilHTMLAttributes {
    'id'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DocsButton': Components.DocsButton;
    'DocsCard': Components.DocsCard;
    'DocsCards': Components.DocsCards;
    'CodeColor': Components.CodeColor;
    'DocsCode': Components.DocsCode;
    'ColorAccordion': Components.ColorAccordion;
    'ColorGenerator': Components.ColorGenerator;
    'ColorGenCssText': Components.ColorGenCssText;
    'ColorGenPreview': Components.ColorGenPreview;
    'ColorGenSelectColors': Components.ColorGenSelectColors;
    'ColorGenVariableSelector': Components.ColorGenVariableSelector;
    'CommandCursor': Components.CommandCursor;
    'CommandLine': Components.CommandLine;
    'CommandOutput': Components.CommandOutput;
    'CommandPrompt': Components.CommandPrompt;
    'ContributorList': Components.ContributorList;
    'DocsDemo': Components.DocsDemo;
    'DocsDropdown': Components.DocsDropdown;
    'FileTreeDirectory': Components.FileTreeDirectory;
    'FileTreeFile': Components.FileTreeFile;
    'FileTree': Components.FileTree;
    'DocsHeader': Components.DocsHeader;
    'LayeredColorsSelect': Components.LayeredColorsSelect;
    'DocsMenu': Components.DocsMenu;
    'DocsMenuToggle': Components.DocsMenuToggle;
    'DocsNav': Components.DocsNav;
    'DocsPageFooter': Components.DocsPageFooter;
    'DocsPage': Components.DocsPage;
    'DocsPagination': Components.DocsPagination;
    'DocsReference': Components.DocsReference;
    'DocsRoot': Components.DocsRoot;
    'DocsSearch': Components.DocsSearch;
    'SmsForm': Components.SmsForm;
    'SteppedColorGenerator': Components.SteppedColorGenerator;
    'DocsTableOfContents': Components.DocsTableOfContents;
    'DocsTabs': Components.DocsTabs;
    'WistiaVideo': Components.WistiaVideo;
  }

  interface StencilIntrinsicElements {
    'docs-button': Components.DocsButtonAttributes;
    'docs-card': Components.DocsCardAttributes;
    'docs-cards': Components.DocsCardsAttributes;
    'code-color': Components.CodeColorAttributes;
    'docs-code': Components.DocsCodeAttributes;
    'color-accordion': Components.ColorAccordionAttributes;
    'color-generator': Components.ColorGeneratorAttributes;
    'color-gen-css-text': Components.ColorGenCssTextAttributes;
    'color-gen-preview': Components.ColorGenPreviewAttributes;
    'color-gen-select-colors': Components.ColorGenSelectColorsAttributes;
    'color-gen-variable-selector': Components.ColorGenVariableSelectorAttributes;
    'command-cursor': Components.CommandCursorAttributes;
    'command-line': Components.CommandLineAttributes;
    'command-output': Components.CommandOutputAttributes;
    'command-prompt': Components.CommandPromptAttributes;
    'contributor-list': Components.ContributorListAttributes;
    'docs-demo': Components.DocsDemoAttributes;
    'docs-dropdown': Components.DocsDropdownAttributes;
    'file-tree-directory': Components.FileTreeDirectoryAttributes;
    'file-tree-file': Components.FileTreeFileAttributes;
    'file-tree': Components.FileTreeAttributes;
    'docs-header': Components.DocsHeaderAttributes;
    'layered-colors-select': Components.LayeredColorsSelectAttributes;
    'docs-menu': Components.DocsMenuAttributes;
    'docs-menu-toggle': Components.DocsMenuToggleAttributes;
    'docs-nav': Components.DocsNavAttributes;
    'docs-page-footer': Components.DocsPageFooterAttributes;
    'docs-page': Components.DocsPageAttributes;
    'docs-pagination': Components.DocsPaginationAttributes;
    'docs-reference': Components.DocsReferenceAttributes;
    'docs-root': Components.DocsRootAttributes;
    'docs-search': Components.DocsSearchAttributes;
    'sms-form': Components.SmsFormAttributes;
    'stepped-color-generator': Components.SteppedColorGeneratorAttributes;
    'docs-table-of-contents': Components.DocsTableOfContentsAttributes;
    'docs-tabs': Components.DocsTabsAttributes;
    'wistia-video': Components.WistiaVideoAttributes;
  }


  interface HTMLDocsButtonElement extends Components.DocsButton, HTMLStencilElement {}
  var HTMLDocsButtonElement: {
    prototype: HTMLDocsButtonElement;
    new (): HTMLDocsButtonElement;
  };

  interface HTMLDocsCardElement extends Components.DocsCard, HTMLStencilElement {}
  var HTMLDocsCardElement: {
    prototype: HTMLDocsCardElement;
    new (): HTMLDocsCardElement;
  };

  interface HTMLDocsCardsElement extends Components.DocsCards, HTMLStencilElement {}
  var HTMLDocsCardsElement: {
    prototype: HTMLDocsCardsElement;
    new (): HTMLDocsCardsElement;
  };

  interface HTMLCodeColorElement extends Components.CodeColor, HTMLStencilElement {}
  var HTMLCodeColorElement: {
    prototype: HTMLCodeColorElement;
    new (): HTMLCodeColorElement;
  };

  interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {}
  var HTMLDocsCodeElement: {
    prototype: HTMLDocsCodeElement;
    new (): HTMLDocsCodeElement;
  };

  interface HTMLColorAccordionElement extends Components.ColorAccordion, HTMLStencilElement {}
  var HTMLColorAccordionElement: {
    prototype: HTMLColorAccordionElement;
    new (): HTMLColorAccordionElement;
  };

  interface HTMLColorGeneratorElement extends Components.ColorGenerator, HTMLStencilElement {}
  var HTMLColorGeneratorElement: {
    prototype: HTMLColorGeneratorElement;
    new (): HTMLColorGeneratorElement;
  };

  interface HTMLColorGenCssTextElement extends Components.ColorGenCssText, HTMLStencilElement {}
  var HTMLColorGenCssTextElement: {
    prototype: HTMLColorGenCssTextElement;
    new (): HTMLColorGenCssTextElement;
  };

  interface HTMLColorGenPreviewElement extends Components.ColorGenPreview, HTMLStencilElement {}
  var HTMLColorGenPreviewElement: {
    prototype: HTMLColorGenPreviewElement;
    new (): HTMLColorGenPreviewElement;
  };

  interface HTMLColorGenSelectColorsElement extends Components.ColorGenSelectColors, HTMLStencilElement {}
  var HTMLColorGenSelectColorsElement: {
    prototype: HTMLColorGenSelectColorsElement;
    new (): HTMLColorGenSelectColorsElement;
  };

  interface HTMLColorGenVariableSelectorElement extends Components.ColorGenVariableSelector, HTMLStencilElement {}
  var HTMLColorGenVariableSelectorElement: {
    prototype: HTMLColorGenVariableSelectorElement;
    new (): HTMLColorGenVariableSelectorElement;
  };

  interface HTMLCommandCursorElement extends Components.CommandCursor, HTMLStencilElement {}
  var HTMLCommandCursorElement: {
    prototype: HTMLCommandCursorElement;
    new (): HTMLCommandCursorElement;
  };

  interface HTMLCommandLineElement extends Components.CommandLine, HTMLStencilElement {}
  var HTMLCommandLineElement: {
    prototype: HTMLCommandLineElement;
    new (): HTMLCommandLineElement;
  };

  interface HTMLCommandOutputElement extends Components.CommandOutput, HTMLStencilElement {}
  var HTMLCommandOutputElement: {
    prototype: HTMLCommandOutputElement;
    new (): HTMLCommandOutputElement;
  };

  interface HTMLCommandPromptElement extends Components.CommandPrompt, HTMLStencilElement {}
  var HTMLCommandPromptElement: {
    prototype: HTMLCommandPromptElement;
    new (): HTMLCommandPromptElement;
  };

  interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {}
  var HTMLContributorListElement: {
    prototype: HTMLContributorListElement;
    new (): HTMLContributorListElement;
  };

  interface HTMLDocsDemoElement extends Components.DocsDemo, HTMLStencilElement {}
  var HTMLDocsDemoElement: {
    prototype: HTMLDocsDemoElement;
    new (): HTMLDocsDemoElement;
  };

  interface HTMLDocsDropdownElement extends Components.DocsDropdown, HTMLStencilElement {}
  var HTMLDocsDropdownElement: {
    prototype: HTMLDocsDropdownElement;
    new (): HTMLDocsDropdownElement;
  };

  interface HTMLFileTreeDirectoryElement extends Components.FileTreeDirectory, HTMLStencilElement {}
  var HTMLFileTreeDirectoryElement: {
    prototype: HTMLFileTreeDirectoryElement;
    new (): HTMLFileTreeDirectoryElement;
  };

  interface HTMLFileTreeFileElement extends Components.FileTreeFile, HTMLStencilElement {}
  var HTMLFileTreeFileElement: {
    prototype: HTMLFileTreeFileElement;
    new (): HTMLFileTreeFileElement;
  };

  interface HTMLFileTreeElement extends Components.FileTree, HTMLStencilElement {}
  var HTMLFileTreeElement: {
    prototype: HTMLFileTreeElement;
    new (): HTMLFileTreeElement;
  };

  interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {}
  var HTMLDocsHeaderElement: {
    prototype: HTMLDocsHeaderElement;
    new (): HTMLDocsHeaderElement;
  };

  interface HTMLLayeredColorsSelectElement extends Components.LayeredColorsSelect, HTMLStencilElement {}
  var HTMLLayeredColorsSelectElement: {
    prototype: HTMLLayeredColorsSelectElement;
    new (): HTMLLayeredColorsSelectElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsMenuToggleElement extends Components.DocsMenuToggle, HTMLStencilElement {}
  var HTMLDocsMenuToggleElement: {
    prototype: HTMLDocsMenuToggleElement;
    new (): HTMLDocsMenuToggleElement;
  };

  interface HTMLDocsNavElement extends Components.DocsNav, HTMLStencilElement {}
  var HTMLDocsNavElement: {
    prototype: HTMLDocsNavElement;
    new (): HTMLDocsNavElement;
  };

  interface HTMLDocsPageFooterElement extends Components.DocsPageFooter, HTMLStencilElement {}
  var HTMLDocsPageFooterElement: {
    prototype: HTMLDocsPageFooterElement;
    new (): HTMLDocsPageFooterElement;
  };

  interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {}
  var HTMLDocsPageElement: {
    prototype: HTMLDocsPageElement;
    new (): HTMLDocsPageElement;
  };

  interface HTMLDocsPaginationElement extends Components.DocsPagination, HTMLStencilElement {}
  var HTMLDocsPaginationElement: {
    prototype: HTMLDocsPaginationElement;
    new (): HTMLDocsPaginationElement;
  };

  interface HTMLDocsReferenceElement extends Components.DocsReference, HTMLStencilElement {}
  var HTMLDocsReferenceElement: {
    prototype: HTMLDocsReferenceElement;
    new (): HTMLDocsReferenceElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLDocsSearchElement extends Components.DocsSearch, HTMLStencilElement {}
  var HTMLDocsSearchElement: {
    prototype: HTMLDocsSearchElement;
    new (): HTMLDocsSearchElement;
  };

  interface HTMLSmsFormElement extends Components.SmsForm, HTMLStencilElement {}
  var HTMLSmsFormElement: {
    prototype: HTMLSmsFormElement;
    new (): HTMLSmsFormElement;
  };

  interface HTMLSteppedColorGeneratorElement extends Components.SteppedColorGenerator, HTMLStencilElement {}
  var HTMLSteppedColorGeneratorElement: {
    prototype: HTMLSteppedColorGeneratorElement;
    new (): HTMLSteppedColorGeneratorElement;
  };

  interface HTMLDocsTableOfContentsElement extends Components.DocsTableOfContents, HTMLStencilElement {}
  var HTMLDocsTableOfContentsElement: {
    prototype: HTMLDocsTableOfContentsElement;
    new (): HTMLDocsTableOfContentsElement;
  };

  interface HTMLDocsTabsElement extends Components.DocsTabs, HTMLStencilElement {}
  var HTMLDocsTabsElement: {
    prototype: HTMLDocsTabsElement;
    new (): HTMLDocsTabsElement;
  };

  interface HTMLWistiaVideoElement extends Components.WistiaVideo, HTMLStencilElement {}
  var HTMLWistiaVideoElement: {
    prototype: HTMLWistiaVideoElement;
    new (): HTMLWistiaVideoElement;
  };

  interface HTMLElementTagNameMap {
    'docs-button': HTMLDocsButtonElement
    'docs-card': HTMLDocsCardElement
    'docs-cards': HTMLDocsCardsElement
    'code-color': HTMLCodeColorElement
    'docs-code': HTMLDocsCodeElement
    'color-accordion': HTMLColorAccordionElement
    'color-generator': HTMLColorGeneratorElement
    'color-gen-css-text': HTMLColorGenCssTextElement
    'color-gen-preview': HTMLColorGenPreviewElement
    'color-gen-select-colors': HTMLColorGenSelectColorsElement
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement
    'command-cursor': HTMLCommandCursorElement
    'command-line': HTMLCommandLineElement
    'command-output': HTMLCommandOutputElement
    'command-prompt': HTMLCommandPromptElement
    'contributor-list': HTMLContributorListElement
    'docs-demo': HTMLDocsDemoElement
    'docs-dropdown': HTMLDocsDropdownElement
    'file-tree-directory': HTMLFileTreeDirectoryElement
    'file-tree-file': HTMLFileTreeFileElement
    'file-tree': HTMLFileTreeElement
    'docs-header': HTMLDocsHeaderElement
    'layered-colors-select': HTMLLayeredColorsSelectElement
    'docs-menu': HTMLDocsMenuElement
    'docs-menu-toggle': HTMLDocsMenuToggleElement
    'docs-nav': HTMLDocsNavElement
    'docs-page-footer': HTMLDocsPageFooterElement
    'docs-page': HTMLDocsPageElement
    'docs-pagination': HTMLDocsPaginationElement
    'docs-reference': HTMLDocsReferenceElement
    'docs-root': HTMLDocsRootElement
    'docs-search': HTMLDocsSearchElement
    'sms-form': HTMLSmsFormElement
    'stepped-color-generator': HTMLSteppedColorGeneratorElement
    'docs-table-of-contents': HTMLDocsTableOfContentsElement
    'docs-tabs': HTMLDocsTabsElement
    'wistia-video': HTMLWistiaVideoElement
  }

  interface ElementTagNameMap {
    'docs-button': HTMLDocsButtonElement;
    'docs-card': HTMLDocsCardElement;
    'docs-cards': HTMLDocsCardsElement;
    'code-color': HTMLCodeColorElement;
    'docs-code': HTMLDocsCodeElement;
    'color-accordion': HTMLColorAccordionElement;
    'color-generator': HTMLColorGeneratorElement;
    'color-gen-css-text': HTMLColorGenCssTextElement;
    'color-gen-preview': HTMLColorGenPreviewElement;
    'color-gen-select-colors': HTMLColorGenSelectColorsElement;
    'color-gen-variable-selector': HTMLColorGenVariableSelectorElement;
    'command-cursor': HTMLCommandCursorElement;
    'command-line': HTMLCommandLineElement;
    'command-output': HTMLCommandOutputElement;
    'command-prompt': HTMLCommandPromptElement;
    'contributor-list': HTMLContributorListElement;
    'docs-demo': HTMLDocsDemoElement;
    'docs-dropdown': HTMLDocsDropdownElement;
    'file-tree-directory': HTMLFileTreeDirectoryElement;
    'file-tree-file': HTMLFileTreeFileElement;
    'file-tree': HTMLFileTreeElement;
    'docs-header': HTMLDocsHeaderElement;
    'layered-colors-select': HTMLLayeredColorsSelectElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-menu-toggle': HTMLDocsMenuToggleElement;
    'docs-nav': HTMLDocsNavElement;
    'docs-page-footer': HTMLDocsPageFooterElement;
    'docs-page': HTMLDocsPageElement;
    'docs-pagination': HTMLDocsPaginationElement;
    'docs-reference': HTMLDocsReferenceElement;
    'docs-root': HTMLDocsRootElement;
    'docs-search': HTMLDocsSearchElement;
    'sms-form': HTMLSmsFormElement;
    'stepped-color-generator': HTMLSteppedColorGeneratorElement;
    'docs-table-of-contents': HTMLDocsTableOfContentsElement;
    'docs-tabs': HTMLDocsTabsElement;
    'wistia-video': HTMLWistiaVideoElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
