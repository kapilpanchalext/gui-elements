import ButtonControls from './buttoncontrols/ButtonControls';
import ContentEditable from './contenteditable/ContentEditable';
import "./ContentEditableLayout.css";

type Props = {}

const ContentEditableLayout = (props: Props) => {
  return (
    <>
        <div className="content-editable-layout">
            
            <div className="button-controls">
                <ButtonControls />
            </div>
            
            <div className='scroll-bar'>
            </div>
            
            <div className='content-editable-page-marker'>
                
                <div className='editor-content'>
                    <ContentEditable />
                </div>

                <div className='page-marker'>

                </div>
            </div>
        </div>
    </>
  )
}

export default ContentEditableLayout;