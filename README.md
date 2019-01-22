# Popup Content

A components which: -

- PopupInfo          Puts an icon on the page which when clicked shows a modal info screen
The icon, icon size, icon colour, popup title, popup close button and popup content can all be configured.


## Setup

- Grab the files from the /dist folder and import into your tenant.

- Add the files to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/PopupInfo.css',
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/PopupInfo.js'
                ],


- Add a component to your page, any type, save it then change it's "componentType" to "PopupInfo" in the metadata editor and save it.
e.g. 
            "componentType": "PopupInfo",


- Add a Content value to hold the message you want to display. e.g. myContent

- Set the component's "State" to a the new field (e.g. myContent). 

!! Remember you can override any of the classes in your player to change the appearance


## Extra Configuration

You can add attributes to the component to control it's appearance: -

- PopupTitle                    A string to display in the title bar of the popup.
- PopupCloseButton              A string to display in the close button of the popup.

- Icon                          The name of the bootstrap glyph icon to show e.g. "wrench"
- IconColour                    The name of a standard colour or an rgb value e.g. "red" or "#ff0000" to use.
- IconFontSizePoints            The point size of the icon.
- IconTooltip                   The tooltip to display when the icon is hovered
