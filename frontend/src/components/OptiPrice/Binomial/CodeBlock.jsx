// src/components/CodeBlock.jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({ code, language = 'python', title }) => (
  <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
    {title && (
      <div className="bg-gray-700 text-white px-4 py-2 text-sm font-semibold flex items-center">
        <span className="mr-2">💻</span>
        {title}
      </div>
    )}
    <div className="p-0">
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          borderRadius: '0',
          fontSize: '0.875rem',
          margin: 0,
          background: '#1f2937',
          padding: '1rem',
        }}
        showLineNumbers={true}
        lineNumberStyle={{ 
          color: '#6b7280', 
          fontSize: '0.75rem',
          paddingRight: '1rem',
          borderRight: '1px solid #374151',
          marginRight: '1rem'
        }}
        wrapLines={true}
        wrapLongLines={true}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  </div>
);