import ContentEditableLayout from "../contenteditablelayout/ContentEditableLayout";
import TableOfContentsLayout from "../tableofcontentslayout/TableOfContentsLayout";
import "./RichtextLayout.css";

type Props = {
  layoutHeight: number;
}

const RichtextLayout = ({layoutHeight}: Props) => {

  return (
    <>
      <div className="rich-text-layout" style={{ height: `${layoutHeight}px` }}>
        <div className="table-of-contents">
          <TableOfContentsLayout />
        </div>
        <div className="editor-content">
          <ContentEditableLayout />
        </div>
      </div>
    </>
  )
}

export default RichtextLayout;