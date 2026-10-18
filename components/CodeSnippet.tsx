'use client';

import { useState } from 'react';

const TOKEN_REGEX = /(\/\/[^\n]*|#[^\n]*|--[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b(?:async|await|const|let|function|return|throw|new|if|else|try|catch|class|interface|type|export|import|from|true|false|null|undefined|SELECT|FROM|WHERE|JOIN|INSERT|UPDATE|CREATE|TABLE)\b|\b\d+(?:\.\d+)?\b)/g;
const KEYWORD = /^(?:async|await|const|let|function|return|throw|new|if|else|try|catch|class|interface|type|export|import|from|true|false|null|undefined|SELECT|FROM|WHERE|JOIN|INSERT|UPDATE|CREATE|TABLE)$/;

function highlight(source: string) {
  return source.split(TOKEN_REGEX).map((part, index) => {
    if (!part) return null;
    let tone: string | undefined;
    if (/^(?:\/\/|#|--)/.test(part)) tone = 'comment';
    else if (/^["'`]/.test(part)) tone = 'string';
    else if (KEYWORD.test(part)) tone = 'keyword';
    else if (/^\d/.test(part)) tone = 'number';
    return tone ? <span className={'code-' + tone} key={index}>{part}</span> : part;
  });
}

export default function CodeSnippet({ code, language }: { code: string; language: string }) {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'unavailable'>('idle');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('unavailable');
    }
  };

  return (
    <div className="editorial-code">
      <div className="editorial-code-head">
        <span>{language || 'text'}</span>
        <button type="button" onClick={copy} aria-label="Copy code snippet" className="editorial-copy">
          {copyStatus === 'copied' ? 'Copied ✓' : copyStatus === 'unavailable' ? 'Select to copy' : 'Copy code'}
        </button>
      </div>
      <pre tabIndex={0}><code>{highlight(code)}</code></pre>
    </div>
  );
}
