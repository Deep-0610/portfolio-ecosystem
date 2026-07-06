'use client';

import { useMemo, useState } from 'react';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Hi! I’m your resume assistant. Ask about GitHub, LeetCode, projects, or certificates.',
    },
  ]);

  const quickPrompts = useMemo(
    () => [
      'Show my top projects',
      'What certificates do I have?',
      'Where can recruiters find my GitHub?',
      'How is my UI/UX built?',
    ],
    []
  );

  function addMessage(text) {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: 'user', text },
      {
        id: Date.now() + 1,
        role: 'assistant',
        text: 'Nice question. Scroll to the relevant section for the latest details, or click the live links in the navbar.',
      },
    ]);
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-white/90 text-slate-950 shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition duration-300 hover:scale-105 hover:shadow-[0_24px_50px_rgba(16,185,129,0.18)] animate-soft-float sm:h-16 sm:w-16"
        aria-label={open ? 'Close chat widget' : 'Open chat widget'}
      >
        <span className="text-2xl">🤖</span>
      </button>

      <div
        className={`w-[calc(100vw-2rem)] max-w-[420px] origin-bottom-right rounded-[1.5rem] border border-slate-200/70 bg-white/95 backdrop-blur-2xl shadow-[0_25px_80px_rgba(15,23,42,0.12)] transition-all duration-300 sm:rounded-[1.75rem] ${
          open
            ? 'opacity-100 scale-100 visible pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 invisible pointer-events-none translate-y-2'
        }`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-slate-200/80 px-4 py-4">
          <div>
            <div className="text-sm font-bold text-slate-950">Resume Assistant</div>
            <div className="text-xs text-slate-500">Ask anything. Clean answers.</div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-slate-500 transition hover:text-slate-800"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[54vh] space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
            >
              <div
                className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm ${
                  message.role === 'user'
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-slate-950'
                    : 'bg-slate-950/5 border border-slate-200 text-slate-950'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-slate-200/80 px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => addMessage(prompt)}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-emerald-400 hover:text-slate-950"
              >
                {prompt}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => addMessage('Tell me the main highlights of this resume portfolio.')}
            className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/10 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-500/15"
          >
            Get highlights
          </button>
        </div>
      </div>
    </div>
  );
}

