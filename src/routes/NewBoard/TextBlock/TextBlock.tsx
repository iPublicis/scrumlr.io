import * as React from 'react';

export interface TextBlockProps {
  header: string;
  children?: any;
}

const TextBlock: React.FunctionComponent<TextBlockProps> = ({
  header,
  children
}) => (
  <div>
    <h1 className="new-board__action-area-header">{header}</h1>
    {!!children && (
      <p className="new-board__action-area-paragraph">{children}</p>
    )}
  </div>
);

export default TextBlock;
