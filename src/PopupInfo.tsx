
declare var manywho: any;

import * as React from 'react';
import './PopupInfo.css';
import ModalDialog from "./ModalDialog";

class PopupInfo extends React.Component<any, any> 
{   
    componentId: string = "";
    flowKey: string ="";    
    attributes : any = {};
    modalShown : boolean = false;

    constructor(props : any)
	{
        super(props);
        
        this.componentId = props.id;
        this.flowKey = props.flowKey;

        //push attributes into keyed map 
		var flowModel = manywho.model.getComponent(this.props.id,   this.props.flowKey);
		if(flowModel.attributes)
		{
			for(var key in flowModel.attributes)
			{
				this.attributes[key] = flowModel.attributes[key];
			}
        }
    }

    
    componentDidMount() 
    {
        this.forceUpdate();
    }

    componentDidUpdate()
    {

    }

	getAttribute(attributeName : string)
	{
		if(this.attributes[attributeName])
		{
			return this.attributes[attributeName];
		}
		else
		{
			return null;
		}
	}

       
    render()
    {
        const flowModel = manywho.model.getComponent(this.componentId,   this.flowKey);
        const flowState = manywho.state.getComponent(this.componentId,   this.flowKey);

        var filePick : any;
        
        var width = flowModel.width + "px";
        var height=flowModel.height + "px";
        
        var icon  : string = this.getAttribute("Icon") || "wrench";
        var iconPointSize  : number = parseInt(this.getAttribute("IconFontSizePoints") || "18");
        var iconTooltip : string = this.getAttribute("IconTooltip") || "Click";
        var iconColour : string = this.getAttribute("IconColour") || "#000000";

        var popupTitle : string = this.getAttribute("PopupTitle") || "";
        var popupCancel : string = this.getAttribute("PopupCancelButton") || "Close";

        var messageContent = flowState.contentValue;
        messageContent = {__html: flowState.contentValue};

        var modal : any;
        if(this.modalShown)
        {
            modal=  <ModalDialog onCloseRequest={this.hidePopup.bind(this)}>
                        <div className="modal-dialog">
                            <div className="modal-dialog-header">
                                <div style={{float:'left'}}>
                                    <span className="modal-dialog-header-title">{popupTitle}</span>
                                </div>
                                <div style={{float:'right'}}>
                                    
                                </div>
                            </div>
                            <div className="modal-dialog-body">
                            <div dangerouslySetInnerHTML={messageContent}></div>
                            </div>
                            <div className="modal-dialog-button-bar">
                                <button className="modal-dialog-button-bar-button" title={popupCancel} onClick={this.hidePopup.bind(this)}>Cancel</button>
                            </div>
                        </div>
                    </ModalDialog>
        }

        var iconClass = "glyphicon glyphicon-" + icon + " popup-info-icon"
        var iconStyle={'font-size': iconPointSize , "color": iconColour};
        return <div className="popup-info">
                   <span className={iconClass} style={iconStyle} title={iconTooltip} onClick={this.showPopup.bind(this)}></span>
                    {modal}
               </div>
    }

    showPopup()
    {
        this.modalShown = true;
        this.forceUpdate();
    }

    hidePopup(action : any)
    {
        this.modalShown = false;
        this.forceUpdate();
    }
}

manywho.component.register('PopupInfo', PopupInfo);

export default PopupInfo;