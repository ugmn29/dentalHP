"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, MessageCircle } from 'lucide-react';

export const AIChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; text: string }[]>([
        { role: 'system', text: 'こんにちは！Fデンタルオフィス 豊洲プライムスクエア院のAIアシスタントです。🦷\nお子様の歯のことや、治療について気になることはありますか？お気軽に話しかけてくださいね。' }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setInput("");
        setIsLoading(true);

        try {
            const apiKey = ""; // Runtime provided key
            const systemPrompt = `
        あなたは「Fデンタルオフィス 豊洲プライムスクエア院」の優しいAIアシスタントです。
        
        【クリニックの特徴】
        - ママとこどものための歯科医院
        - 0歳からの「お口育て」（小児矯正）に力を入れている
        - 痛くない「無痛治療」
        - 治療後の未来を見せる「審美歯科」
        - お子様連れにも配慮した診療環境・天井テレビ完備
        
        【あなたの振る舞い】
        - 常に親切で、共感的で、優しい口調（「〜ですね」「〜ですよ」など）で話してください。
        - 医療的な確定診断は絶対に避けてください。「詳しくは医師の診断が必要ですが」といったクッション言葉を使ってください。
        - 最終的には「Web予約」や「来院」を優しく促してください。
        - 絵文字（🦷, ✨, ☺︎など）を適度に使って親しみやすくしてください。
        - 回答は長すぎないように（3〜4文程度）まとめてください。
      `;

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: userMessage }] }],
                        systemInstruction: { parts: [{ text: systemPrompt }] }
                    })
                }
            );

            if (!response.ok) throw new Error('API Request failed');

            const data = await response.json();
            const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "すみません、うまく答えられませんでした。もう一度試してみてください。";

            setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
        } catch (error) {
            console.error("Gemini API Error:", error);
            setMessages(prev => [...prev, { role: 'ai', text: "申し訳ありません。現在AIサーバーが混み合っており応答できません。お電話にてお問い合わせください。" }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-[80px] md:bottom-8 right-4 md:right-8 z-[60] flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            {isOpen && (
                <div className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-[320px] md:w-[380px] h-[450px] flex flex-col overflow-hidden border border-[#F4C1E8] mb-4 animate-fade-in-up">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#F4C1E8] to-[#B2198B] p-4 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <Bot size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">AI歯科相談 ✨</p>
                                <p className="text-[10px] opacity-90">Powered by Gemini</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 bg-[#FDFBF7] space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${msg.role === 'user'
                                    ? 'bg-[#B2198B] text-white rounded-br-none'
                                    : 'bg-white text-[#5A4D41] border border-gray-100 rounded-bl-none'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#B2198B] rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-[#B2198B] rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-[#B2198B] rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-[#B2198B] transition">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="歯のお悩みを入力..."
                                className="flex-1 bg-transparent outline-none text-sm text-[#5A4D41]"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim() || isLoading}
                                className={`p-1.5 rounded-full transition ${input.trim() && !isLoading ? 'bg-[#B2198B] text-white hover:bg-[#C12BA0]' : 'bg-gray-200 text-gray-400'
                                    }`}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-gray-400 mt-2">
                            ※AIの回答は診断ではありません。正確な診断は来院をお勧めします。
                        </p>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto bg-white text-[#B2198B] hover:bg-[#FCE4F5] w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(178,25,139,0.3)] border-2 border-[#B2198B] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} className="group-hover:animate-pulse" />}
                {!isOpen && (
                    <span className="absolute -top-2 -right-2 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B2198B] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-[#FF4757] text-white text-[10px] font-bold items-center justify-center">1</span>
                    </span>
                )}
            </button>
        </div>
    );
};
